import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingCart, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ImportSuccessModalProps {
  open: boolean;
  onClose?: () => void;
}

const ImportSuccessModal = ({ open, onClose }: ImportSuccessModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-3xl text-center text-foreground">
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Import Successful!</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Quam arcu sit pulvinar placerat venenatis platea lectus a tempus.
          Augue in massa auctor volutpat odio vitae neque tellus.
        </p>

        <Card className="mt-8 py-0">
          <CardContent className="p-0">
            <div className="flex items-center justify-between px-6 py-4 text-sm">
              <p className="font-semibold text-xl text-foreground">Preview</p>
            </div>

            <div className="flex flex-col gap-4 px-6 py-5 text-left sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="h-20 w-14 overflow-hidden rounded-md bg-muted" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Charizard VMAX</p>
                  <p className="text-xs text-muted-foreground mb-2">Qty: 1</p>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <Badge className="inline-flex items-center rounded-full bg-amber-600 text-[11px] font-medium px-2.5 py-1">
                      Promo (★ Black Star)
                    </Badge>
                    <Badge variant="outline" className="inline-flex items-center border border-border/60 px-2.5 py-1 text-[11px]">
                      SWSH261
                    </Badge>
                    <Badge variant="outline" className="inline-flex items-center border border-border/60 px-2.5 py-1 text-[11px]">
                      Near Mint (NM)
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="text-right text-sm">
                <p className="text-lg font-semibold">45000 €</p>
                <p className="text-xs text-muted-foreground">Estimated Value</p>
              </div>
            </div>

            <div className="border-t border-border/50 px-6 py-4 grid gap-3 sm:grid-cols-2">
              <Button className="w-full justify-center bg-linear-to-r from-pink-500 to-fuchsia-500 text-white hover:from-pink-500/90 hover:to-fuchsia-500/90" size="lg">
                <ShoppingCart className="mr-2 h-4 w-4" />
                List for Sale
              </Button>
              <Button variant="outline" className="w-full justify-center" size="lg">
                <Plus className="mr-2 h-4 w-4" />
                Add to Deck
              </Button>
            </div>
          </CardContent>
        </Card>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 text-xs font-medium text-muted-foreground underline underline-offset-4"
        >
          Back &amp; Import More
        </button>
      </div>
    </div>
  );
};

export default ImportSuccessModal;