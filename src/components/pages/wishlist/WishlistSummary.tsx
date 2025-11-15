import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Activity } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Total Wishlist",
    value: 3,
    icon: Heart,
    iconBg: "bg-fuchsia-600/20",
    iconColor: "text-fuchsia-400",
    border: "border-fuchsia-500/40",
  },
  {
    id: 2,
    label: "Available Nearby",
    value: 1,
    icon: MapPin,
    iconBg: "bg-sky-600/15",
    iconColor: "text-sky-400",
    border: "border-sky-500/40",
  },
  {
    id: 3,
    label: "Price Updates",
    value: 1,
    icon: Activity,
    iconBg: "bg-emerald-600/15",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/40",
  },
];

const WishlistSummary = () => {
  return (
    <div className="space-y-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.id}
            className={`border ${stat.border} shadow-none`}
          >
            <CardContent className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.iconBg}`}
              >
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold leading-tight text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default WishlistSummary;
