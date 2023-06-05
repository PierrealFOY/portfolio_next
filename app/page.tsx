import PersonalSection from "@/components/PersonalSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5lx">
      <PersonalSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
