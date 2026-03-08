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
          textStyle: "body.sm",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          backgroundColor: { base: "accent.emerald.light", _dark: "accent.emerald.dark.bg" },
          color: { base: "accent.emerald", _dark: "accent.emerald.dark.text" },
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
        border: "1px solid",
        borderColor: { base: "neutral.200", _dark: "neutral.700" },
        maxWidth: "36rem",
        padding: "1rem",
        backgroundImage: {
          base: "linear-gradient(to bottom right, {colors.neutral.100}, white)",
          _dark: "linear-gradient(to bottom right, {colors.neutral.900}, {colors.neutral.800})",
        },
      })}
    >
      <div className={css({ display: "flex", flexDirection: "column", gap: "0.5rem" })}>
        <h3
          className={css({
            textStyle: "heading.card",
            color: { base: "neutral.900", _dark: "neutral.50" },
          })}
        >
          Thinking about starting a newsletter
        </h3>

        <p
          className={css({
            maxWidth: "24rem",
            textStyle: "body.sm",
            color: "fg.muted",
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
          backgroundColor: "surface.page",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
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
            textStyle: "body.sm",
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
            textStyle: "body.sm",
          })}
        >
          {formState === "SUBMITTING" ? "…" : "Notify me"}
        </Button>
      </form>

      <p
        className={css({
          marginTop: "0.5rem",
          textStyle: "body.xs",
          color: errorMessage.length ? "accent.red" : "fg.subtle",
        })}
      >
        {errorMessage.length
          ? errorMessage
          : " No spam. One email when things are live."}
      </p>
    </div>
  );
}
