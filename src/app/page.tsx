import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  MapPin,
  Shield,
  Bell,
  Phone,
  Users,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="border-border/50 relative flex flex-col items-center justify-center space-y-4 border-b px-4 py-12 text-center md:py-24 lg:py-32">
        <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_0%,rgba(51, 51, 51)_80%)] absolute inset-0 -z-10 dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0)_100%)]"></div>
        <div className="space-y-4">
          <div className="border-border/50 bg-background inline-block rounded-full border px-3 py-1 text-xs sm:text-sm">
            Women Safety Application
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Empowering Safety Through Technology
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-sm sm:text-base md:text-lg">
            A real-time women safety application utilizing WebSocket for instant
            alerts and Google Maps API for location tracking
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild className="h-10 px-6 sm:h-11 sm:px-8">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-10 px-6 sm:h-11 sm:px-8"
          >
            Emergency Contact
          </Button>
        </div>
      </section>

      <section
        id="features"
        className="container mx-auto space-y-6 py-12 md:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Key Features
          </h2>
          <p className="text-muted-foreground max-w-[85%] text-sm sm:text-base">
            Advanced features designed for your safety and peace of mind
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Real-time Location",
              description:
                "Live location tracking with Google Maps integration",
            },
            {
              icon: Shield,
              title: "SOS Alert",
              description: "Instant emergency alerts to trusted contacts",
            },
            {
              icon: Bell,
              title: "Alert System",
              description: "Real-time notifications via WebSocket",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-background hover:border-foreground/20 group relative overflow-hidden border p-6 transition-all"
            >
              <div className="flex flex-col items-center space-y-4">
                <feature.icon className="h-12 w-12" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-border/50 border-t">
        <div className="container space-y-6 py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-[85%] text-sm sm:text-base">
              Simple steps to ensure your safety
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Add Contacts",
                description: "Add trusted emergency contacts to your network",
              },
              {
                icon: Phone,
                title: "One-Click SOS",
                description: "Trigger emergency alert with a single tap",
              },
              {
                icon: MessageSquare,
                title: "Instant Communication",
                description: "Real-time messaging with emergency contacts",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 bg-background hover:border-foreground/20 group relative overflow-hidden border p-6 transition-all"
              >
                <div className="flex flex-col items-center space-y-4">
                  <feature.icon className="h-12 w-12" />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-border/50 border-t">
        <div className="container space-y-6 py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Technology Stack
            </h2>
            <p className="text-muted-foreground max-w-[85%] text-sm sm:text-base">
              Built with cutting-edge technologies
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
            {[
              {
                title: "Real-time Communication",
                description:
                  "WebSocket integration ensures instant alert delivery and real-time location updates.",
              },
              {
                title: "Location Services",
                description:
                  "Google Maps API provides accurate location tracking and navigation assistance.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 bg-background hover:border-foreground/20 group relative overflow-hidden border p-6 transition-all"
              >
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-border/50 border-t">
        <div className="container space-y-6 py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Stay Safe, Stay Connected
            </h2>
            <p className="text-muted-foreground max-w-[85%] text-sm sm:text-base">
              Join our community of users prioritizing safety and peace of mind
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
