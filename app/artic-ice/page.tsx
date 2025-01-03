import { ChartWrapper } from "@/components/ChartWrapper";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

async function getArcticIceData() {
  const res = await fetch(`${process.env.API_BASE_URL}/arctic-api`);
  if (!res.ok) {
    throw new Error("Failed to fetch Arctic ice data");
  }
  return res.json();
}

async function ArcticIceChart() {
  try {
    const data = await getArcticIceData();

    if (!data.arcticData || !Array.isArray(data.arcticData)) {
      throw new Error("Invalid data structure received from API");
    }

    const chartData = data.arcticData.map((item: any) => ({
      year: parseInt(item.year),
      extent: parseFloat(item.extent),
    }));

    return (
      <ChartWrapper
        title="Estensione del Ghiaccio Artico nel tempo"
        description="Estensione del ghiaccio artico in milioni di km²"
        data={chartData}
        dataKey="extent"
        xAxisDataKey="year"
      />
    );
  } catch (error) {
    return (
      <ErrorMessage message="Errore nel caricamento dei dati sul ghiaccio artico" />
    );
  }
}

export default function ArcticIcePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        Estensione del Ghiaccio Artico
      </h1>
      <Suspense fallback={<Loading />}>
        <ArcticIceChart />
      </Suspense>
    </div>
  );
}
