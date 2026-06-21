import Navbar from '@/components/ui/Navbar';
import CustomCursor from '@/components/ui/CustomCursor';
import BackToTop from '@/components/ui/BackToTop';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

/** Divisor sutil entre seções. */
function SectionDivider() {
  return (
    <div
      className="h-px w-full"
      style={{
        background:
          'linear-gradient(to right, transparent, rgba(34,211,238,0.25), transparent)',
      }}
      aria-hidden
    />
  );
}

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ContactSection />
      </main>

      <footer className="bg-[#0a0a0a] border-t border-white/10 py-8 px-4 text-center">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Lucas · Construído com Next.js, Tailwind CSS e Framer Motion
        </p>
      </footer>

      <BackToTop />
    </>
  );
}
