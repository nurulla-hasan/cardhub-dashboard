import { Outlet } from "react-router"
import Navbar from "@/components/common/Navbar"

const Mainlayout = () => {
    return (
        <div className="min-h-screen bg-background max-w-[1920px] mx-auto">
            <Navbar />
            <main className="px-4 py-6">
                <Outlet />
            </main>
        </div>
    )
}

export default Mainlayout