import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Bell } from "lucide-react";

const NotificationsPanel = () => {
  return (
    <Card className="bg-card/70 border-border/60 h-full">
      <CardContent className="h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Notifications</div>
          <Link to="/notifications">
            <Badge variant="secondary" className="rounded-full">
              All <ArrowUpRight className="size-3.5" />
            </Badge>
          </Link>
        </div>
        <div className="mt-4 space-y-4 overflow-auto pr-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md border border-border/60 p-3 bg-background/50"
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Bell className="size-4" />
                </span>
                <span>Notification</span>
                <span className="ml-auto text-[11px] text-muted-foreground">
                  10:20 am
                </span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Volutpat risus nunc.
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsPanel;
