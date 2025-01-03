import { ChartWrapper } from "@/components/ChartWrapper";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

async function getNO2Data() {
  const res = await fetch(`${process.env.API_BASE_URL}/nitrous-oxide-api`);
  if (!res.ok) {
    throw new Error("Failed to fetch NO2 data");
  }
  return res.json();
}

async function NO2Chart() {
  try {
    const data = await getNO2Data();
    const chartData = data.nitrous.map((item: any) => ({
      date: item.date,
      ppb: parseFloat(item.average),
    }));

    return (
      <ChartWrapper
        title="Concentrazione di Ossido di Azoto nell'atmosfera"
        description="Parti per miliardo (ppb) di NO2 nell'atmosfera nel tempo"
        data={chartData}
        dataKey="ppb"
        xAxisDataKey="date"
      />
    );
  } catch (error) {
    return <ErrorMessage message="Errore nel caricamento dei dati sull'NO2" />;
  }
}

export default function NO2Page() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Livelli di NO2</h1>
      <Suspense fallback={<Loading />}>
        <NO2Chart />
      </Suspense>
    </div>
  );
}
