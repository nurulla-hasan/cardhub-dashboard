import { Button } from "@/components/ui/button";
import { SquareCheckBig, ShoppingCart, PackageMinus } from "lucide-react";

const SelectCardModal = ({
  selectMode,
  selected,
  allItemIds,
  setSelected,
  setSelectMode,
  onListSelected,
  onDelistSelected,
}: {
  selectMode: boolean;
  selected: string[];
  allItemIds: string[];
  setSelected: (selected: string[]) => void;
  setSelectMode: (mode: boolean) => void;
  onListSelected?: (ids: string[]) => void;
  onDelistSelected?: (ids: string[]) => void;
}) => {
  const hasSelection = selectMode && selected.length > 0;

  const selectedLabel = `${selected.length} ${selected.length === 1 ? "card" : "cards"} selected`;

  const handleSelectAll = () => {
    if (!allItemIds.length) return;
    setSelected(Array.from(new Set(allItemIds)));
  };

  const handleClear = () => {
    setSelected([]);
  };

  const handleList = () => {
    onListSelected?.(selected);
  };

  const handleDelist = () => {
    onDelistSelected?.(selected);
  };

  const handleCancel = () => {
    setSelectMode(false);
    setSelected([]);
  };

  if (!hasSelection) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 w-[min(95vw,960px)] -translate-x-1/2">
      <div className="pointer-events-auto flex flex-col gap-4 rounded-2xl border gradient-color bg-background px-6 py-4 ">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-1 min-w-60 items-start gap-4">
            <span className="mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-full dark:bg-primary border">
              <SquareCheckBig className="size-6" />
            </span>
            <div>
              <div className="text-lg font-semibold">{selectedLabel}</div>
              <div className="mt-1 flex items-center gap-4 text-sm">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="font-medium text-[#c59aff] underline decoration-[#c59aff]/60 underline-offset-4 transition"
                >
                  Select all
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="font-medium text-foreground/70 underline decoration-foreground/40 underline-offset-4 transition"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={handleList}
              className="rounded-full bg-[#22c55e] px-6 py-2 text-sm font-semibold shadow-lg shadow-[#22c55e]/30 transition hover:bg-[#16a34a]"
            >
              <ShoppingCart className="mr-2 size-4" />
              List Selected
            </Button>
            <Button
              type="button"
              onClick={handleDelist}
              className="rounded-full bg-linear-to-r from-[#f97316] to-[#ef4444] px-6 py-2 text-sm font-semibold shadow-lg shadow-[#ef4444]/30 transition hover:from-[#fb923c] hover:to-[#f87171]"
            >
              <PackageMinus className="mr-2 size-4" />
              Delist Selected
            </Button>
            <button
              type="button"
              onClick={handleCancel}
              className="ml-1 text-sm font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCardModal;
