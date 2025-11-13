import { Outlet } from "react-router";
import Navbar from "@/components/common/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

const Mainlayout = () => {
  return (
    <div className="min-h-screen bg-background max-w-[1920px] mx-auto">
      <Navbar />
      <ScrollArea className="custom-height">
        <div className="p-6">
          <Outlet />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Mainlayout;
