import { ChartWrapper } from "@/components/ChartWrapper";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

async function getMethaneData() {
  const res = await fetch(`${process.env.API_BASE_URL}/methane-api`);
  if (!res.ok) {
    throw new Error("Failed to fetch methane data");
  }
  return res.json();
}

async function MethaneChart() {
  try {
    const data = await getMethaneData();
    const chartData = data.methane.map((item: any) => ({
      date: item.date,
      ppb: parseFloat(item.average),
    }));

    return (
      <ChartWrapper
        title="Concentrazione di Metano nell'atmosfera"
        description="Parti per miliardo (ppb) di metano nell'atmosfera nel tempo"
        data={chartData}
        dataKey="ppb"
        xAxisDataKey="date"
      />
    );
  } catch (error) {
    return (
      <ErrorMessage message="Errore nel caricamento dei dati sul metano" />
    );
  }
}

export default function MethanePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Livelli di Metano</h1>
      <Suspense fallback={<Loading />}>
        <MethaneChart />
      </Suspense>
    </div>
  );
}
