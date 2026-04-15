import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeAboutPreview from "@/components/HomeAboutPreview";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import ProcessSection from "@/components/ProcessSection";
import HomeTechStackPreview from "@/components/HomeTechStackPreview";
import TechStackSection from "@/components/TechStackSection";
import HomeFeaturedProjects from "@/components/HomeFeaturedProjects";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeContactPreview from "@/components/HomeContactPreview";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background">
      <ParticleBackground />
      <Navbar />
      <main className="min-w-0 flex-1">
        <HeroSection />
        <HomeAboutPreview />
        <HomeServicesPreview />
        <ProcessSection showCta={false} />
        <WhyChooseSection />
        <HomeTechStackPreview />
        <TechStackSection />
        <HomeFeaturedProjects />
        <HomeTestimonials />
        <HomeContactPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
