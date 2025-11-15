"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Eye,
  Info,
  PenLine,
  Plus,
  ShoppingCart,
  Upload,
} from "lucide-react";
import { Link } from "react-router";
import CustomChart from "@/components/common/CustomChart";
import EditModal from "@/components/pages/inventory-details/EditModal";
import type { ChartConfig } from "@/components/ui/chart";

const priceChartConfig: ChartConfig = {
  trend: { label: "Trend", color: "#38bdf8" },
  highest: { label: "Highest", color: "#34d399" },
  lowest: { label: "Lowest", color: "#fb7185" },
};

const priceChartData = [
  { label: "2025-10-05", trend: 300, highest: 450, lowest: 150 },
  { label: "2025-10-12", trend: 310, highest: 455, lowest: 160 },
  { label: "2025-10-19", trend: 320, highest: 460, lowest: 170 },
  { label: "2025-10-26", trend: 330, highest: 470, lowest: 180 },
  { label: "2025-11-02", trend: 340, highest: 480, lowest: 190 },
];

const InventoryDetails = () => {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/inventory">
          <Button variant="link">
            <ArrowLeft />
            Back
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-12 xl:grid-cols-16">
        {/* Left column: card preview + actions */}
        <div className="lg:col-span-3 xl:col-span-3">
          <Card className="gradient-color">
            <div className="rounded-2xl px-3">
              <img
                src="/images/card.png"
                alt="Charizard VMAX"
                className="aspect-3/4 w-full rounded-lg object-cover"
              />
            </div>
            <CardContent className="flex flex-col gap-4">
              <div className="mt-auto space-y-3 text-sm">
                <Button size="lg" className="w-full gradient-button">
                  <ShoppingCart className="h-4 w-4" />
                  List for Sale
                </Button>
                <Button
                  size="lg"
                  className="w-full dark:bg-foreground dark:text-background"
                >
                  <Eye className="h-4 w-4" />
                  Make Public
                </Button>
                <Button
                  size="lg"
                  className="w-full dark:bg-foreground dark:text-background"
                >
                  <Plus className="h-4 w-4" />
                  Add to Deck
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Upload className="h-4 w-4" />
                  Upload Card Picture
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle column: details + price chart placeholder */}
        <div className="space-y-4 lg:col-span-6 xl:col-span-8">
          <Card>
            <CardContent className="space-y-5">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-foreground">Details</p>
                <EditModal />
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-semibold text-foreground">
                  Charizard VMAX
                </p>

                <div className="grid gap-6 text-sm text-muted-foreground sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Edition
                    </p>
                    <p className="mt-1 text-sm text-foreground">SWSH261</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Condition
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Near Mint (NM)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Rarity
                    </p>
                    <Badge className="mt-1 bg-amber-500 text-xs font-medium text-black">
                      Promo (★ Black Star)
                    </Badge>
                  </div>
                </div>

                <div className="h-px w-full bg-border/60" />

                <div className="grid gap-6 text-sm text-muted-foreground lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Current Price
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <p className="text-xl font-semibold text-emerald-400">
                        450.00 €
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-400">
                        +18.4% (30d)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Notes &amp; Observations
                    </p>
                    <div className="rounded-xl border border-purple-500/40 bg-purple-500/5 px-4 py-3 text-xs text-muted-foreground">
                      Lorem ipsum vestibulum vel at tortor erat nulla nunc nisi
                      integer duis arcu accumsan id eu ac ac auctor tristique
                      vitae egestas lobortis scelerisque luctus rhoncus semper
                      non cursus nullam nunc dignissim molestie.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-lg font-semibold text-foreground">
                  30-day average price
                </p>
              </div>

              <div className="grid gap-6 text-sm text-muted-foreground sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Trend
                  </p>
                  <p className="mt-1 text-base font-semibold text-sky-400">
                    412.00 €
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Highest
                  </p>
                  <p className="mt-1 text-base font-semibold text-emerald-400">
                    450.00 €
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Lowest
                  </p>
                  <p className="mt-1 text-base font-semibold text-rose-400">
                    380.00 €
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">
                  Price History (30 Days)
                </p>
                <div className="min-h-64 rounded-md border border-border/60 bg-background/50 p-3 dark:bg-background/60">
                  <CustomChart
                    config={priceChartConfig}
                    data={priceChartData}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: variants + related cards */}
        <div className="space-y-4 lg:col-span-3 xl:col-span-5">
          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-foreground">
                    Variants of the card
                  </p>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-1 text-xs text-muted-foreground">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 border-b border-border/40 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Variant name
                      </p>
                      <p>Information 1 | Information 2</p>
                    </div>
                    <div className="flex items-center justify-end gap-2 sm:justify-start">
                      <PenLine className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-semibold text-emerald-400">
                        450.00 €
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <p className="font-semibold text-foreground">Related Cards</p>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-center rounded-md border py-8 text-xs text-muted-foreground">
                No related cards yet
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
