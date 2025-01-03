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
    title: "Temperatura",
    description: "Dati sulle temperature globali",
    href: "/temperature",
  },
  {
    title: "CO2",
    description: "Livelli di anidride carbonica nell'atmosfera",
    href: "/co2",
  },
  {
    title: "Metano",
    description: "Concentrazioni di metano nell'atmosfera",
    href: "/methane",
  },
  {
    title: "NO2",
    description: "Livelli di ossido di azoto nell'atmosfera",
    href: "/no2",
  },
  {
    title: "Ghiaccio Polare",
    description: "Estensione del ghiaccio artico",
    href: "/arctic-ice",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 overflow-x-hidden">
      <div className="flex flex-col items-center">
        <h1 className="mb-8 text-4xl font-bold text-center">Dashboard</h1>

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
          Welcome to our global warming dashboard. Here, you can explore
          critical data on various aspects of climate change, including global
          temperatures, atmospheric CO2 and methane levels, NO2 concentrations,
          and polar ice extent. Use the buttons below to access detailed charts
          on each topic.
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
                  <Button className="w-full">Visualizza Grafico</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
