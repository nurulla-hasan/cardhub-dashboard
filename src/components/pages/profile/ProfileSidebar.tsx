import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, CreditCard, Settings, ShoppingBag } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="lg:col-span-3">
      <Card>
        <CardContent className="pt-6 pb-6 space-y-6">
          {/* Profile info */}
          <div className="flex flex-col items-center text-center space-y-3">
            <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
              <AvatarImage src="https://i.pravatar.cc/160?img=47" alt="Username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span className="text-lg font-semibold">Username</span>
                <BadgeCheck className="w-4 h-4 text-sky-400" />
              </div>
              <p className="text-xs text-muted-foreground">Munich, DE</p>
              <p className="text-xs text-muted-foreground">
                Collector since <span className="font-medium">2023</span>
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full justify-center gap-2 rounded-xl border-border"
          >
            <Settings className="w-4 h-4" /> Edit Profile
          </Button>

          <div className="mt-2 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600/80">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total Cards</p>
                  <p className="text-sm font-semibold text-fuchsia-300">247</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/80">
                  <ShoppingBag className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trades</p>
                  <p className="text-sm font-semibold text-emerald-400">89</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/80">
                  <Badge className="px-1 text-[10px] border-none bg-transparent text-white">
                    B
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Badges</p>
                  <p className="text-sm font-semibold text-amber-300">12</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSidebar;
