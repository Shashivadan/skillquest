"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Wrench, Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "~/components/theme-toggle";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-border/50 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Wrench className="h-6 w-6" />
          <span className="font-bold">MyDevTools</span>
        </Link>
        <div className="ml-3 flex flex-1 items-center justify-end space-x-4 sm:justify-between">
          <nav className="hidden items-center space-x-6 text-sm sm:flex">
            <Link
              href="#features"
              className="hover:text-foreground/80 transition"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="hover:text-foreground/80 transition"
            >
              Community
            </Link>
            <Link href="#docs" className="hover:text-foreground/80 transition">
              Docs
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="https://github.com/mydevtools/repo"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-foreground/20 hidden sm:flex"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Button asChild className="hidden px-4 sm:flex">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="bg-background border-border/50 flex flex-col space-y-4 border-t p-4">
            <Link
              href="#features"
              className="hover:text-foreground/80 transition"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="hover:text-foreground/80 transition"
            >
              Community
            </Link>
            <Link href="#docs" className="hover:text-foreground/80 transition">
              Docs
            </Link>
            <Link href="/login" className="hover:text-foreground/80 transition">
              Get Started
            </Link>
            <Link
              href="https://github.com/mydevtools/repo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/80 transition"
            >
              GitHub
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
