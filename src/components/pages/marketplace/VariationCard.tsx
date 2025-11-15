import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface VariationCardProps {
  item: {
    id: number;
    name: string;
    variants: number;
    averagePrice: number;
  };
}

const VariationCard = ({ item }: VariationCardProps) => {
  return (
    <Card className="border-border/40 bg-background/60">
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <img
            src="/images/card.png"
            alt={item.name}
            className="h-20 w-16 sm:h-24 sm:w-20 shrink-0 rounded-lg object-cover mx-auto sm:mx-0"
          />

          <div className="flex flex-1 flex-col gap-2 sm:gap-3 text-xs sm:text-sm min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <p className="text-sm font-semibold text-foreground truncate">
                {item.name}
              </p>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[11px] shrink-0">
                <Badge className="rounded-full bg-amber-600 px-1.5 py-0.5 sm:px-2">
                  Promo (+ Black Star)
                </Badge>
                <Badge variant="outline" className="px-1.5 py-0.5 sm:px-2">
                  Near Mint (NM)
                </Badge>
                <Badge variant="outline" className="px-1.5 py-0.5 sm:px-2">
                  Sword & Shield
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:text-sm">
              <div className="space-y-1">
                <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                  Avg Price
                </p>
                <p className="text-sm font-semibold text-emerald-400">
                  ${item.averagePrice.toFixed(2)}
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                  From
                </p>
                <p className="text-foreground text-sm">$445.00</p>
                <button className="text-xs font-medium text-primary underline-offset-2 hover:underline">
                  1 available
                </button>
              </div>
            </div>

            <Link to={`/marketplace/${item.id}`}>
              <Button
                variant="outline"
                className="mt-1 w-full justify-center rounded-full text-xs font-medium"
              >
                View
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VariationCard;
