import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="relative flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background">
      <ParticleBackground />
      <Navbar />
      <main className="min-w-0 flex-1 pt-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
