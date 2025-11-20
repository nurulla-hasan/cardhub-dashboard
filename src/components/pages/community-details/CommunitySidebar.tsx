import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Hash, MessageSquare, Pin, Users } from "lucide-react";

export const CommunitySidebar = () => {
  return (
    <Card className="col-span-full md:col-span-2 flex flex-col justify-between border border-border bg-card">
      <CardContent className="space-y-3">
        <Button
          variant="ghost"
          className="w-full justify-start bg-primary/40 text-sm font-medium"
        >
          <Hash />
          <span>Feed</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-sm">
          <Calendar />
          <div className="flex items-center justify-between w-full">
            <span>Events</span>
            <Badge variant="destructive" className="ml-2 px-2 py-0.5 text-xs">
              3
            </Badge>
          </div>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-sm">
          <MessageSquare />
          <span>Chat</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-sm">
          <Users />
          <span>Members</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start text-sm">
          <Pin />
          <span>Pinned Post</span>
        </Button>
      </CardContent>

      <div className="space-y-4">
        <Separator />

        <CardContent className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground">
            Quick Stats
          </h3>
          <div className="rounded-2xl bg-muted/70 p-4 text-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Total Posts</span>
              <span className="font-semibold text-primary">1,247</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">This Week</span>
              <span className="font-semibold text-emerald-500">+38</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
