import { Card, CardContent } from "@/components/ui/card";
import { type ChartConfig } from "@/components/ui/chart";
import CustomChart from "@/components/common/CustomChart";

const chartData = [
  { label: "12 Oct", trend: 380, highest: 250, lowest: 660 },
  { label: "18 Oct", trend: 392, highest: 252, lowest: 365 },
  { label: "24 Oct", trend: 305, highest: 255, lowest: 372 },
  { label: "30 Oct", trend: 410, highest: 257, lowest: 375 },
  { label: "02 Nov", trend: 212, highest: 258, lowest: 380 },
];

const chartConfig: ChartConfig = {
  trend: {
    label: "Trend",
    color: "hsl(var(--primary))",
  },
  highest: {
    label: "Highest",
    color: "hsl(var(--chart-2))",
  },
  lowest: {
    label: "Lowest",
    color: "hsl(var(--destructive))",
  },
};

const PortfolioSummary = () => {
  return (
    <Card className="gradient-color">
      <CardContent className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Portfolio Summary</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Total Value</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">
                2,165,5 €
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Total Cards</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">36</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="rounded-xl bg-blue-500/10 px-4 py-3">
            <p className="text-muted-foreground">Trend</p>
            <p className="mt-1 text-lg font-semibold text-primary">412,00 €</p>
          </div>
          <div className="rounded-xl bg-emerald-500/20 px-4 py-3">
            <p className="text-muted-foreground">Highest</p>
            <p className="mt-1 text-lg font-semibold text-green-600">
              450,00 €
            </p>
          </div>
          <div className="rounded-xl bg-rose-500/10 px-4 py-3">
            <p className="text-muted-foreground">Lowest</p>
            <p className="mt-1 text-lg font-semibold text-red-500">380,00 €</p>
          </div>
        </div>
        
        {/* Chart */}
        <div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Price History (30 Days)</span>
            <span>€</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1 w-8 rounded-full bg-primary" />
              Trend
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1 w-8 rounded-full bg-emerald-400" />
              Highest
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-1 w-8 rounded-full bg-rose-400" />
              Lowest
            </div>
          </div>
          <CustomChart config={chartConfig} data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
