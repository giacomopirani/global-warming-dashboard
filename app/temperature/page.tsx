import { ChartWrapper } from "@/components/ChartWrapper";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

async function getTemperatureData() {
  const res = await fetch(`${process.env.API_BASE_URL}/temperature-api`);
  if (!res.ok) {
    throw new Error("Failed to fetch temperature data");
  }
  return res.json();
}

async function TemperatureChart() {
  try {
    const data = await getTemperatureData();
    const chartData = data.result.map((item: any) => ({
      year: item.time,
      temperature: parseFloat(item.station),
    }));

    return (
      <ChartWrapper
        title="Andamento della Temperatura Globale"
        description="Variazione della temperatura media globale nel tempo"
        data={chartData}
        dataKey="temperature"
        xAxisDataKey="year"
      />
    );
  } catch (error) {
    return (
      <ErrorMessage message="Errore nel caricamento dei dati sulla temperatura" />
    );
  }
}

export default function TemperaturePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Temperatura Globale</h1>
      <Suspense fallback={<Loading />}>
        <TemperatureChart />
      </Suspense>
    </div>
  );
}
