import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

export const CommunityEvents = () => {
  return (
    <Card className="col-span-3 border border-border bg-card">
      <CardContent className="space-y-5">
        <h3 className="text-base font-semibold text-foreground">
          Upcoming Event
        </h3>

        <div className="space-y-5">
          {[1, 2].map((idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-muted/60 p-3 space-y-3 border border-border/60"
            >
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center w-12 rounded-2xl bg-primary text-xs text-primary-foreground py-3">
                  <span className="opacity-80">Nov</span>
                  <span className="text-lg font-semibold leading-none">6</span>
                </div>

                <div className="flex-1 space-y-1">
                  <p className="text-sm font-semibold text-foreground">
                    Weekly Tournament
                  </p>
                  <div className="space-y-1 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Thursday, November 6 at 11:00 AM</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Card Masters Arena</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-500">
                      <Users className="w-3.5 h-3.5" />
                      <span>24 attending</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button className="flex-1 h-8 rounded-full gradient-button text-xs font-medium">
                  Confirm Entry
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-8 rounded-full border-border text-xs font-medium bg-background/40"
                >
                  See details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
