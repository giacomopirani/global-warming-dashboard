import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const charts = [
  {
    title: "Temperature",
    description: "Global temperature data",
    href: "/temperature",
  },
  {
    title: "CO2",
    description: "Atmospheric carbon dioxide levels",
    href: "/co2",
  },
  {
    title: "Methane",
    description: "Atmospheric methane concentrations",
    href: "/methane",
  },
  {
    title: "NO2",
    description: "Atmospheric nitrogen dioxide levels",
    href: "/no2",
  },
  {
    title: "Polar Ice",
    description: "Arctic ice extent",
    href: "/arctic-ice",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 overflow-x-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl bg-white animate-pulse delay-100 bg-clip-text text-transparent pb-2">
          Dashboard
        </h1>
        <div className="flex justify-center items-center space-x-2 mt-5 mb-10">
          <span className="w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-200"></span>
          <span className="w-6 h-6 bg-white rounded-full animate-pulse delay-100"></span>
          <span className="w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-200"></span>
          <span className="w-6 h-6 bg-white rounded-full animate-pulse delay-100"></span>
          <span className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></span>
          <span className="w-6 h-6 bg-yellow-500 rounded-full animate-pulse delay-100"></span>
          <span className="w-6 h-6 bg-red-500 rounded-full animate-pulse delay-200"></span>
          <span className="w-6 h-6 bg-yellow-500 rounded-full animate-pulse delay-100"></span>
        </div>
        <div className="relative mb-8 aspect-square w-full max-w-[500px]">
          <Image
            src="/global-warming.jpg"
            alt="Global Warming Illustration"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full object-contain"
          />
        </div>

        <p className="mb-12 max-w-2xl text-center text-muted-foreground">
          Welcome to our global warming dashboard. <br /> Here, you can explore
          critical data on various aspects of climate change, including global
          temperatures, atmospheric CO2 and methane levels, NO2 concentrations,
          and polar ice extent. <br /> Use the buttons below to access detailed
          charts on each topic.
        </p>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {charts.map((chart) => (
            <Card key={chart.href}>
              <CardHeader>
                <CardTitle>{chart.title}</CardTitle>
                <CardDescription>{chart.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={chart.href}>
                  <Button className="w-full">View Chart</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
