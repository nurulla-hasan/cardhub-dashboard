import { ArrowUpRight, Bell, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export const Stat = ({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub?: string;
}) => (
  <Card className="bg-card/70 border-border/60">
    <CardContent className="p-4 grid gap-2">
      <div className="flex items-center gap-2">
        <div
          className={`font-semibold ${
            title === "My collection" ? "text-4xl font-semibold" : "text-xl"
          }`}
        >
          {value}
        </div>
        {title !== "My collection" && (
          <TrendingUp className="size-6 text-green-500" />
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold">{sub}</div>
        {title !== "My collection" && (
          <TrendingDown className="size-4 text-red-500" />
        )}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{title}</div>
    </CardContent>
  </Card>
);

export const Action = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <Card className="bg-card/70 border-border/60">
    <CardContent className="p-6">
      <div className="flex flex-col items-center gap-3">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="size-6" />
        </span>
        <div className="text-sm font-medium text-center">{label}</div>
      </div>
    </CardContent>
  </Card>
);

export const SmallKpi = ({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) => (
  <div className="rounded-md border border-border/60 bg-card/60 p-4">
    <div className="text-[11px] text-muted-foreground">{title}</div>
    <div className="mt-1 text-[15px] font-semibold text-foreground">
      {value}
    </div>
    <div className="text-[11px] text-muted-foreground mt-1">{sub}</div>
  </div>
);

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

export const ChartPlaceholder = () => (
  <div className="h-64 rounded-md border border-border/60 bg-background/50 p-3">
    <ChartContainer config={dashboardChartConfig} className="h-full w-full rounded-md border border-border/60 bg-black/5 p-4 dark:bg-white/5">
      <LineChart accessibilityLayer data={dashboardChartData}>
        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="hsl(var(--border) / 0.4)" />
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
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Line type="monotone" dataKey="trend" stroke="#38bdf8" strokeWidth={3} dot={false} activeDot={{ r: 5, fill: "#38bdf8", stroke: "transparent" }} />
        <Line type="monotone" dataKey="highest" stroke="#34d399" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: "#34d399", stroke: "transparent" }} />
        <Line type="monotone" dataKey="lowest" stroke="#fb7185" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: "#fb7185", stroke: "transparent" }} />
      </LineChart>
    </ChartContainer>
  </div>
);

export const NotificationsPanel = () => (
  <Card className="bg-card/70 border-border/60 h-full">
    <CardContent className="p-4 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">Notifications</div>
        <Link to="/notifications">
          <Badge variant="secondary" className="rounded-full">
            All <ArrowUpRight className="size-3.5" />
          </Badge>
        </Link>
      </div>
      <div className="mt-4 space-y-4 overflow-auto pr-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md border border-border/60 p-3 bg-background/50"
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                <Bell className="size-4" />
              </span>
              <span>Notification</span>
              <span className="ml-auto text-[11px] text-muted-foreground">
                10:20 am
              </span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Volutpat risus nunc.
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
