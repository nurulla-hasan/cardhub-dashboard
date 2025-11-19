import { Maximize2, Minus, Plus, Store, Users, Package2 } from "lucide-react";

const GeoMap = () => {
  const markers = [
    { id: 1, x: "25%", y: "30%", type: "store" as const },
    { id: 2, x: "70%", y: "35%", type: "player" as const },
    { id: 3, x: "65%", y: "65%", type: "player" as const },
    { id: 4, x: "45%", y: "70%", type: "store" as const },
    { id: 5, x: "32%", y: "55%", type: "card" as const },
  ];

  return (
    <div className="relative min-h-[68vh] w-full rounded-2xl bg-card border border-border/60 overflow-hidden">

      {/* zoom & fullscreen */}
      <div className="absolute right-4 top-4 flex flex-col gap-2 z-10">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-border/60 text-muted-foreground hover:text-foreground">
          <Plus className="size-4" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-border/60 text-muted-foreground hover:text-foreground">
          <Minus className="size-4" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-border/60 text-muted-foreground hover:text-foreground mt-1">
          <Maximize2 className="size-4" />
        </button>
      </div>

      {/* radius ring */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="h-44 w-44 rounded-full border border-primary/40 border-dashed" />
        <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[0_0_0_6px_rgba(168,85,247,0.35)]" />
      </div>

      {/* markers */}
      {markers.map((m) => (
        <div
          key={m.id}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: m.x, top: m.y }}
        >
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-white shadow-md
            ${m.type === "store" ? "bg-[#f97316] border-[#fed7aa]" : ""}
            ${m.type === "player" ? "bg-[#38bdf8] border-[#bae6fd]" : ""}
            ${m.type === "card" ? "bg-[#22c55e] border-[#bbf7d0]" : ""}
          `}
          >
            {m.type === "store" && <Store className="size-4" />}
            {m.type === "player" && <Users className="size-4" />}
            {m.type === "card" && <Package2 className="size-4" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeoMap;
