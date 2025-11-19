import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";

const GroupSidebar = () => {
  return (
    <div>
      <Card className="border-none gradient-color text-foreground">
        <CardContent className="space-y-4 h-full">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-foreground">
              Your Groups
            </div>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-foreground">
              4
            </span>
          </div>

          <div className="space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-white/5"
                >
                  <Avatar className="h-10 w-10 border border-white/40">
                    <AvatarFallback className="bg-white text-xs font-semibold text-[#150320]">
                      DE
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5 text-xs">
                    <p className="font-semibold text-foreground">
                      DE Pokemon League
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>156</span>
                    </div>
                  </div>
                </button>
                <Separator />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GroupSidebar;
