import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  CheckCircle2,
  Star,
  Clock,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Layers,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const MarketplaceSPProfile = () => {
  const stats = [
    {
      label: "Rating",
      value: "4.9",
      subLabel: "",
      icon: Star,
      highlight: "text-fuchsia-300",
      valueClass: "text-sm font-semibold text-fuchsia-300",
      iconClass: "text-fuchsia-300",
    },
    {
      label: "Total Sales",
      value: "1,543 €",
      icon: ShoppingBag,
    },
    {
      label: "Total Value cards",
      value: "12,450 €",
      icon: CreditCard,
    },
    {
      label: "Active Listings",
      value: "127 cards",
      icon: Layers,
    },
    {
      label: "Response Time",
      value: "< 1 hour",
      icon: Clock,
    },
    {
      label: "Member Since",
      value: "Jan 2023",
      icon: Calendar,
    },
  ];

  return (
    <Card className="text-foreground">
      <CardContent className="space-y-6">
        {/* Avatar + name + location */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <Avatar className="h-24 w-24 border-2 border-white/70">
              <AvatarImage src="/images/profile.png" alt="Seller avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-[#1d1030]" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <p className="text-lg font-semibold">Username</p>
              <CheckCircle2 className="h-4 w-4 text-sky-400" />
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>Cologne 455km away</span>
            </div>
          </div>
        </div>

        {/* Primary actions */}
        <div className="space-y-3">
          <Button className="w-full gradient-button font-semibold">
           <MessageCircle/> Message Seller
          </Button>
          <Button
            variant="outline"
            className="w-full border-white/30 bg-transparent font-semibold"
          >
           <MapPin/> View on Map
          </Button>
        </div>

        <Separator className="bg-white/10" />

        {/* Stats */}
        <div className="space-y-3 text-xs">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center justify-between gap-3 text-muted-foreground"
              >
                <div className="inline-flex items-center gap-2">
                  <Icon className={`h-3.5 w-3.5 ${stat.iconClass ?? ""}`} />
                  <span>{stat.label}</span>
                </div>
                <span className={stat.valueClass ?? "text-sm font-medium text-foreground"}>
                  {stat.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* Verified seller badge */}
        <div className="rounded-2xl bg-primary/10 p-4 text-xs">
          <div className="mb-2 inline-flex items-center gap-2 text-sky-300">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-semibold">Verified Seller</span>
          </div>
          <p className="text-[11px] text-muted-foreground">
            Identity and payment methods verified by CardHub
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketplaceSPProfile;
