import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import VariationCard from "./VariationCard";

interface VariationsModalProps {
  item: {
    id: number;
    name: string;
    variants: number;
    averagePrice: number;
  };
}

const VariationsModal = ({ item }: VariationsModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Click to view all variants
          <ArrowRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-hidden space-y-4 sm:max-w-[40vw]">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">
            Variations [{item.name}]
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <VariationCard key={i} item={item} />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default VariationsModal;
