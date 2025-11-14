import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import { CardContent } from "@/components/ui/card";
import { Check, Eye, TrendingDown } from "lucide-react";
import type { InventoryItem } from "./inventoryTypes";
import { Badge } from "@/components/ui/badge";

const InventoryCard = ({
  item,
  isSelected,
  onSelect,
  selectEnabled = false,
}: {
  item: InventoryItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
  selectEnabled?: boolean;
}) => {
  return (
    <Card
      className={`${
        selectEnabled ? "cursor-pointer" : "cursor-default"
      } transition-colors ${
        isSelected
          ? "ring-2 ring-primary bg-primary/5"
          : selectEnabled
          ? "hover:bg-muted/50"
          : ""
      }`}
      onClick={() => {
        if (!selectEnabled) return;
        onSelect(item.id);
      }}
    >
      <CardContent>
        <div className="relative mb-3 rounded-lg overflow-hidden bg-muted">
          <div className="aspect-3/4 w-full">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>
          <Badge className="absolute left-3 top-3 bg-orange-500/95">Promo (★ Black Star)</Badge>
          {selectEnabled && (
            <span
              className={`absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background/80 backdrop-blur border-border"
              }`}
            >
              {isSelected && <Check className="h-4 w-4" />}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <Link to={`/inventory/${item.id}`}>
            <Eye className="size-4 text-purple-500" />
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 text-[11px] font-medium">
            Near Mint (NM)
          </span>
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 text-[11px] font-medium">
            Sword & Shield
          </span>
        </div>
        <div className="my-3 h-px bg-border/60" />
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-emerald-500">{item.price}</p>
          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-[11px] font-medium text-foreground">
            <TrendingDown className="size-4" /> 1.1% below market
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryCard;
