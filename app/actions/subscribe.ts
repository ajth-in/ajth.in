"use server";
import getRedis from "@/lib/redis";
import { headers } from "next/headers";

const WINDOW_SECONDS = 60;
const MAX_REQUESTS = 5;

const FORM_ID = process.env.LOOP_KEY;
const DOMAIN = "app.loops.so";

export type SubscribeResult =
  | { status: "success" }
  | { status: "error"; message: string };

export async function subscribeToNewsletter(
  email: string
): Promise<SubscribeResult> {
  if (!/.+@.+/.test(email)) {
    return { status: "error", message: "Invalid email." };
  }
  if (!process.env.LOOP_KEY || !process.env.REDIS_URL) {
    return {
      status: "error",
      message: "Too many requests. Try again later.",
    };
  }

  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const redis = await getRedis();
  const key = `newsletter:${ip}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, WINDOW_SECONDS);
  }

  if (count > MAX_REQUESTS) {
    return {
      status: "error",
      message: "Too many requests. Try again later.",
    };
  }

  try {
    const body = new URLSearchParams({ email });

    const res = await fetch(
      `https://${DOMAIN}/api/newsletter-form/${FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return { status: "error", message: "Submission failed." };
    }

    return { status: "success" };
  } catch {
    return { status: "error", message: "Submission failed." };
  }
}
