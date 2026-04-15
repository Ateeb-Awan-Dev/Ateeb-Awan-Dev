import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="relative flex min-h-screen min-w-0 flex-col overflow-x-clip bg-background">
      <ParticleBackground />
      <Navbar />
      <main className="min-w-0 flex-1 pt-16">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
