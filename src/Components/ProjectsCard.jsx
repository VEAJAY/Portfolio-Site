import { FiLink } from "react-icons/fi";

function ProjectsCard({ title, description, link }) {
    return (
        <div>
            <div className="xl:w-[600px] xl:h-[400px] lg:w-[500px] lg:h-[350px] md:w-[400px] md:h-[300px] sm:w-[300px] sm:h-[200px] w-[300px] h-[200px] bg-slate-700 dark:bg-slate-400 rounded-3xl">
                {/* Image will go here */}
            </div>

            {/* TITLE & ICON */}
            <div className="flex justify-between">
                <h3 className="text-white dark:text-gray-900 font-bold text-2xl mt-2">
                    { title }
                </h3>
                <a href={ link } target="_blank" rel="">
                    <FiLink className="text-white mt-3 mr-4 dark:text-blue-900 hover:bg-slate-700 dark:hover:bg-slate-300 py-2 rounded-lg" size={33} />
                </a>
            </div>
            
            {/* DESCRIPTION */}
            <p className="text-gray-400 dark:text-black text-lg">
                { description }
            </p>
        </div>
        
    );
}
export default ProjectsCard;