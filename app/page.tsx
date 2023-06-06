import PersonalSection from "@/components/PersonalSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import DisplayMessageMan from "@/components/DisplayMessageMan";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5lx">
      <PersonalSection />
      <AboutSection />
      <ProjectsSection />
      <DisplayMessageMan />
    </main>
  )
}
