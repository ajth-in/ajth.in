import { buttonVariants } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { cx } from "class-variance-authority"
import { LogIn } from "lucide-react"
export default function SignInModal(){
    return (<Dialog >
        <DialogTrigger className={cx(buttonVariants({variant:"link"}),"gap-2 cursor-pointer")}><LogIn/>Sign in</DialogTrigger>
        <DialogContent className="bg-black">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>)
}