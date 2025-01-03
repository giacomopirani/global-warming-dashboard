import { ChartWrapper } from "@/components/ChartWrapper";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

async function getCO2Data() {
  const res = await fetch(`${process.env.API_BASE_URL}/co2-api`);
  if (!res.ok) {
    throw new Error("Failed to fetch CO2 data");
  }
  return res.json();
}

async function CO2Chart() {
  try {
    const data = await getCO2Data();
    const chartData = data.co2.map((item: any) => ({
      date: new Date(item.year, item.month - 1, item.day)
        .toISOString()
        .split("T")[0],
      ppm: parseFloat(item.trend),
    }));

    return (
      <ChartWrapper
        title="Concentrazione di CO2 nell'atmosfera"
        description="Parti per milione (ppm) di CO2 nell'atmosfera nel tempo"
        data={chartData}
        dataKey="ppm"
        xAxisDataKey="date"
      />
    );
  } catch (error) {
    return <ErrorMessage message="Errore nel caricamento dei dati sulla CO2" />;
  }
}

export default function CO2Page() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Livelli di CO2</h1>
      <Suspense fallback={<Loading />}>
        <CO2Chart />
      </Suspense>
    </div>
  );
}
