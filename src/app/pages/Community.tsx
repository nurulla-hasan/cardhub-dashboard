import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import GroupSidebar from "@/components/pages/community/GroupSidebar";
import CommunityMain from "@/components/pages/community/CommunityMain";

const Community = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card className="gradient-color">
        <CardContent>
          <div className="flex justify-between sm:items-center">
            <div>
              <h1 className="text-2xl font-bold">Community</h1>
              <p className="text-muted-foreground hidden sm:block">
                Discover and create groups. Connect with collectors who share
                your interests.
              </p>
            </div>
            <Button>
              <Plus />
              Create Group
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main */}
      <section className="grid grid-cols-12 gap-6">
        {/* Your Groups sidebar */}
        <div className="col-span-full md:col-span-4 lg:col-span-3 xl:col-span-2">
          <GroupSidebar />
        </div>

        {/* Main content */}
        <div className="col-span-full md:col-span-8 lg:col-span-9 xl:col-span-10">
          <CommunityMain />
        </div>
      </section>
    </div>
  );
};

export default Community;
