import { Store, Users, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

const GeoFilters = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-black/20 border border-border/60 p-4 w-full">
      <div className="text-xs font-medium text-muted-foreground">Select</div>
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          className="gradient-button border-0 text-xs px-3 py-1.5 shadow-sm"
        >
          <PackageSearch className="size-4" />
          <span>Cards</span>
          <span className="ml-1 rounded-full bg-white/20 px-1.5 text-[10px]">
            23
          </span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-[#3b1a29] text-xs px-3 py-1.5 border-primary/40 text-primary/90 hover:bg-[#4a1f34]"
        >
          <Store className="size-4" />
          <span>Stores</span>
          <span className="ml-1 rounded-full bg-primary/20 px-1.5 text-[10px]">
            8
          </span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-card/40 text-xs px-3 py-1.5 border-border/60 text-muted-foreground hover:bg-card/60"
        >
          <Users className="size-4" />
          <span>Players</span>
          <span className="ml-1 rounded-full bg-muted/10 px-1.5 text-[10px]">
            4
          </span>
        </Button>
      </div>
    </div>
  );
};

export default GeoFilters;
