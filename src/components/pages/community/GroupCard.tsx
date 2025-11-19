import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";

// Single trending group card
const GroupCard = () => {
  return (
    <Card className="overflow-hidden border-none bg-card/50 p-0">
      <div className="relative h-42 w-full bg-linear-to-r from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40">
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[11px] text-white backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          46 online
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-amber-500/90 px-2 py-0.5 text-[11px] text-white">
          Competitive
        </div>
      </div>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 border border-white/40">
            <AvatarFallback className="bg-white text-[10px] font-semibold text-[#150320]">
              DE
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold">DE Pokemon League</p>
              <Badge
                variant="secondary"
                className="h-5 rounded-full text-[10px]"
              >
                Public
              </Badge>
              <Badge className="h-5 rounded-full text-[10px] bg-amber-500/20 text-amber-400 border-amber-500/30">
                Competitive
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <Users className="h-3 w-3" /> 156 members
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Competitive players meeting weekly for tournaments and friendly
          battles
        </p>
        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> 3 posted today
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Munich
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
