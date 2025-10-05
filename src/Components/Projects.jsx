import ProjectsCard from "./ProjectsCard";
import Title from "./Title";

function Projects() {
  return (
    <div
      className="min-h-screen bg-slate-800 dark:bg-slate-300 sm:pt-20"
      id="projects"
    >
      <div className="flex justify-center text-center">
        <Title title="Projects" description="Check out some of my work" />
      </div>

      {/* PROJECT TILES */}
      <div className="flex justify-center items-center mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-14">
          <ProjectsCard
            title="Color Quandary"
            description="A group university game project demonstrating our first use of Unreal Engine 4 (unstable build)"
            link="https://drive.google.com/file/d/1MnrnT9MCEVpMf45x6VldGaW62tjiQlJF/view?usp=drive_link"
            image="/assets/CQ.png"
          />
          <ProjectsCard
            title="Yama Chat"
            description="Simple AI chatbot using the Llama3 LLM"
            link="https://github.com/VEAJAY/Yama-Chat"
            image="/assets/yama-chat.png"
          />
          <ProjectsCard
            title="Heroes & Sober Living"
            description="A website developed using React.js and Next.js."
            link="https://github.com/VEAJAY/Heroes-Sober-Living"
            image="/assets/soberliving-hero.png"
          />
          <ProjectsCard
            title="Be Home Project"
            description="A website developed in Next.js for veternas living needs"
            link="https://behomeproject.com/"
            image="/assets/behomeproject.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
