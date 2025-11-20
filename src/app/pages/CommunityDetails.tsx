import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CommunitySidebar } from "@/components/pages/community-details/CommunitySidebar";
import { CommunityFeed } from "@/components/pages/community-details/CommunityFeed";
import { CommunityEvents } from "@/components/pages/community-details/CommunityEvents";
import {
  MoveLeft,
  Bell,
  Users,
  MapPin,
  Clock,
  UserPlus,
} from "lucide-react";

const CommunityDetails = () => {
  return (
    <div>
      {/* Header Section */}
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        aria-label="Go back"
      >
        <MoveLeft /> Back
      </Button>

      {/* Banner Section */}
      <Card className="relative w-full h-96 overflow-hidden my-6 border-0">
        {/* <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1200x400/4F46E5/EC4899?text=SF+Pokemon+League" 
            alt="Community Banner" 
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Online Badge */}
        <Badge
          variant="secondary"
          className="absolute top-4 left-4 bg-black/70 text-white hover:bg-black/80"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
          <span>4 online</span>
        </Badge>

        {/* Community Info Card */}
        <Card className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-6 rounded-t-lg border-x-0 border-b-0">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Community Avatar */}
            <Avatar className="w-24 h-24 border-4 border-background shadow-lg -mt-12 bg-background">
              <AvatarImage src="" alt="SF Pokemon League" />
              <AvatarFallback className="text-2xl font-bold text-foreground bg-muted">
                DE
              </AvatarFallback>
            </Avatar>

            {/* Community Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2 flex-wrap">
                <h1 className="text-2xl font-bold">SF Pokemon League</h1>
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800 hover:bg-orange-100"
                  >
                    Competitive
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 hover:bg-green-100"
                  >
                    Public
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                Competitive players meeting weekly for tournaments and friendly
                battles
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users />
                  <span>156 members</span>
                </span>
                <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>46 online</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin />
                  <span>Munich, DE</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock />
                  <span>3 posted today</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0">
              <Button className="gradient-button">
                <UserPlus />
                Join
              </Button>
              <Button variant="outline" size="icon-lg" className="rounded-lg">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </Card>

      <div className="grid grid-cols-12 gap-6">
        <CommunitySidebar />
        <CommunityFeed />
        <CommunityEvents />
      </div>
    </div>
  );
};

export default CommunityDetails;
