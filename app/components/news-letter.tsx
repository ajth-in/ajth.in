"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter } from "app/actions/subscribe";
import { css } from "styled-system/css";

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
        className={css({
          borderRadius: "md",
          padding: "0.5rem",
          fontSize: "0.875rem",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          backgroundColor: "rgb(209 250 229)",
          color: "rgb(6 95 70)",
          _dark: {
            backgroundColor: "rgb(6 95 70)",
            color: "rgb(167 243 208)",
          },
        })}
      >
        Subscription confirmed.
      </p>
    );
  }
  return (
    <div
      className={css({
        borderRadius: "1rem",
        border: "1px solid rgb(229 229 229)",
        maxWidth: "36rem",
        padding: "1rem",
        backgroundImage: "linear-gradient(to bottom right, rgb(245 245 245), white)",
        _dark: {
          borderColor: "rgb(64 64 64)",
          backgroundImage: "linear-gradient(to bottom right, rgb(23 23 23), rgb(38 38 38))",
        },
      })}
    >
      <div className={css({ display: "flex", flexDirection: "column", gap: "0.5rem" })}>
        <h3
          className={css({
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "rgb(23 23 23)",
            _dark: { color: "rgb(250 250 250)" },
          })}
        >
          Thinking about starting a newsletter
        </h3>

        <p
          className={css({
            maxWidth: "24rem",
            fontSize: "0.875rem",
            color: "rgb(82 82 82)",
            _dark: { color: "rgb(163 163 163)" },
          })}
        >
          If you like content like this, leave your email. I will send one
          update when it is ready.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={css({
          marginTop: "1rem",
          display: "flex",
          gap: "0.5rem",
          borderRadius: "xl",
          border: "1px solid var(--border)",
          backgroundColor: "white",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          _dark: {
            backgroundColor: "rgb(38 38 38)",
            borderColor: "rgb(64 64 64)",
          },
        })}
      >
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css({
            height: "2.25rem",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "0.875rem",
            boxShadow: "none",
          })}
          required
        />

        <Button
          type="submit"
          disabled={formState === "SUBMITTING"}
          className={css({
            height: "2.25rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontSize: "0.875rem",
          })}
        >
          {formState === "SUBMITTING" ? "…" : "Notify me"}
        </Button>
      </form>

      <p
        className={css({
          marginTop: "0.5rem",
          fontSize: "0.75rem",
          color: errorMessage.length ? "rgb(239 68 68)" : "rgb(115 115 115)",
          _dark: { color: errorMessage.length ? "rgb(239 68 68)" : "rgb(115 115 115)" },
        })}
      >
        {errorMessage.length
          ? errorMessage
          : " No spam. One email when things are live."}
      </p>
    </div>
  );
}
