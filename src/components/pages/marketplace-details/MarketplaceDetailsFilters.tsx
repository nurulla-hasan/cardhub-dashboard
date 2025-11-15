import { MapPin, SlidersHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

interface MarketplaceDetailsFiltersProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
}

const MarketplaceDetailsFilters = ({ priceRange, setPriceRange }: MarketplaceDetailsFiltersProps) => {
  return (
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

        {/* Divider */}
        <Separator />

        {/* Condition */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Condition
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="near-mint">Near Mint (NM)</SelectItem>
              <SelectItem value="lightly-played">Lightly Played (LP)</SelectItem>
              <SelectItem value="moderately-played">Moderately Played (MP)</SelectItem>
              <SelectItem value="heavily-played">Heavily Played (HP)</SelectItem>
              <SelectItem value="damaged">Damaged (DMG)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Edition */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Edition
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select edition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="base-set">Base Set</SelectItem>
              <SelectItem value="jungle">Jungle</SelectItem>
              <SelectItem value="fossil">Fossil</SelectItem>
              <SelectItem value="base-set-2">Base Set 2</SelectItem>
              <SelectItem value="sword-shield">Sword & Shield</SelectItem>
              <SelectItem value="scarlet-violet">Scarlet & Violet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketplaceDetailsFilters;
