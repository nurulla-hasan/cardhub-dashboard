import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Layers,
  MapPin,
  Search,
  SlidersHorizontal,
  Store,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const Marketplace = () => {
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
              <Button
                size="lg"
                className="gradient-button flex items-center gap-2 px-5 py-2 text-sm font-medium text-white"
              >
                <Store className="h-4 w-4" />
                Marketplace
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-4 w-4" />
                Wishlist <Badge variant="outline">3</Badge>
              </Button>
              <Button size="lg" variant="outline">
                <Layers className="h-4 w-4" />
                Deck Needs <Badge variant="outline">4</Badge>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Marketplace Content */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-7">
        {/* Filters sidebar */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                  <p className="font-semibold text-foreground">Filters</p>
                </div>
                <Button
                  variant="link"
                  className="h-auto p-0 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Clear All Filters
                </Button>
              </div>

              {/* Price range */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Price Range
                  </Label>
                  <p className="text-sm font-semibold text-foreground">
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
                  </p>
                </div>

                <div className="space-y-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    min={0}
                    step={50}
                    className="w-full"
                  />

                  <div className="flex justify-end">
                    <Badge className="rounded-full">
                      {priceRange[1].toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      €
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <Separator />

              {/* Location */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Location
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cologne">Cologne · 455 km</SelectItem>
                      <SelectItem value="munich">Munich · 0 km</SelectItem>
                      <SelectItem value="berlin">Berlin · 585 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>
                    Current:{" "}
                    <span className="font-medium text-foreground">Munich</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
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

            <TabsContent value="all" className="space-y-4">
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
                <Badge
                  variant="outline"
                  className="text-[10px]"
                >
                  Cologne 455km
                </Badge>
                <Badge
                  variant="outline"
                  className="text-[10px]"
                >
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
                  <Card
                    key={item.id}
                    className="group overflow-hidden border-border/40 bg-background/40"
                  >
                    <CardContent className="space-y-4">
                      <div className="flex gap-4">
                        {/* Image placeholder */}
                        <img
                          src={"/images/card.png"}
                          alt={item.name}
                          className="h-36 w-24 shrink-0 overflow-hidden rounded-lg"
                        />

                        {/* Title + variants */}
                        <div className="flex flex-1 flex-col gap-3">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-semibold text-foreground leading-tight">
                              {item.name}
                            </p>
                            <Badge className="rounded-full bg-purple-600/80 px-2.5 py-1 text-[11px] font-medium text-white">
                              {item.variants} variants
                            </Badge>
                          </div>

                          {/* Average price pill */}
                          <div className="mt-2 rounded-xl bg-muted/40 px-4 py-3">
                            <p className="text-xs text-muted-foreground">Average price</p>
                            <p className="text-lg font-semibold text-emerald-400">
                              ${item.averagePrice.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA button */}
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        Click to view all variants 
                        <ArrowRight />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="near"></TabsContent>
            <TabsContent value="deals"></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
