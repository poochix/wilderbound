import Hero from "@/components/section/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import FeaturedExperiences from "@/components/section/FeaturedExperiences";
import Popular from "@/components/section/Popular";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <FeaturedExperiences/>
   <Popular/>
   <Footer/>
   </>
  );
}
