import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, X, Heart, MapPin } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const wishlistItems = [1, 2, 3];

const WishlistCard = () => {
  return (
    <div className="space-y-4">
      {/* Price update alert */}
      <Alert className="border-amber-500/40 bg-linear-to-r from-[#33191e]/20 via-[#33191e]/20 to-[#33191e]/20 text-amber-50 relative">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>1 wishlist card has price updates!</AlertTitle>
        <AlertDescription className="text-amber-100/90">
          Check below for new availability or price drops.
        </AlertDescription>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-3 text-xs font-medium"
        >
          <X />
        </Button>
      </Alert>

      {/* Result header */}
      <div className="flex items-center justify-between text-sm">
        <p className="font-semibold text-foreground">
          Result <span className="text-muted-foreground">(3)</span>
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Filter by:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] h-8 text-xs border-border/60">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="price-drop">Price Drop</SelectItem>
              <SelectItem value="nearby">Nearby</SelectItem>
              <SelectItem value="below-market">Below Market</SelectItem>
              <SelectItem value="new">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Wishlist cards */}
      <div className="space-y-4">
        {wishlistItems.map((id) => (
          <Card
            key={id}
            className="overflow-hidden border-border/40 gradient-color"
          >
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
                {/* Image */}
                <img
                  src="/images/card.png"
                  alt="Charizard VMAX"
                  className="h-40 w-28 shrink-0 rounded-lg object-cover"
                />

                {/* Main content */}
                <div className="flex flex-1 flex-col gap-6">
                  {/* Title + badges */}
                  <div className="flex items-center justify-between">
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
                    <Button
                      size="icon"
                      className="rounded-full bg-pink-500 text-white shadow-md hover:bg-pink-600"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Price + pills row */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <p className="text-lg font-semibold text-emerald-400">
                      450,00 €
                    </p>
                    <Badge
                      variant="outline"
                      className="rounded-full border-emerald-500/60 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400"
                    >
                      1.1% below market
                    </Badge>
                    <Badge
                      variant="outline"
                      className="inline-flex items-center gap-1 rounded-full border-sky-500/60 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-400"
                    >
                      <MapPin className="h-3 w-3" /> 1 nearby
                    </Badge>
                    <Badge className="rounded-full bg-pink-500 px-2.5 py-1 text-[11px] font-medium text-white">
                      Price Drop!
                    </Badge>
                  </div>

                  {/* Bottom actions row */}
                  <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <Button className="flex-1 justify-center gradient-button text-xs font-semibold text-white">
                      Buy
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 justify-center text-xs font-semibold"
                    >
                      Trade
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

  export default WishlistCard;
