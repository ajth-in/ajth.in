"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter } from "app/actions/subscribe";

type FormState = "INIT" | "SUBMITTING" | "ERROR" | "SUCCESS";

export default function NewsLetterSignup() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("INIT");
  const [errorMessage, setErrorMessage] = useState("");

  const hasRecentSubmission = () => {
    const now = Date.now();
    const previous = localStorage.getItem("loops-form-timestamp");

    if (previous && Number(previous) + 60_000 > now) {
      setFormState("ERROR");
      setErrorMessage("Please wait before trying again.");
      return true;
    }

    localStorage.setItem("loops-form-timestamp", now.toString());
    return false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState !== "INIT") return;

    if (hasRecentSubmission()) return;

    setFormState("SUBMITTING");

    const result = await subscribeToNewsletter(email);

    if (result.status === "success") {
      setFormState("SUCCESS");
      setEmail("");
      return;
    }

    setFormState("ERROR");
    setErrorMessage(result.message);
    localStorage.setItem("loops-form-timestamp", "");
  };

  if (formState === "SUCCESS") {
    return (
      <p
        className="rounded-md p-2 text-sm my-2
          bg-emerald-100 text-emerald-800
          dark:bg-emerald-800 dark:text-emerald-200"
      >
        Subscription confirmed.
      </p>
    );
  }
  return (
    <div
      className="
    rounded-2xl border max-w-xl p-4
    border-neutral-200 dark:border-neutral-700

    bg-gradient-to-br
    from-neutral-100 to-white
    dark:from-neutral-900 dark:to-neutral-800
  "
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Thinking about starting a newsletter
        </h3>

        <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
          If you like content like this, leave your email. I will send one
          update when it is ready.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
      mt-4 flex  gap-2 rounded-xl border
      bg-white px-2 py-2
      dark:bg-neutral-800 dark:border-neutral-700
    "
      >
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-9 border-none bg-transparent text-sm shadow-none"
          required
        />

        <Button
          type="submit"
          disabled={formState === "SUBMITTING"}
          className="h-9 px-4 text-sm"
        >
          {formState === "SUBMITTING" ? "…" : "Notify me"}
        </Button>
      </form>

      <p
        className={`mt-2 text-xs  dark:text-neutral-500 ${
          errorMessage.length ? " text-red-500 " : " text-neutral-500 "
        }`}
      >
        {errorMessage.length
          ? errorMessage
          : " No spam. One email when things are live."}
      </p>
    </div>
  );
}
