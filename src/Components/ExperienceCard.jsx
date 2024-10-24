import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceCard = ({ title, employer, date, paragraph, activities, image, link }) => {
    // State to toggle showing/hiding activities
    const [showMore, setShowMore] = useState(false);

    // Function to toggle showMore state
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="text-white dark:text-black w-full sm:w-96 md:w-[32rem] lg:w-[40rem] h-auto p-6 sm:p-8">
            <div className='flex flex-col sm:flex-row justify-between'>
                <div>
                    <h1 className="font-bold text-2xl sm:text-3xl">
                        {title}
                    </h1>
                    <h2 className="text-gray-200 dark:text-gray-900 text-base sm:text-lg">
                        {employer}
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        {date}
                    </p>
                </div>
                <a href={link} target='_blank' className="mt-4 sm:mt-0">
                    <img src={image} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2 sm:p-4 bg-gray-200 dark:bg-slate-300 rounded-2xl object-contain" alt={`${employer} logo`} />
                </a>
            </div>
            
            <p className="mt-4 sm:mt-8 text-sm sm:text-base">
                {paragraph}
            </p>

            <AnimatePresence>
                {showMore && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        style={{ overflow: 'hidden' }}
                    >   
                        <h1 className="mt-4 sm:mt-8 mb-2 font-bold text-base sm:text-lg">Tasks & Responsibilities</h1>
                        <ul className="list-disc pl-5">
                            {activities.map((activity, index) => (
                                <li key={index} className="text-gray-300 dark:text-black text-sm sm:text-base">
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleShowMore}
                className="font-bold text-white dark:text-blue-700 mt-4 sm:mt-8 py-2 px-4 sm:py-3 sm:px-5 border border-purple-700 dark:border-blue-700 hover:bg-purple-700 dark:hover:bg-blue-700 dark:hover:text-white rounded-full duration-300 text-sm sm:text-base"
            >
                {showMore ? "Show less" : "Show more"}
            </button>
        </div>
    );
}

export default ExperienceCard;
