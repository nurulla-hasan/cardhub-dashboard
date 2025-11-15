import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Heart, Layers, Search, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketplaceCard from "@/components/pages/marketplace/MarketplaceCard";
import MarketplaceFilters from "@/components/pages/marketplace/MarketplaceFilters";
import { Badge } from "@/components/ui/badge";

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

const Deck = () => {
  const [priceRange, setPriceRange] = useState([200, 2000]);
  const [search, setSearch] = useState("");
  const location = useLocation();

  const filteredListings = listings.filter((item) => {
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });
  return (
    <div>
      {/* Header */}
      <Card className="gradient-color">
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="space-y-2 md:space-y-0">
              <h1 className="text-2xl font-bold">Marketplace</h1>
              <p className="text-muted-foreground hidden sm:block">
                Buy and sell cards on the marketplace.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <Link to="/marketplace">
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex items-center gap-2 px-5 py-2 text-sm font-medium ${
                    location.pathname === "/marketplace"
                      ? "gradient-button text-white"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  <Store />
                  Marketplace
                </Button>
              </Link>
              <Link to="/wishlist">
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex items-center gap-2 px-5 py-2 text-sm font-medium ${
                    location.pathname === "/wishlist"
                      ? "gradient-button text-white"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  <Heart />
                  Wishlist <Badge variant="outline" className="border-none">3</Badge>
                </Button>
              </Link>
              <Link to="/deck">
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex items-center gap-2 px-5 py-2 text-sm font-medium ${
                    location.pathname === "/deck"
                      ? "gradient-button text-white"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  <Layers />
                  Deck Needs <Badge variant="outline" className="border-none">4</Badge>
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Marketplace Content */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-7">
        {/* Filters sidebar */}
        <div className="lg:col-span-2">
          <MarketplaceFilters
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
                  <MarketplaceCard key={item.id} item={item} />
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
                  <MarketplaceCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="deals"></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Deck;
