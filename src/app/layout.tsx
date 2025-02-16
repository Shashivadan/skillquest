import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { NavBar } from "~/components/nav-bar";
import { Footer } from "~/components/footer";
import { Toaster } from "~/components/ui/toaster";
export const metadata: Metadata = {
  title: "Websocket & Google API Assignment",
  description:
    "Assignment application demonstrating usage of WebSockets and Google API with Next.js and t3-stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="mx-auto max-w-screen-2xl px-4">{children}</div>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
