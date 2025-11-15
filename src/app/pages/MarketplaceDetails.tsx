import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketplaceDetailsFilters from "@/components/pages/marketplace-details/MarketplaceDetailsFilters";
import { Badge } from "@/components/ui/badge";
import MarketplaceDetailsCard from "@/components/pages/marketplace-details/MarketplaceDetailsCard";
import { Search } from "lucide-react";

const listings = [
  {
    id: 1,
    name: "Add the name",
    variants: 3,
    averagePrice: 440,
  },
  {
    id: 2,
    name: "Charizard VMAX",
    variants: 3,
    averagePrice: 440,
  },
  {
    id: 3,
    name: "Pikachu Holo",
    variants: 2,
    averagePrice: 220,
  },
];

const MarketplaceDetails = () => {
  const [priceRange, setPriceRange] = useState([200, 2000]);
  const [search, setSearch] = useState("");

  const filteredListings = listings.filter((item) => {
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div>
      {/* Marketplace Content */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-7">
        {/* Filters sidebar */}
        <div className="lg:col-span-2">
          <MarketplaceDetailsFilters
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* Results column */}
        <div className="lg:col-span-5 space-y-5">
          {/* Tabs above search */}
          <Tabs defaultValue="all" className="w-full space-y-4">
            <TabsList className="grid w-full grid-cols-3 rounded-full">
              <TabsTrigger value="all" className="rounded-full">
                All Listings
              </TabsTrigger>
              <TabsTrigger value="near" className="rounded-full">
                Near You
              </TabsTrigger>
              <TabsTrigger value="deals" className="rounded-full">
                Best Deals
              </TabsTrigger>
            </TabsList>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
              <Input
                placeholder="Search cards..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            {/* Active filters */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="text-muted-foreground font-medium">
                Active filters:
              </span>
              <Badge variant="outline" className="text-[10px]">
                Cologne 455km
              </Badge>
              <Badge variant="outline" className="text-[10px]">
                {priceRange[0].toLocaleString("de-DE", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                € -{" "}
                {priceRange[1].toLocaleString("de-DE", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                €
              </Badge>
            </div>
            {/* Result info */}

            <TabsContent value="all" className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  Results{" "}
                  <span className="text-muted-foreground font-normal">
                    ({filteredListings.length} cards found)
                  </span>
                </p>
              </div>
              {/* Cards grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {filteredListings.map((item) => (
                  <MarketplaceDetailsCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            {/* Near You tab - richer listing cards */}
            <TabsContent value="near" className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  Results{" "}
                  <span className="text-muted-foreground font-normal">
                    ({filteredListings.length} cards found)
                  </span>
                </p>
              </div>
              {/* Cards grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {filteredListings.slice(0, 2).map((item) => (
                  <MarketplaceDetailsCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="deals" >
              
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDetails;
