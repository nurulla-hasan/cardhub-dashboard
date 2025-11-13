import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const dashboardChartData = [
  { label: "12 Oct", trend: 480, highest: 250, lowest: 360 },
  { label: "18 Oct", trend: 192, highest: 252, lowest: 165 },
  { label: "24 Oct", trend: 205, highest: 555, lowest: 172 },
  { label: "30 Oct", trend: 210, highest: 257, lowest: 175 },
  { label: "02 Nov", trend: 212, highest: 258, lowest: 180 },
];

const dashboardChartConfig: ChartConfig = {
  trend: { label: "Trend", color: "#38bdf8" },
  highest: { label: "Highest", color: "#34d399" },
  lowest: { label: "Lowest", color: "#fb7185" },
};

const ChartPlaceholder = () => {
  return (
    <div className="h-64 rounded-md border border-border/60 bg-background/50 p-3">
      <ChartContainer
        config={dashboardChartConfig}
        className="h-full w-full rounded-md border border-border/60 bg-black/5 p-4 dark:bg-white/5"
      >
        <LineChart accessibilityLayer data={dashboardChartData}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="hsl(var(--border) / 0.4)"
          />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            stroke="hsl(var(--border) / 0.6)"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}€`}
            stroke="hsl(var(--border) / 0.6)"
            tick={{ fontSize: 11 }}
            width={36}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            type="monotone"
            dataKey="trend"
            stroke="#38bdf8"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5, fill: "#38bdf8", stroke: "transparent" }}
          />
          <Line
            type="monotone"
            dataKey="highest"
            stroke="#34d399"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#34d399", stroke: "transparent" }}
          />
          <Line
            type="monotone"
            dataKey="lowest"
            stroke="#fb7185"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#fb7185", stroke: "transparent" }}
          />
        </LineChart>
      </ChartContainer>
    </div>  
  );
};

export default ChartPlaceholder;
