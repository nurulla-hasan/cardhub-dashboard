import { Outlet } from "react-router"
import Navbar from "@/components/common/Navbar"
import { ScrollArea } from "@/components/ui/scroll-area"

const Mainlayout = () => {
    return (
        <div className="min-h-screen bg-background max-w-[1920px] mx-auto">
            <Navbar />
            <ScrollArea className="p-6 custom-height">
                <Outlet />
            </ScrollArea>
        </div>
    )
}

export default Mainlayout