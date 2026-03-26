import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProfileSection from "@/components/portfolio/ProfileSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import WebsitesSection from "@/components/portfolio/WebsitesSection";
import BooksSection from "@/components/portfolio/BooksSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import LeyesTechModal from "@/components/portfolio/LeyesTechModal";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [leyesTechOpen, setLeyesTechOpen] = useState(location.pathname === "/leyes-tech");

  useEffect(() => {
    setLeyesTechOpen(location.pathname === "/leyes-tech");
  }, [location.pathname]);

  const openLeyesTech = () => navigate("/leyes-tech");
  const closeLeyesTech = () => navigate("/");

  return (
    <>
      {/* Background effects */}
      <div className="grid-bg" />
      <div
        className="fixed rounded-full pointer-events-none z-0 animate-float"
        style={{
          width: 400, height: 400, top: -100, right: -100,
          background: "hsl(var(--cyber-cyan))", filter: "blur(80px)", opacity: 0.4,
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0 animate-float-reverse"
        style={{
          width: 300, height: 300, bottom: "20%", left: -100,
          background: "hsl(220, 100%, 50%)", filter: "blur(80px)", opacity: 0.4,
        }}
      />

      <Navbar onOpenLeyesTech={() => setLeyesTechOpen(true)} />
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />
      <SkillsSection />
      <WebsitesSection />
      <BooksSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <LeyesTechModal open={leyesTechOpen} onClose={() => setLeyesTechOpen(false)} />
    </>
  );
};

export default Index;
