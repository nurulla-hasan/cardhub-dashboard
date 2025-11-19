import { Navigation2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const GeoRadiusBar = () => {
  return (
    <div className="mt-5 rounded-2xl border border-border/60 px-5 py-4 flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Navigation2 className="size-4" />
          </span>
          <span className="font-medium text-foreground">Search Radius</span>
        </div>
        <Badge>25km</Badge>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[11px] text-muted-foreground w-10">5km</span>
        <div className="flex-1">
          <Slider defaultValue={[35]} />
        </div>
        <span className="text-[11px] text-muted-foreground w-12 text-right">
          100km
        </span>
      </div>
    </div>
  );
};

export default GeoRadiusBar;
