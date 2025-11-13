import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Filter, Grid2x2, List, Search, Squircle, SquareCheckBig } from "lucide-react";

export const InventoryFilters = ({
  selectMode,
  onToggleSelectMode,
}: {
  selectMode: boolean;
  onToggleSelectMode: () => void;
}) => {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Input placeholder="Search" className="pl-9" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline">
          <Filter />
          Filter
        </Button>
        <div className="flex items-center gap-2">
          <div className="relative inline-grid h-8 grid-cols-[1fr_1fr] items-center text-sm font-medium">
            <Switch
              id="view-mode"
              checked={isGrid}
              onCheckedChange={setIsGrid}
              className="peer absolute inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
            />
            <span className="pointer-events-none relative ms-0.5 flex min-w-7 items-center justify-center text-center text-muted-foreground peer-data-[state=unchecked]:text-black">
              <Grid2x2 size={14} aria-hidden="true" />
            </span>
            <span className="pointer-events-none relative me-0.5 flex min-w-7 items-center justify-center text-center text-muted-foreground peer-data-[state=checked]:text-black">
              <List size={14} aria-hidden="true" />
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          aria-pressed={selectMode}
          onClick={onToggleSelectMode}
        >
          {selectMode ? <SquareCheckBig /> : <Squircle /> } 
          Select cards
        </Button>
      </div>
    </div>
  );
};

export default InventoryFilters;
