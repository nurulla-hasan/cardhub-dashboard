import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface DeckItem {
  id: number;
  title: string;
  set: string;
  priority: string;
  need: number;
  nearby: number;
  price: string;
  selected: boolean;
}

interface DeckNeedsCardProps {
  item: DeckItem;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const DeckNeedsCard = ({ item, isSelected, onSelect }: DeckNeedsCardProps) => {
  return (
    <Card
      onClick={() => onSelect(item.id)}
      className={`cursor-pointer rounded-2xl text-sm text-foreground transition-all duration-200 ${
        isSelected
          ? "border-2 border-pink-400 gradient-color ring-2 ring-pink-400/20"
          : "bg-card"
      }`}
    >
      <CardContent>
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Top row: Checkbox + Title + Price */}
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <Checkbox
                checked={isSelected}
                onCheckedChange={() => onSelect(item.id)}
                className="mt-1 h-5 w-5 rounded-[6px] bg-white dark:bg-white"
              />
              <div className="space-y-1">
                <p className="font-semibold text-foreground text-lg">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">{item.set}</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-emerald-400">
              {item.price}
            </p>
          </div>

          {/* Middle row: Image centered */}
          <div className="flex justify-center">
            <img
              src="/images/card.png"
              alt={item.title}
              className="h-32 w-24 rounded-lg object-cover shadow-md"
            />
          </div>

          {/* Bottom row: Badges */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <Badge className="rounded-full bg-pink-600 px-3 py-1 text-[11px] font-medium text-white">
              high priority
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full border-fuchsia-500/60 bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium text-fuchsia-200"
            >
              Need: {item.need}
            </Badge>
            <Badge
              variant="outline"
              className="inline-flex items-center gap-1 rounded-full border-sky-500/60 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              nearby
            </Badge>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex items-stretch gap-4">
          {/* Checkbox */}
          <div className="mt-4 flex items-start">
            <Checkbox
              checked={isSelected}
              onCheckedChange={() => onSelect(item.id)}
              className="h-5 w-5 rounded-[6px] bg-white dark:bg-white"
            />
          </div>

          {/* Image */}
          <div className="flex shrink-0 items-center justify-center">
            <img
              src="/images/card.png"
              alt={item.title}
              className="h-32 w-24 rounded-lg object-cover shadow-md"
            />
          </div>

          {/* Main content */}
          <div className="flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-1">
              <p className="font-semibold text-foreground text-lg">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">{item.set}</p>
            </div>

            {/* Pills row */}
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <Badge className="rounded-full bg-pink-600 px-3 py-1 text-[11px] font-medium text-white">
                high priority
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full border-fuchsia-500/60 bg-fuchsia-500/10 px-3 py-1 text-[11px] font-medium text-fuchsia-200"
              >
                Need: {item.need}
              </Badge>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-1 rounded-full border-sky-500/60 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                nearby
              </Badge>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-end px-2 py-2">
            <p className="text-lg font-semibold text-emerald-400">
              {item.price}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeckNeedsCard;