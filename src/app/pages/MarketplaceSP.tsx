import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Search, MoveLeft } from "lucide-react";
import MarketplaceSPProfile from "@/components/pages/marketplace-sp/MarketplaceSPProfile";
import MarketplaceSPCard from "@/components/pages/marketplace-sp/MarketplaceSPCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const MarketplaceSP = () => {
  return (
    <>
    <Button
      variant="ghost"
      onClick={() => window.history.back()}
      aria-label="Go back"
    >
      <MoveLeft /> Back
    </Button>
      {/* Marketplace Content */}
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Filters sidebar */}
        <div className="lg:col-span-3">
          <MarketplaceSPProfile />
        </div>

        {/* Results column */}
        <div className="lg:col-span-9 space-y-5">
          {/* Tabs above search */}
          <Tabs defaultValue="inventory" className="w-full space-y-4">
            <TabsList className="grid w-full grid-cols-2 rounded-full">
              <TabsTrigger value="inventory" className="rounded-full">
                Seller's Inventory
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-full">
                Reviews
              </TabsTrigger>
            </TabsList>

            {/* Search */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
                <Input
                  placeholder="Search"
                  className="rounded-full border-border/40 bg-background/40 pl-10 text-sm"
                />
              </div>
              <Button
                variant="outline"
                className="rounded-full border-border/60 px-5 text-xs font-semibold"
              >
                <Filter /> Filter
              </Button>
            </div>

            <TabsContent value="inventory" className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  Seller's Inventory
                  <span className="ml-1 text-muted-foreground font-normal">
                    (127)
                  </span>
                </p>
              </div>
              {/* Cards grid */}
              <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
                {[...Array(6)].map((_, index) => (
                  <MarketplaceSPCard key={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  Reviews
                  <span className="ml-1 text-muted-foreground font-normal">
                    (10)
                  </span>
                </p>
              </div>

              <ScrollArea className="gap-3 rounded-2xl p-4 bg-card/50 md:h-[550px]">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-4 rounded-xl bg-white/5 px-4 py-3 mb-3"
                  >
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-foreground">
                          CardCollector99
                        </p>
                        <div className="flex items-center gap-0.5 text-[11px] text-fuchsia-400">
                          {"★★★★★"}
                        </div>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        Fast shipping and great packaging! Card arrived in perfect
                        condition.
                      </p>
                    </div>
                    <p className="whitespace-nowrap text-[11px] text-muted-foreground">
                      2 days ago
                    </p>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MarketplaceSP;
