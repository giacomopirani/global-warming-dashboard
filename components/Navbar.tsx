"use client";

import { Menu, Thermometer } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/temperature", label: "Temperature" },
    { href: "/co2", label: "CO2" },
    { href: "/methane", label: "Methane" },
    { href: "/no2", label: "NO2" },
    { href: "/arctic-ice", label: "Polar Ice" },
  ];

  return (
    <nav className="flex items-center justify-between w-full h-16">
      <Link
        href="/"
        className="flex items-center space-x-2 text-xl font-bold text-primary"
      >
        <Thermometer className="h-6 w-6 text-red-500" />
        <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          Global Warming
        </span>
      </Link>
      <div className="hidden lg:flex items-center gap-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary px-3 py-2",
              pathname === route.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[240px] sm:w-[300px]">
          <div className="flex flex-col space-y-4 mt-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary px-3 py-2",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
