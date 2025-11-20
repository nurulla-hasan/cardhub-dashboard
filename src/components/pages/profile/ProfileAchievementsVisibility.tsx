import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ProfileAchievementsVisibility = () => {
  return (
    <>
      {/* Achievements */}
      <Card>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Achievements</p>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-xs text-muted-foreground">
                4/6
              </span>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1">
            {["🤝", "👑", "⚡", "🌟", "🔍", "💎", "💎"].map((emoji, index) => {
              const unlocked = index < 4;
              return (
                <div
                  key={index}
                  className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border transition-colors ${
                    unlocked
                      ? "bg-primary/30 border-purple-300/40"
                      : "bg-muted border-border opacity-60"
                  }`}
                >
                  <span className="text-2xl">{emoji}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Profile visibility */}
      <Card>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
              <Eye className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Profile Visibility</p>
              <p className="text-xs text-muted-foreground">Your profile is public</p>
            </div>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileAchievementsVisibility;
