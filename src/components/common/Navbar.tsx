import {
  Menu,
  Package2,
  Moon,
  Sun,
  Bell,
  Wallet,
} from "lucide-react";
import { useLocation, Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/theme/theme-provider";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Inventory",
    href: "/inventory",
  },
  {
    name: "Import",
    href: "/import",
  },
  {
    name: "Marketplace",
    href: "/marketplace",
  },
  {
    name: "Geo",
    href: "/geo",
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Deck",
    href: "/deck",
  },
  {
    name: "Wishlist",
    href: "/wishlist",
  },
  {
    name: "Trade matching",
    href: "/trade-matching",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isLinkActive = (href: string) => {
    if (href === "/dashboard") {
      return location.pathname === "/" || location.pathname === href;
    }

    return (
      location.pathname === href ||
      (href !== "/" && location.pathname.startsWith(`${href}/`))
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background px-4 md:px-6">
      <div className="h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link to="#" className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground">
              <Package2 />
            </span>
            <span className="hidden text-base font-semibold text-primary xl:inline">
              CardHub.gg
            </span>
          </Link>
        </div>

        {/* Middle: Links */}
        <nav className="hidden items-center justify-center gap-8 text-sm font-medium xl:flex">
          {links.map((l) => {
            const active = isLinkActive(l.href);

            return (
              <Link
                key={l.href}
                to={l.href}
                className={`relative text-muted-foreground transition-colors hover:text-foreground ${
                  active ? "text-purple-950 dark:text-white font-semibold" : ""
                }`}
              >
                {active && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2">
                    <span className="block h-2 w-2 rounded-full bg-primary" />
                  </span>
                )}
                {l.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        {/* Desktop right controls */}
        <div className="flex items-center justify-end gap-4">
          <div className="hidden items-center gap-6 xl:flex">
            <div className="relative">
              <Bell />
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                5
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary"
              >
                <Wallet className="text-primary" />
              </Button>
              <span className="text-lg font-semibold tracking-tight">
                0,00 €
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="size-9 border-2 border-primary/60 shadow-sm">
                <AvatarImage
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Username"
                />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-semibold">Username</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 rounded-full border-primary/20 hover:border-primary">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-background/95 backdrop-blur-sm border-r border-border/50">
              <nav className="flex flex-col gap-8 mt-6 ml-4">
                <Link
                  to="#"
                  className="flex items-center gap-4 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Package2 className="h-6 w-6" />
                  </span>
                  <span className="tracking-tight">CardHub.gg</span>
                </Link>
                <div className="flex flex-col gap-4 p-4">
                  {links.map((l) => {
                    const active = isLinkActive(l.href);

                    return (
                      <Link
                        key={l.href}
                        to={l.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-accent/50 ${
                          active
                            ? "font-semibold text-black dark:text-white bg-primary/10 border-l-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <span className="inline-flex h-2 w-2 rounded-full bg-primary shrink-0" />
                        )}
                        <span className="text-base">{l.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
