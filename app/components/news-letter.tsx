"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter } from "app/actions/subscribe";

type FormState = "INIT" | "SUBMITTING" | "ERROR" | "SUCCESS";

export default function CompactSignUpForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("INIT");
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setErrorMessage("");
    setFormState("INIT");
  };

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

  return (
    <div className="w-full max-w-md">
      {formState === "SUCCESS" ? (
        <p
          className="rounded-md p-2 text-sm
          bg-emerald-100 text-emerald-800
          dark:bg-emerald-800 dark:text-emerald-200"
        >
          Subscription confirmed.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 rounded-xl border px-2 py-2
            bg-white border-neutral-300
            dark:bg-neutral-800 dark:border-neutral-700"
        >
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-9 border-none bg-transparent text-sm shadow-none
              text-neutral-900 placeholder:text-neutral-500
              dark:text-neutral-50 dark:placeholder:text-neutral-400
              focus-visible:ring-0"
            required
          />

          <Button
            type="submit"
            disabled={formState === "SUBMITTING"}
            className="h-9 px-4 text-sm"
          >
            {formState === "SUBMITTING" ? "…" : "Join My Newsletter (WIP)"}
          </Button>
        </form>
      )}

      {formState === "ERROR" && (
        <div
          className="mt-2 flex items-center justify-between text-xs
          text-red-600 dark:text-red-400"
        >
          <span>{errorMessage}</span>
          <button
            type="button"
            onClick={resetForm}
            className="underline
              text-neutral-600 hover:text-neutral-900
              dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}
