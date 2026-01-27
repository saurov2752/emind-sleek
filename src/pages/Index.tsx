import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* <HeroSection /> */}
        <ProjectsSection />
        {/* <ServicesSection />
        <AboutSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
