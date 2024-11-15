import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { cx } from "class-variance-authority";
import { LogIn } from "lucide-react";
import { Fragment } from "react";
export default function SignInModal() {
  return (
    <Fragment>
      <SignedOut>
        <SignInButton>
          <div
            className={cx(
              buttonVariants({ variant: "link" }),
              "gap-2 cursor-pointer",
            )}
          >
            <LogIn />
            Sign in
          </div>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </Fragment>
  );
}
