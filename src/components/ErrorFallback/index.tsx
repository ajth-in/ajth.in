"use client"

import { AlertTriangle, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

interface ErrorFallbackProps {
  error?: Error
  resetErrorBoundary?: () => void
  title?: string
  description?: string
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
  title = "Something went wrong",
  description = "We're sorry, but something unexpected happened.",
}: ErrorFallbackProps) {
  return (
    <div className=" flex items-center justify-center p-4 py-12  dark">
      <Card className="w-full max-w-md border-neutral-800 bg-transparent">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-900/20">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <CardTitle className="text-xl font-semibold dark:text-red-500 text-red-900">{title}</CardTitle>
          <CardDescription className="">{description}</CardDescription>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="mt-2 rounded-md bg-neutral-800 p-4">
              <p className="font-mono text-sm break-all ">{error.message}</p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          {resetErrorBoundary && (
            <Button onClick={resetErrorBoundary} className="bg-red-600 hover:bg-red-700 " size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
