import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VariationsModal from "./VariationsModal";

interface MarketplaceCardProps {
  item: {
    id: number;
    name: string;
    variants: number;
    averagePrice: number;
  };
}

const MarketplaceCard = ({ item }: MarketplaceCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/40 bg-background/40">
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          {/* Image placeholder */}
          <img
            src={"/images/card.png"}
            alt={item.name}
            className="h-36 w-24 shrink-0 overflow-hidden rounded-lg"
          />

          {/* Title + variants */}
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-foreground leading-tight">
                {item.name}
              </p>
              <Badge className="rounded-full bg-purple-600/80 px-2.5 py-1 text-[11px] font-medium text-white">
                {item.variants} variants
              </Badge>
            </div>

            {/* Average price pill */}
            <div className="mt-2 rounded-xl bg-muted/40 px-4 py-3">
              <p className="text-xs text-muted-foreground">Average price</p>
              <p className="text-lg font-semibold text-emerald-400">
                ${item.averagePrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* CTA button - modal trigger */}
        <VariationsModal item={item} />
      </CardContent>
    </Card>
  );
};

export default MarketplaceCard;
