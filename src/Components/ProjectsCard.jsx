import { FiLink } from "react-icons/fi";

function ProjectsCard({ title, description, link, image }) {
    return (
        <div className="mx-10">
            {/* Card with Image */}
            <div className="xl:w-[600px] xl:h-[400px] lg:w-[500px] lg:h-[350px] md:w-[400px] md:h-[300px] sm:w-[300px] sm:h-[200px] w-[300px] h-[200px] bg-slate-700 dark:bg-slate-300 rounded-3xl cursor-pointer hover:bg-slate-600 dark:hover:bg-slate-400 duration-200 flex items-center justify-center">
                <img 
                    src={image || "/assets/construction.jpg"} 
                    className="w-[90%] h-[90%] object-cover rounded"
                    style={!image ? { opacity: 0.5 } : {}}
                />
            </div>

            {/* TITLE & ICON */}
            <div className="flex justify-between">
                <h3 className="text-white dark:text-gray-900 font-bold text-2xl mt-2">
                    {title}
                </h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <FiLink className="text-white mt-3 mr-4 dark:text-blue-900 hover:bg-slate-700 dark:hover:bg-slate-300 py-2 rounded-lg" size={33} />
                </a>
            </div>
            
            {/* DESCRIPTION */}
            <div className="overflow-hidden overflow-ellipsis h-[60px]">
                <p className="text-gray-400 dark:text-black text-sm break-words line-clamp-3">
                    {description}
                </p>
            </div>


        </div>
    );
}

export default ProjectsCard;
