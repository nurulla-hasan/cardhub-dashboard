import { useState } from "react";
import InventoryCard from "@/components/pages/inventory/InventoryCard"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InventoryFilters from "@/components/pages/inventory/InventoryFilters";
import PortfolioSummary from "@/components/pages/inventory/PortfolioSummary";
import type { InventoryItem } from "@/components/pages/inventory/inventoryTypes";

const Inventory = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const items: InventoryItem[] = [
    {
      id: "1",
      name: "Charizard",
      image: "https://via.placeholder.com/200x200?text=Charizard",
      price: "500.00 €",
    },
    {
      id: "2",
      name: "Pikachu",
      image: "https://via.placeholder.com/200x200?text=Pikachu",
      price: "150.00 €",
    },
    {
      id: "3",
      name: "Bulbasaur",
      image: "https://via.placeholder.com/200x200?text=Bulbasaur",
      price: "100.00 €",
    },
    {
      id: "4",
      name: "Squirtle",
      image: "https://via.placeholder.com/200x200?text=Squirtle",
      price: "120.00 €",
    },
    // Add more as needed
  ];

  return (
    <div className="space-y-6">
      <Card className="gradient-color">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Inventory</h1>
              <p className="text-muted-foreground">
                Manage your card collection. Select items to perform actions.
              </p>
            </div>
            <Button>Add card</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        <div className="lg:col-span-2">
          <PortfolioSummary />
        </div>
        <div className="lg:col-span-5 space-y-5">
          <InventoryFilters />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <InventoryCard
                key={item.id}
                item={item}
                isSelected={selected.includes(item.id)}
                onSelect={toggleSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
