import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MarketplaceDetailsCardProps {
  item: {
    id: number;
    name: string;
    variants: number;
    averagePrice: number;
  };
}

const MarketplaceDetailsCard = ({ item }: MarketplaceDetailsCardProps) => {
  return (
    <Card className="overflow-hidden border-border/40 bg-background/40">
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          {/* Image */}
          <img
            src="/images/card.png"
            alt={item.name}
            className="h-40 w-28 shrink-0 rounded-lg object-cover"
          />

          <div className="flex flex-1 flex-col gap-3">
            {/* Title + badges */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">
                {item.name}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <Badge className="rounded-full bg-amber-500 px-2.5 py-1 font-medium text-black">
                  Promo (+ Black Star)
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-2.5 py-1"
                >
                  Near Mint (NM)
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full px-2.5 py-1"
                >
                  Sword & Shield
                </Badge>
              </div>
            </div>

            {/* Seller strip */}
            <Link to="/marketplace-seller-profile">
              <div className="flex items-center gap-2 sm:gap-3 rounded-full bg-muted/40 px-2 py-2 sm:px-3 text-xs">
                <Avatar className="h-6 w-6 sm:h-7 sm:w-7 rounded-full shrink-0 overflow-hidden">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-[10px]">CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-foreground">
                    <span className="truncate">Username</span>
                    <span className="text-primary hidden sm:inline">•</span>
                    <span className="text-muted-foreground truncate">
                      4.9 ★ · 1543 sales
                    </span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-muted-foreground sm:hidden">
                    2.3km away
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Prices row */}
        <div className="space-y-1 text-xs">
          <p className="text-muted-foreground">Market avg: 450,00 €</p>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-lg font-semibold text-emerald-400">
              450,00 €
            </p>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
              1.1% below market
            </span>
          </div>
        </div>

        {/* Actions row */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button className="flex-1 min-w-[120px] rounded-full gradient-button text-xs font-semibold">
            Buy
          </Button>
          <Button
            variant="outline"
            className="flex-1 min-w-[120px] rounded-full text-xs font-semibold"
          >
            Trade
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border/60"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketplaceDetailsCard;
