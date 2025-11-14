"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Search, Upload, Info, Lightbulb } from "lucide-react";
import { useState } from "react";
import ImportSuccessModal from "./ImportSuccessModal";

const ImportUploader = () => {
  const [open, setOpen] = useState(false);

  const handleAddCard = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="mt-2 flex justify-center">
      <Card className="w-full max-w-7xl">
        <CardContent className="space-y-5">
          <Tabs defaultValue="scan" className="w-full">
            <TabsList className="grid grid-cols-3 h-12 p-1 rounded-full bg-muted w-full">
              <TabsTrigger
                value="scan"
                className="rounded-full text-sm font-medium"
              >
                <Camera className="size-4 mr-2" />
                Scan Card
              </TabsTrigger>
              <TabsTrigger
                value="manual"
                className="rounded-full text-sm font-medium"
              >
                <Search className="size-4 mr-2" />
                Manual Search
              </TabsTrigger>
              <TabsTrigger
                value="bulk"
                className="rounded-full text-sm font-medium"
              >
                <Upload className="size-4 mr-2" />
                Bulk Upload
              </TabsTrigger>
            </TabsList>

            <TabsContent value="scan" className="space-y-4 mt-6">
              {/* Scan area */}
              <div className="grid gap-5 lg:grid-cols-[minmax(0,2.2fr)_minmax(260px,1fr)] items-stretch">
                <div className="flex flex-col gap-4">
                  <div className="flex-1 rounded-xl border border-border/60 gradient-color px-8 py-16 text-center text-xs sm:text-sm text-muted-foreground flex flex-col items-center justify-center">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white mb-4">
                      <Camera className="size-7" />
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Position your card in the frame
                    </p>
                    <p className="max-w-sm text-xs text-muted-foreground">
                      Make sure the card is well-lit and in focus. Avoid glare
                      and keep the card centered for the best recognition.
                    </p>
                  </div>

                  <Button
                    className="mt-1 w-full text-white text-sm font-semibold shadow-lg shadow-fuchsia-500/40"
                    size="lg"
                  >
                    <Camera className="mr-2 size-4" />
                    Start Scan
                  </Button>
                </div>

                {/* Scanning tips */}
                <div className="rounded-xl border border-border/60 bg-background/70 px-5 py-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                      <Lightbulb className="size-3.5" />
                    </span>
                    <div className="flex items-center gap-1 text-foreground text-sm font-semibold">
                      <Info className="size-4 text-muted-foreground" />
                      Scanning Tips
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Ensure good lighting for accurate detection.</li>
                    <li>Keep the card flat and in focus.</li>
                    <li>Clean the card surface for best results.</li>
                    <li>OCR works best with English cards.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manual" className="space-y-4 mt-6">
              <div className="grid gap-5 lg:grid-cols-[minmax(0,2.2fr)_minmax(260px,1fr)] items-stretch">
                <div className="flex flex-col">
                  <div className="flex-1 rounded-xl border gradient-color p-6 text-xs sm:text-sm text-muted-foreground flex flex-col gap-6">
                    <div className="text-foreground">
                      <p className="text-base sm:text-lg font-semibold">
                        Search for a card manually
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Enter a few details and we'll help you find the exact
                        card in your collection.
                      </p>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                          placeholder="Search for cards..."
                          className="pl-10  border-none text-foreground placeholder:text-muted-foreground"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="manual-name"
                          className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                        >
                          Card name
                        </Label>
                        <Input
                          id="manual-name"
                          placeholder="e.g. Charizard VMAX"
                          className=" border-none text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="manual-edition"
                            className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                          >
                            Edition
                          </Label>
                          <Select>
                            <SelectTrigger className="border-none text-foreground bg-transparent">
                              <SelectValue placeholder="Select edition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1st-edition">
                                1st Edition
                              </SelectItem>
                              <SelectItem value="unlimited">
                                Unlimited
                              </SelectItem>
                              <SelectItem value="shadowless">
                                Shadowless
                              </SelectItem>
                              <SelectItem value="holo">Holo</SelectItem>
                              <SelectItem value="reverse-holo">
                                Reverse Holo
                              </SelectItem>
                              <SelectItem value="promo">Promo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="manual-rarity"
                            className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                          >
                            Rarity
                          </Label>
                          <Select>
                            <SelectTrigger className="border-none text-foreground bg-transparent">
                              <SelectValue placeholder="Select rarity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="common">Common</SelectItem>
                              <SelectItem value="uncommon">Uncommon</SelectItem>
                              <SelectItem value="rare">Rare</SelectItem>
                              <SelectItem value="rare-holo">
                                Rare Holo
                              </SelectItem>
                              <SelectItem value="super-rare">
                                Super Rare
                              </SelectItem>
                              <SelectItem value="secret-rare">
                                Secret Rare
                              </SelectItem>
                              <SelectItem value="ultra-rare">
                                Ultra Rare
                              </SelectItem>
                              <SelectItem value="promo">Promo</SelectItem>
                              <SelectItem value="1st-edition">
                                1st Edition
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="manual-condition"
                            className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                          >
                            Condition
                          </Label>
                          <Select>
                            <SelectTrigger className="border-none text-foreground bg-transparent">
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mint">Mint</SelectItem>
                              <SelectItem value="near-mint">
                                Near Mint
                              </SelectItem>
                              <SelectItem value="lightly-played">
                                Lightly Played
                              </SelectItem>
                              <SelectItem value="moderately-played">
                                Moderately Played
                              </SelectItem>
                              <SelectItem value="heavily-played">
                                Heavily Played
                              </SelectItem>
                              <SelectItem value="damaged">Damaged</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="manual-quantity"
                            className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                          >
                            Quantity
                          </Label>
                          <Select>
                            <SelectTrigger className="border-none text-foreground bg-transparent">
                              <SelectValue placeholder="Select quantity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6-10">6-10</SelectItem>
                              <SelectItem value="11-20">11-20</SelectItem>
                              <SelectItem value="21-50">21-50</SelectItem>
                              <SelectItem value="50+">50+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 min-w-[130px]"
                        size="lg"
                      >
                        Clear Form
                      </Button>
                      <Button
                        onClick={handleAddCard}
                        className="flex-1 min-w-[150px]"
                        size="lg"
                      >
                        <Search className="mr-2 size-4" />
                        Add Card
                      </Button>
                      <ImportSuccessModal
                        open={open}
                        onClose={handleCloseModal}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-background/70 px-5 py-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                      <Info className="size-3.5" />
                    </span>
                    <div className="text-foreground text-sm font-semibold">
                      Manual Search Tips
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Use the official card name for the best match.</li>
                    <li>Include the set or expansion to narrow results.</li>
                    <li>Card number and rarity help distinguish variants.</li>
                    <li>
                      Add extra details in notes if the card is a promo or
                      alternate art.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bulk" className="space-y-4 mt-6">
              <div className="grid gap-5 lg:grid-cols-[minmax(0,2.2fr)_minmax(260px,1fr)] items-stretch">
                <div className="flex flex-col gap-4">
                  <div className="flex-1 rounded-xl border border-border/60 bg-muted/30 px-8 py-10 text-center">
                    <div className="flex flex-col items-center gap-6">
                      <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Upload className="size-8 text-primary" />
                      </div>
                      <div className="space-y-4 w-full max-w-md">
                        <div>
                          <p className="text-xl font-semibold mb-2">
                            Import from URL
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Paste your collection link from Cardmarket, Pokémon
                            TCG, or Limitless TCG
                          </p>
                        </div>
                        <div className="space-y-3">
                          <Input
                            placeholder="https://www.cardmarket.com/en/Pokemon/Users/..."
                            className="w-full"
                          />
                          <Button className="w-full" size="lg">
                            <Upload className="mr-2 size-4" />
                            Import from Link
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-background/70 px-5 py-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                      <Upload className="size-3.5" />
                    </span>
                    <div className="text-foreground text-sm font-semibold">
                      Bulk Import Guide
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      Paste your collection link from Cardmarket, Pokémon TCG,
                      or Limitless TCG.
                    </li>
                    <li>
                      Links should point to your public collection or wantlist.
                    </li>
                    <li>Supports up to 10,000 cards per import.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImportUploader;
