import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Layers, MapPin, Truck, ShoppingCart, SquareCheckBig } from "lucide-react";
import DeckNeedsCard from "./DeckNeedsCard";

const decks = [
  {
    id: 1,
    name: "Psychic Control",
    neededCount: 2,
    items: [
      {
        id: 1,
        title: "Mewtwo V",
        set: "Pokemon GO",
        priority: "high priority",
        need: 2,
        nearby: 2,
        price: "450,00 €",
        selected: false,
      },
      {
        id: 2,
        title: "Mewtwo V",
        set: "Pokemon GO",
        priority: "high priority",
        need: 2,
        nearby: 2,
        price: "450,00 €",
        selected: false,
      },
    ],
  },
  {
    id: 2,
    name: "Dragon Deck",
    neededCount: 1,
    items: [
      {
        id: 3,
        title: "Mewtwo V",
        set: "Pokemon GO",
        priority: "high priority",
        need: 2,
        nearby: 2,
        price: "450,00 €",
        selected: false,
      },
    ],
  },
];

const DeckNeedsList = () => {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const handleSelectItem = (itemId: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedItems.size === 4) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set([1, 2, 3, 4]));
    }
  };

  return (
    <div className="space-y-6">
      {/* Top actions */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSelectAll}
          className="h-8 rounded-full border-border/60 px-3 text-xs flex items-center gap-2 bg-background/40"
        >
          <Checkbox
            checked={selectedItems.size === 4}
            className="rounded"
          />
          <span>Select All</span>
        </Button>
        <span className="text-[11px]">{selectedItems.size} of 4 selected</span>
      </div>

      {/* Deck groups */}
      <div className="space-y-8">
        {decks.map((deck) => (
          <div key={deck.id} className="space-y-4">
            {/* Deck header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-600/20 text-fuchsia-300">
                  <Layers />
                </span>
                <span>{deck.name}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {deck.neededCount} card{deck.neededCount > 1 ? "s" : ""} needed
              </p>
            </div>

            {/* Deck items */}
            <div className="space-y-3">
              {deck.items.map((item) => (
                <DeckNeedsCard
                  key={item.id}
                  item={item}
                  isSelected={selectedItems.has(item.id)}
                  onSelect={handleSelectItem}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bundle purchase bar */}
      {selectedItems.size > 0 && (
        <div className="fixed inset-x-4 bottom-6 z-30 md:left-1/2 md:right-auto md:w-[720px] md:-translate-x-1/2">
          <div className="flex flex-col gap-3 rounded-2xl border border-pink-500/60 bg-[#261337] px-4 py-3 text-xs text-foreground shadow-lg md:flex-row md:items-center md:justify-between md:px-6 md:py-4">
            {/* Left section: icon + texts */}
            <div className="flex flex-1 items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-600/40 text-pink-100">
                <SquareCheckBig size="16"/>
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {selectedItems.size} card{selectedItems.size > 1 ? "s" : ""} selected for bundle purchase
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1 text-sky-300">
                    <MapPin className="h-3 w-3" /> 1 nearby
                  </span>
                  <span className="inline-flex items-center gap-1 text-amber-300">
                    <Truck className="h-3 w-3" /> 1 Shipping required
                  </span>
                </div>
              </div>
            </div>

            {/* Divider on desktop */}
            <div className="hidden h-10 w-px bg-white/10 md:block" />

            {/* Right section: actions */}
            <div className="flex flex-1 items-center justify-end gap-4 md:justify-end">
              <Button className="flex items-center gap-2 rounded-full gradient-button px-5 py-2 text-xs font-semibold text-white shadow-md">
                <ShoppingCart className="h-4 w-4" />
                Buy 450,00 €
              </Button>
              <button
                type="button"
                onClick={() => setSelectedItems(new Set())}
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeckNeedsList;
