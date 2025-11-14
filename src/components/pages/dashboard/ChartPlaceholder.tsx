import { type ChartConfig } from "@/components/ui/chart";
import CustomChart from "@/components/common/CustomChart";

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
      <CustomChart config={dashboardChartConfig} data={dashboardChartData} />
    </div>  
  );
};

export default ChartPlaceholder;
