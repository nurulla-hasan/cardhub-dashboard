import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Repeat, ShoppingCart } from "lucide-react";

const MarketplaceSPCard = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent>
        <div className="flex gap-5">
          {/* Image */}
          <img
            src="/images/card.png"
            alt="Charizard VMAX card"
            className="h-40 w-28 shrink-0 rounded-lg object-cover"
          />

          {/* Right column: title, badges, price, actions */}
          <div className="flex flex-1 flex-col gap-3">
            {/* Title + badges */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">
                Charizard VMAX
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
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button className="flex-1 min-w-[120px] rounded-full gradient-button text-xs font-semibold">
                <ShoppingCart/> Buy
              </Button>
              <Button
                variant="outline"
                className="flex-1 min-w-[120px] rounded-full text-xs font-semibold"
              >
                <Repeat/> Trade
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketplaceSPCard;