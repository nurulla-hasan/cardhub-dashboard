import { useState } from "react";
import InventoryCard from "@/components/pages/inventory/InventoryCard"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InventoryFilters from "@/components/pages/inventory/InventoryFilters";
import PortfolioSummary from "@/components/pages/inventory/PortfolioSummary";
import { items } from "@/components/pages/inventory/inventoryData";
import { Plus } from "lucide-react";
import SelectCardModal from "@/components/pages/inventory/SelectCardModal";

const Inventory = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectMode, setSelectMode] = useState(false);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <Card className="gradient-color">
        <CardContent>
          <div className="flex justify-between sm:items-center">
            <div>
              <h1 className="text-2xl font-bold">Inventory</h1>
              <p className="text-muted-foreground hidden sm:block">
                Manage your card collection. Select items to perform actions.
              </p>
            </div>
            <Button><Plus/> Add card</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        <div className="lg:col-span-2">
          <PortfolioSummary />
        </div>
        <div className="lg:col-span-5 space-y-5">
          <InventoryFilters
            selectMode={selectMode}
            onToggleSelectMode={() => setSelectMode((v) => !v)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <InventoryCard
                key={item.id}
                item={item}
                isSelected={selected.includes(item.id)}
                onSelect={(id) => {
                  if (!selectMode) return;
                  toggleSelect(id);
                }}
                selectEnabled={selectMode}
              />
            ))}
          </div>
          <SelectCardModal
            selectMode={selectMode}
            selected={selected}
            allItemIds={items.map((item) => item.id)}
            setSelected={setSelected}
            setSelectMode={setSelectMode}
            onListSelected={(ids) => {
              console.log("List selected", ids);
            }}
            onDelistSelected={(ids) => {
              console.log("Delist selected", ids);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;

