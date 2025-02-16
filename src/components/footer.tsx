import Link from "next/link";
import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-border/50 border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Wrench className="h-6 w-6" />
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground font-medium underline underline-offset-4"
            >
              MyDevTools
            </Link>
            .{" "}
            <span className="hidden sm:inline">
              The source code is available on{" "}
              <Link
                href="https://github.com/shashivadan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground font-medium underline underline-offset-4"
              >
                GitHub
              </Link>
              .
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
