import { useState } from "react";
import GeoFilters from "@/components/pages/geo/GeoFilters";
import GeoMap from "@/components/pages/geo/GeoMap";
import GeoSidebar from "@/components/pages/geo/GeoSidebar";
import GeoRadiusBar from "@/components/pages/geo/GeoRadiusBar";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Map, List } from "lucide-react";

const Geo = () => {
  const [isMap, setIsMap] = useState(true);

  return (
    <div className="space-y-5">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Geo</h1>
        <div className="hidden md:flex items-center gap-2 text-xs">
          <div className="relative inline-grid h-9 grid-cols-2 items-center px-1.5 text-xs font-medium">
            <Switch
              id="geo-view-mode"
              checked={isMap}
              onCheckedChange={setIsMap}
              className="peer absolute inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-white [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full rounded-full"
            />
            <span className="pointer-events-none relative ms-0.5 flex min-w-[72px] items-center justify-center gap-1 text-center text-xs text-muted-foreground peer-data-[state=unchecked]:text-black">
              <Map size={14} aria-hidden="true" />
              Map
            </span>
            <span className="pointer-events-none relative me-0.5 flex min-w-[72px] items-center justify-center gap-1 text-center text-xs text-muted-foreground peer-data-[state=checked]:text-black">
              <List size={14} aria-hidden="true" />
              List
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
        <div className="space-y-4 col-span-9">
          <Card className="relative min-h-[68vh] overflow-hidden py-0">
            <CardContent className="p-0">
              <GeoMap />
              <div className="pointer-events-none absolute inset-0">
                <div className="pointer-events-auto px-6 pt-5 max-w-fit">
                  <GeoFilters />
                </div>
              </div>
            </CardContent>
          </Card>
          <GeoRadiusBar />
        </div>

        <div className="md:col-span-3">
          <Card className="py-0">
            <CardContent className="p-0">
              <GeoSidebar />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Geo;
