"use client";

import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "@/components/dashboard/DatePickerWithRange";

const initialChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export function MyChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [chartData, setChartData] = useState(initialChartData);

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
    // Atualize os dados com base na seleção de data
    // Por exemplo, você pode filtrar os dados aqui
  };

  return (
    <div className="min-h-[200px] w-full">
      <DatePickerWithRange onDateChange={handleDateChange} />
      <BarChart data={chartData} width={600} height={300}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} tickMargin={10} />
        <Tooltip />
        <Bar dataKey="desktop" fill="#8884d8" radius={4} />
        <Bar dataKey="mobile" fill="#82ca9d" radius={4} />
      </BarChart>
    </div>
  );
}
