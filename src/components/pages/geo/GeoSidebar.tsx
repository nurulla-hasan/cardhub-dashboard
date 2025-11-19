import { MapPin } from "lucide-react";

const GeoSidebar = () => {
  return (
    <div className="h-full rounded-2xl bg-card/80 border border-border/60 px-8 py-10 flex flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-primary to-fuchsia-500 shadow-[0_0_0_8px_rgba(168,85,247,0.25)] mb-6">
        <MapPin className="size-8 text-white" />
      </div>
      <h2 className="text-base font-semibold mb-2">Explore nearby activity</h2>
      <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
        Click on any marker to view details about stores, card offers, or player
        groups in your area.
      </p>
    </div>
  );
};

export default GeoSidebar;
