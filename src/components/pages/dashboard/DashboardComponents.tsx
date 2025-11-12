import { ArrowUpRight, Bell, LineChart, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

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
        <div className="text-3xl font-semibold">{value}</div>
        <TrendingUp className="size-6 text-green-500" />
      </div>
      <div className="flex items-center gap-2">
         <div className="text-sm font-semibold">{sub}</div>
        <TrendingDown className="size-4 text-red-500" />
      </div>
      <div className="text-xs text-muted-foreground mt-1">{title}</div>
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

export const ChartPlaceholder = () => (
  <div className="h-64 rounded-md border border-border/60 bg-linear-gradient-to-b from-primary/5 via-transparent to-transparent relative overflow-hidden flex items-center justify-center">
    <LineChart className="size-16 text-muted-foreground/50" />
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
