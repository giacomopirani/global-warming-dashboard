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
    <div className="container py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Dashboard</h1>

      <div className="mb-8">
        <Image
          src="/global-warming.jpg"
          alt="Global Warming Illustration"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>

      <p className="text-center max-w-2xl mb-8">
        Welcome to our global warming dashboard. Here, you can explore critical
        data on various aspects of climate change, including global
        temperatures, atmospheric CO2 and methane levels, NO2 concentrations,
        and polar ice extent. Use the buttons below to access detailed charts on
        each topic.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
