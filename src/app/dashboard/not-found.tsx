"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Card } from "~/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center p-4">
      <Card className="mx-auto max-w-md space-y-6 p-6 text-center">
        <div className="space-y-2">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 animate-pulse" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            404 - Not Found
          </h1>
          <p className="text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>You might want to:</p>
          <ul className="list-disc pl-6 text-left">
            <li>Double check the URL for typos</li>
            <li>Go back to the dashboard home</li>
            <li>Return to the main website</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/dashboard" className="flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
