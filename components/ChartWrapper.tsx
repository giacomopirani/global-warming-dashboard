"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { Loading } from "@/components/Loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartWrapperProps {
  title: string;
  description: string;
  data: any[] | null;
  dataKey: string;
  xAxisDataKey: string;
  isLoading?: boolean;
  error?: string | null;
}

export function ChartWrapper({
  title,
  description,
  data,
  dataKey,
  xAxisDataKey,
  isLoading = false,
  error = null,
}: ChartWrapperProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xAxisDataKey} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            Nessun dato disponibile
          </div>
        )}
      </CardContent>
    </Card>
  );
}
