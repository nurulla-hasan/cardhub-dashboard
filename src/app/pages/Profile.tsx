import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

import {
  BadgeCheck,
  CreditCard,
  TrendingUp,
  Wallet,
  Settings,
  ShoppingBag,
  Repeat2,
  Star,
  Eye,
} from "lucide-react";

const Profile = () => {
  const activities = [
    {
      title: "Purchased Charizard VMAX",
      time: "2 hours ago",
      amount: "245,00 €",
      type: "negative",
      icon: ShoppingBag,
    },
    {
      title: "Sold Umbreon VMAX",
      time: "1 day ago",
      amount: "485,00 €",
      type: "positive",
      icon: ShoppingBag,
    },
    {
      title: "Completed trade with @PokeMaster",
      time: "3 days ago",
      amount: "",
      type: "neutral",
      icon: Repeat2,
    },
    {
      title: "Earned \"Speed Trader\" badge",
      time: "5 days ago",
      amount: "",
      type: "neutral",
      icon: Star,
    },
  ];

  return (
    <div>
      {/* Header */}
      <Card className="gradient-color">
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-muted-foreground hidden sm:block">
                View your collector profile, portfolio and recent activity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page Content */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left sidebar - profile summary */}
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

        {/* Right content */}
        <div className="lg:col-span-9 space-y-5">
          {/* Tabs bar */}
          <div>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 rounded-full">
                <TabsTrigger
                  value="overview"
                  className="rounded-full"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="listings"
                  className="rounded-full"
                >
                  Listings
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="rounded-full"
                >
                  Settings
                </TabsTrigger>
                <TabsTrigger
                  value="wallet"
                  className="rounded-full"
                >
                  <Wallet className="w-4 h-4" />
                  <span className="hidden sm:inline">Wallet</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-4 space-y-5">
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-5">
                  {/* Portfolio summary */}
                  <Card className="bg-card border-border">
                    <CardContent className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold">Portfolio Summary</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Your collection's total value
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-emerald-400">
                          <TrendingUp className="w-3 h-3" />
                          <span>+18.4% (30d)</span>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl bg-primary/10 px-5 py-4 space-y-1">
                          <p className="text-xs text-muted-foreground">Total Value</p>
                          <p className="text-xl font-semibold text-sky-400">12.450 €</p>
                        </div>
                        <div className="rounded-2xl bg-primary/10 px-5 py-4 space-y-1">
                          <p className="text-xs text-muted-foreground">Member Since</p>
                          <p className="text-sm font-semibold text-sky-400">
                            January 2023
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardContent className="space-y-4">
                      <p className="text-sm font-medium">Recent Activity</p>
                      <div className="text-sm space-y-6">
                        {activities.map((item, index) => {
                          const Icon = item.icon;

                          const amountClass =
                            item.type === "positive"
                              ? "text-emerald-400"
                              : item.type === "negative"
                              ? "text-red-400"
                              : "text-muted-foreground";

                          const iconBgClass = [
                            "bg-sky-500/80",
                            "bg-emerald-500/80",
                            "bg-purple-500/80",
                            "bg-amber-500/80",
                          ][index] || "bg-primary/70";

                          return (
                            <div
                              key={item.title}
                              className={`flex items-center justify-between py-3 ${
                                index !== activities.length - 1
                                  ? "border-b"
                                  : ""
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBgClass}`}
                                >
                                  <Icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium leading-tight">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {item.time}
                                  </p>
                                </div>
                              </div>

                              {item.amount && (
                                <span className={`text-xs font-semibold ${amountClass}`}>
                                  {item.type === "positive" ? "↗" : "↘"} {item.amount}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

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
                        {["🤝", "👑", "⚡", "🌟", "🔍", "💎", "💎"].map(
                          (emoji, index) => {
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
                          }
                        )}
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
                          <p className="text-xs text-muted-foreground">
                            Your profile is public
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Other tabs simple placeholders */}
                <TabsContent value="listings">
                  <Card className="bg-card border-border">
                    <CardContent className="py-10 text-center text-sm text-muted-foreground">
                      Your marketplace listings will appear here.
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings">
                  <Card className="bg-card border-border">
                    <CardContent className="py-10 text-center text-sm text-muted-foreground">
                      Profile settings will be available soon.
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="wallet">
                  <Card className="bg-card border-border">
                    <CardContent className="py-10 text-center text-sm text-muted-foreground">
                      Connect your wallet to see balance and transactions.
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;