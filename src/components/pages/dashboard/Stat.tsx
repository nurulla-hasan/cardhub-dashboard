import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <CardContent className="grid gap-2">
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