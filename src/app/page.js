import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RecentlyAdded from "../components/RecentlyAdded";
import Footer from "../components/Footer";
import MostReadSection from "@/components/MostRead";

export const dynamic = "force-dynamic"; // For SSR

export default function Home() {
    return (
        <div className="bg-black">
            <Navbar page="Home" />
            <HeroSection />
            <RecentlyAdded />
            <MostReadSection/>
            <Footer />
        <div/>
    );
}
