import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Repeat2, Star } from "lucide-react";

const activities = [
  {
    title: "Purchased Charizard VMAX",
    time: "2 hours ago",
    amount: "245,00 €",
    type: "negative" as const,
    icon: ShoppingBag,
  },
  {
    title: "Sold Umbreon VMAX",
    time: "1 day ago",
    amount: "485,00 €",
    type: "positive" as const,
    icon: ShoppingBag,
  },
  {
    title: "Completed trade with @PokeMaster",
    time: "3 days ago",
    amount: "",
    type: "neutral" as const,
    icon: Repeat2,
  },
  {
    title: "Earned \"Speed Trader\" badge",
    time: "5 days ago",
    amount: "",
    type: "neutral" as const,
    icon: Star,
  },
];

const ProfileRecentActivity = () => {
  return (
    <Card>
      <CardContent className="space-y-4">
        <p className="text-sm font-medium">Recent Activity</p>
        <div className="text-sm space-y-6">
          {activities.map((item, index) => {
            const Icon = item.icon;

            const amountClass =
              item.type === "positive"
                ? "text-emerald-400"
                : item.type === "negative"
                ? "text-red-400"
                : "text-muted-foreground";

            const iconBgClass = [
              "bg-sky-500/80",
              "bg-emerald-500/80",
              "bg-purple-500/80",
              "bg-amber-500/80",
            ][index] || "bg-primary/70";

            return (
              <div
                key={item.title}
                className={`flex items-center justify-between py-3 ${
                  index !== activities.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBgClass}`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium leading-tight">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>

                {item.amount && (
                  <span className={`text-xs font-semibold ${amountClass}`}>
                    {item.type === "positive" ? "↗" : "↘"} {item.amount}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileRecentActivity;
