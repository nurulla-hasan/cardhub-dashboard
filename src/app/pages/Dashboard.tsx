import { Layers3, ScanLine, Download, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotificationsPanel from "@/components/pages/dashboard/NotificationsPanel";
import ChartPlaceholder from "@/components/pages/dashboard/ChartPlaceholder";
import SmallKpi from "@/components/pages/dashboard/SmallKpi";
import Action from "@/components/pages/dashboard/Action";
import { Stat } from "@/components/pages/dashboard/Stat";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="text-2xl font-semibold">Welcome back, Username 👋</div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Stat title="My collection" value="36" />
            <Stat title="Price Trend 30 Days" value="256,00 €" sub="190,00 €" />
            <Stat title="Top Cards" value="360,00 €" sub="64,00 €" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-1 space-y-4">
              <Action icon={ScanLine} label="Scan card" />
              <Action icon={Download} label="Import collection" />
              <Action icon={Store} label="Open Marketplace" />
            </div>

            <div className="md:col-span-4">
              <Card className="gradient-color">
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">Main Area</div>
                    <Tabs defaultValue="total" className="h-9 rounded-full">
                      <TabsList className="rounded-full bg-background/50">
                        <TabsTrigger value="total" className="rounded-full text-xs">
                          Total collection value
                        </TabsTrigger>
                        <TabsTrigger value="activity" className="rounded-full text-xs">
                          Recent activity feed
                        </TabsTrigger>
                        <TabsTrigger value="highlights" className="rounded-full text-xs">
                          Nearby highlights
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <Separator />
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <Layers3 />
                      </span>
                      <div className="text-3xl font-semibold tracking-tight">
                        2.165,50 €
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Total collection value
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <SmallKpi
                        title="Private Collection"
                        value="14.500,00 €"
                        sub="79% of total"
                      />
                      <SmallKpi
                        title="Listed for Sale"
                        value="3.950,00 €"
                        sub="Two Cards"
                      />
                    </div>

                    <div className="mt-6">
                      <div className="text-[11px] text-muted-foreground mb-2">
                        Price History (30 Days)
                      </div>
                      <ChartPlaceholder />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <NotificationsPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
