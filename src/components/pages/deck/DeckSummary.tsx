import { Card, CardContent } from "@/components/ui/card";
import { Layers, MapPin, Box } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Cards Needed",
    value: 4,
    icon: Layers,
    iconBg: "bg-fuchsia-600/20",
    iconColor: "text-fuchsia-400",
    border: "border-fuchsia-500/40",
  },
  {
    id: 2,
    label: "Available Nearby",
    value: 3,
    icon: MapPin,
    iconBg: "bg-sky-600/15",
    iconColor: "text-sky-400",
    border: "border-sky-500/40",
  },
  {
    id: 3,
    label: "Active Decks",
    value: 3,
    icon: Box,
    iconBg: "bg-emerald-600/15",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/40",
  },
];

const DeckSummary = () => {
  return (
    <div className="space-y-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.id}
            className={`border ${stat.border} shadow-none bg-white/10`}
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

export default DeckSummary;
