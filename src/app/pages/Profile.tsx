import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet } from "lucide-react";

import ProfileSidebar from "@/components/pages/profile/ProfileSidebar";
import ProfilePortfolioSummary from "@/components/pages/profile/ProfilePortfolioSummary";
import ProfileRecentActivity from "@/components/pages/profile/ProfileRecentActivity";
import ProfileAchievementsVisibility from "@/components/pages/profile/ProfileAchievementsVisibility";

const Profile = () => {
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
        <ProfileSidebar />

        {/* Right content */}
        <div className="lg:col-span-9 space-y-5">
          {/* Tabs bar */}
          <div>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 rounded-full">
                <TabsTrigger value="overview" className="rounded-full">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="listings" className="rounded-full">
                  Listings
                </TabsTrigger>
                <TabsTrigger value="settings" className="rounded-full">
                  Settings
                </TabsTrigger>
                <TabsTrigger value="wallet" className="rounded-full">
                  <Wallet className="w-4 h-4" />
                  <span className="hidden sm:inline">Wallet</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-4 space-y-5">
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-5">
                  <ProfilePortfolioSummary />
                  <ProfileRecentActivity />
                  <ProfileAchievementsVisibility />
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