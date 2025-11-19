import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Search, Map, List, MapPin, Clock, Users } from "lucide-react";
import GroupCard from "@/components/pages/community/GroupCard";

const CommunityMain = () => {
  const [isMap, setIsMap] = useState(false);

  return (
    <div className="space-y-4">
      {/* Search + view toggles */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
          <Input
            placeholder="Search groups by name, location, or category..."
            className="rounded-full border-border/40 bg-background/40 pl-10 text-sm"
          />
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs">
          <div className="relative inline-grid h-9 grid-cols-2 items-center px-1.5 text-xs font-medium">
            <Switch
              id="community-view-mode"
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
      </div>

      {/* Filters */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button className="rounded-full px-4 py-1 text-xs font-semibold bg-primary text-primary-foreground">
          All <span className="ml-2 rounded-full bg-white/20 px-1.5">4</span>
        </button>
        <button className="rounded-full px-4 py-1 text-xs font-semibold border border-border/60 bg-background/40">
          Competitive <span className="ml-2 rounded-full bg-white/10 px-1.5">4</span>
        </button>
        <button className="rounded-full px-4 py-1 text-xs font-semibold border border-border/60 bg-background/40">
          Casual <span className="ml-2 rounded-full bg-white/10 px-1.5">4</span>
        </button>
        <button className="rounded-full px-4 py-1 text-xs font-semibold border border-border/60 bg-background/40">
          Trading <span className="ml-2 rounded-full bg-white/10 px-1.5">4</span>
        </button>
        <button className="rounded-full px-4 py-1 text-xs font-semibold border border-border/60 bg-background/40">
          Social <span className="ml-2 rounded-full bg-white/10 px-1.5">4</span>
        </button>
      </div>

      {/* Trending Groups */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-fuchsia-400">↗</span> Trending Groups
          </div>
          <Badge className="rounded-full bg-rose-500/20 text-rose-400 border-rose-500/30">
            Hot
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <GroupCard key={i} />
          ))}
        </div>
      </div>

      {/* All Groups */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">
            All Groups
            <span className="ml-1 text-muted-foreground font-normal">
              (4 groups found)
            </span>
          </p>
        </div>

        <div className="space-y-3">
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className="overflow-hidden border-none bg-card/50"
            >
              <CardContent className="p-0">
                <div className="flex items-stretch gap-4 p-4">
                  <div className="h-20 w-28 rounded-lg bg-linear-to-r from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40" />
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold">DE Pokemon League</p>
                      <Badge className="h-5 rounded-full text-[10px] bg-amber-500/20 text-amber-400 border-amber-500/30">
                        Competitive
                      </Badge>
                      <Badge className="h-5 rounded-full text-[10px] bg-green-500/20 text-green-400 border-green-500/30">
                        Public
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Competitive players meeting weekly for tournaments and
                      friendly battles
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" /> 156 members
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                        46 online
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Munich, DE
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> 3 posted today
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="rounded-xl bg-white/5 px-3 py-2 text-[12px] text-muted-foreground">
                    <span className="text-foreground/80 mr-1">Last post:</span>
                    "DE Pokemon League weekly meetup this Friday!"
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityMain;
