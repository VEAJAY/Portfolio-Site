import ProjectsCard from "./ProjectsCard";
import Title from './Title';

function Projects() {
    return (
        <div className="min-h-screen dark:bg-gray-200" id="projects">

            <Title
                title="Projects"
                description="Check out some of my work"
            />

            {/* PROJECT TILES */}
            <div className="flex justify-center items-center">
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
                        title="Project Number Three"
                        description="This is a test for project three"
                        link="#"
                    />
                    <ProjectsCard 
                        title="Project Number Four"
                        description="This is a test for project four"
                        link="#"
                    />
                </div>
            </div>

        </div>
    );
}

export default Projects;
