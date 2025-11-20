import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Pin,
  Send,
  Share2,
} from "lucide-react";

export const CommunityFeed = () => {
  return (
    <Card className="col-span-full md:col-span-7 border border-border bg-card">
      <CardContent className="space-y-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Pin className="w-4 h-4" />
          <span className="font-medium">Pinned Post</span>
        </div>

        <div className="rounded-2xl bg-muted/70 px-5 py-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                    alt="Alex Chen"
                  />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">Alex Chen</span>
                  <span className="text-xs text-emerald-300 flex items-center gap-1">
                    <span>Admin</span>
                  </span>
                  <span className="text-xs text-muted-foreground">
                    • 2 hours ago
                  </span>
                </div>
              </div>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm leading-relaxed text-foreground">
            Tournament this Saturday at 2 PM! Bring your best decks. Entry fee
            is 10,00 €, winner takes home a Charizard VMAX!
          </p>

          <div className="overflow-hidden">
            <img
              src="/images/poc.png"
              alt="Tournament banner"
              className="md:w-[40%] rounded-2xl h-64 object-cover"
            />
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <button className="flex items-center gap-1 hover:text-foreground">
              <Heart className="w-4 h-4" />
              <span>24</span>
            </button>
            <button className="flex items-center gap-1 hover:text-foreground">
              <MessageCircle className="w-4 h-4" />
              <span>8</span>
            </button>
            <button className="flex items-center gap-1 hover:text-foreground">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          {[1, 2].map((idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-muted/40 px-5 py-4 space-y-3 border border-border/60"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
                        alt="Sarah Johnson"
                      />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold">Sarah Johnson</span>
                      <span className="text-xs text-emerald-300">Moderator</span>
                      <span className="text-xs text-muted-foreground">
                        • 5 hours ago
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm leading-relaxed text-foreground">
                Looking to trade some Evolving Skies cards. Anyone interested? I
                have extras of Rayquaza VMAX and Umbreon VMAX.
              </p>

              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-foreground">
                  <Heart className="w-4 h-4" />
                  <span>24</span>
                </button>
                <button className="flex items-center gap-1 hover:text-foreground">
                  <MessageCircle className="w-4 h-4" />
                  <span>8</span>
                </button>
                <button className="flex items-center gap-1 hover:text-foreground">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-muted px-4 py-3 text-sm">
          <button className="flex items-center justify-center w-7 h-7 rounded-full border border-dashed border-muted-foreground/40 text-muted-foreground">
            +
          </button>
          <div className="flex-1">
            <Input
              className="h-9 border-none bg-transparent text-xs placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Write a message to the community..."
            />
          </div>
          <Button className="h-8 px-4 rounded-full gradient-button text-xs font-medium">
            <Send className="w-3 h-3 mr-1" />
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
