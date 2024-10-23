import ProjectsCard from "./ProjectsCard";

function Projects() {
    return (
        <div className="min-h-screen dark:bg-gray-200">

            {/* TITLES */}
            <div className="flex flex-col mx-4 pt-24 sm:mx-8 md:mx-24 lg:mx-44">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-gray-900">
                    Projects<span className="text-purple-700 dark:text-blue-600">.</span>
                </h1>
                <h2 className="text-gray-400 mb-10 mt-3 text-lg sm:text-xl lg:text-2xl dark:text-gray-900">
                    Check out some of my work
                </h2>
            </div>

            {/* PROJECT TILES */}
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-14">
                    <ProjectsCard 
                        title="Project Number One"
                        description="This is a test for project one"
                        link="#"
                    />
                    <ProjectsCard 
                        title="Project Number Two"
                        description="This is a test for project two"
                        link="#"
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
