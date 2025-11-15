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

const priceChartConfig: ChartConfig = {
  trend: { label: "Trend", color: "#38bdf8" },
  highest: { label: "Highest", color: "#34d399" },
  lowest: { label: "Lowest", color: "#fb7185" },
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
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Price History (30 Days)</span>
            <span>€</span>
          </div>
          <CustomChart config={priceChartConfig} data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
