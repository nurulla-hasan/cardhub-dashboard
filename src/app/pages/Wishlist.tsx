import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Heart, Layers, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WishlistSummary from "@/components/pages/wishlist/WishlistSummary";
import WishlistResults from "@/components/pages/wishlist/WishlistResults";

const Wishlist = () => {
  const location = useLocation();

  return (
    <div>
      {/* Header */}
      <Card className="gradient-color">
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="space-y-2 md:space-y-0">
              <h1 className="text-2xl font-bold">Marketplace</h1>
              <p className="text-muted-foreground hidden sm:block">
                Buy and sell cards on the marketplace.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <Link to="/marketplace">
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex items-center gap-2 px-5 py-2 text-sm font-medium ${
                    location.pathname === "/marketplace"
                      ? "gradient-button text-white"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  <Store />
                  Marketplace
                </Button>
              </Link>
              <Link to="/wishlist">
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex items-center gap-2 px-5 py-2 text-sm font-medium ${
                    location.pathname === "/wishlist"
                      ? "gradient-button text-white"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  <Heart />
                  Wishlist{" "}
                  <Badge variant="outline" className="border-none">
                    3
                  </Badge>
                </Button>
              </Link>
              <Link to="/deck">
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex items-center gap-2 px-5 py-2 text-sm font-medium ${
                    location.pathname === "/deck"
                      ? "gradient-button text-white"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  <Layers />
                  Deck Needs{" "}
                  <Badge variant="outline" className="border-none">
                    4
                  </Badge>
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wishlist Content */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-7">
        {/* Filters sidebar */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent>
              <WishlistSummary />
            </CardContent>
          </Card>
        </div>

        {/* Results column */}
        <div className="lg:col-span-5 space-y-5">
          <WishlistResults />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
