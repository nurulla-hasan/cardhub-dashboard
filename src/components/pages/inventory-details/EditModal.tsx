import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PenLine} from "lucide-react";

const EditModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
      >
        <PenLine className="h-4 w-4" />
      </Button>

      <DialogContent className="max-w-xl bg-background sm:rounded-2xl">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-lg font-semibold text-foreground">
            Edit Card Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            Edit the details of this card
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-5 text-sm">
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground">
              Price (€)
            </Label>
            <Input
              defaultValue="450.00"
              className="border-border/70 bg-background text-sm"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-xs font-medium text-muted-foreground">
                Edition
              </Label>
              <Select defaultValue="swsh261">
                <SelectTrigger className="border-border/70 bg-background text-sm">
                  <SelectValue placeholder="Select edition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="swsh261">SWSH261</SelectItem>
                  <SelectItem value="swsh260">SWSH260</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-medium text-muted-foreground">
                Condition
              </Label>
              <Select defaultValue="nm">
                <SelectTrigger className="border-border/70 bg-background text-sm">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nm">Near Mint (NM)</SelectItem>
                  <SelectItem value="lp">Lightly Played (LP)</SelectItem>
                  <SelectItem value="mp">Moderately Played (MP)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground">
              Comments / Notes
            </Label>
            <Textarea
              placeholder="e.g., slight edge wear, signed edition, centering issues..."
              className="min-h-[120px] resize-none border-border/70 bg-background text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Add any specific details about this card&apos;s condition or notable
              features
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-2 pt-2 sm:flex-row sm:justify-end">
            <Button
              className="w-full gradient-button justify-center rounded-full text-sm font-medium text-white sm:w-40"
              onClick={() => setOpen(false)}
            >
              Save Changes
            </Button>
            <Button
              variant="outline"
              className="w-full justify-center rounded-full text-sm font-medium sm:w-32"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
