import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const ProfilePortfolioSummary = () => {
  return (
    <Card className="bg-card border-border">
      <CardContent className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold">Portfolio Summary</p>
            <p className="text-xs text-muted-foreground mt-1">
              Your collection's total value
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <TrendingUp className="w-3 h-3" />
            <span>+18.4% (30d)</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-primary/10 px-5 py-4 space-y-1">
            <p className="text-xs text-muted-foreground">Total Value</p>
            <p className="text-xl font-semibold text-sky-400">12.450 €</p>
          </div>
          <div className="rounded-2xl bg-primary/10 px-5 py-4 space-y-1">
            <p className="text-xs text-muted-foreground">Member Since</p>
            <p className="text-sm font-semibold text-sky-400">
              January 2023
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfilePortfolioSummary;
