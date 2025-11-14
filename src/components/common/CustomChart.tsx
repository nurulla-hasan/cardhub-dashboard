import { ChartContainer, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

type CustomChartProps = {
  config: ChartConfig;
  data: { label: string; [key: string]: number | string }[];
};

const CustomChart = ({ config, data }: CustomChartProps) => {
  return (
    <ChartContainer
      config={config}
      className="h-full w-full rounded-md border border-border/60 bg-black/5 p-4 dark:bg-white/5"
    >
      <LineChart accessibilityLayer data={data}>
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
        {Object.keys(config).map((key) => {
          const configItem = config[key];
          if (!configItem?.color) return null;
          return (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={configItem.color}
              strokeWidth={key === 'trend' ? 3 : 2}
              dot={false}
              activeDot={{ r: key === 'trend' ? 5 : 4, fill: configItem.color, stroke: "transparent" }}
            />
          );
        })}
      </LineChart>
    </ChartContainer>
  );
};

export default CustomChart;