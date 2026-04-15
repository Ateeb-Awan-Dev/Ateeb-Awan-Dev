import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="relative flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background">
      <ParticleBackground />
      <Navbar />
      <main className="min-w-0 flex-1 pt-16">
        <AboutSection />
        <ProcessSection className="mt-0" showCta={false} />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
