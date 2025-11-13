import { Card } from "@/components/ui/card";

import { CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { InventoryItem } from "./inventoryTypes";

const InventoryCard = ({
  item,
  isSelected,
  onSelect,
}: {
  item: InventoryItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) => {
  return (
    <Card
      className={`cursor-pointer transition-colors ${
        isSelected ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
      }`}
      onClick={() => onSelect(item.id)}
    >
      <CardContent className="p-4">
        <div className="relative mb-3 rounded-lg overflow-hidden bg-muted">
          <div className="aspect-3/4 w-full">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-orange-500/95 px-2.5 py-1 text-[11px] font-semibold text-white shadow">
            Promo (★ Black Star)
          </span>
          <span
            className={`absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border shadow-sm ${
              isSelected
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background/80 backdrop-blur border-border"
            }`}
          >
            {isSelected && <Check className="h-4 w-4" />}
          </span>
        </div>
        <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
        <p className="text-lg font-bold text-primary">{item.price}</p>
      </CardContent>
    </Card>
  );
};

export default InventoryCard;
