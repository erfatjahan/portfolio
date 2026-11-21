import { useState } from "react";
import {
  PROFILE,
  PROJECTS,
  STACK_PILLS,
  CAPABILITIES,
  HIGHLIGHTS,
} from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import JourneySection from "./components/JourneySection";
import Footer from "./components/Footer";
import ConnectModal from "./components/ConnectModal";

export default function App() {
  const [showConnectModal, setShowConnectModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 selection:bg-amber-200/20 selection:text-amber-100">
      <Navbar
        monogram={PROFILE.monogram}
        brandName={PROFILE.brandName}
        onOpenConnect={() => setShowConnectModal(true)}
      />
      <main className="mx-auto max-w-6xl px-6">
        <Hero profile={PROFILE} />
        <ProjectsSection projects={PROJECTS} />
        <AboutSection stackPills={STACK_PILLS} />
        <CapabilitiesSection capabilities={CAPABILITIES} />
        <JourneySection highlights={HIGHLIGHTS} />
      </main>

      <Footer
        brandName={PROFILE.brandName}
        githubUrl={PROFILE.githubUrl}
        onOpenConnect={() => setShowConnectModal(true)}
      />

      <ConnectModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        githubUrl={PROFILE.githubUrl}
        location={PROFILE.location}
      />
    </div>
  );
}