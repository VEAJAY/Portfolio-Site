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
        <div className="text-white hover:border border-purple-700 rounded-3xl w-[40rem] h-auto p-8">
            <div className='flex justify-between'>
                <div>
                    <h1 className="font-bold text-3xl">
                        {title}
                    </h1>
                    <h2 className="text-gray-300">
                        {employer}
                    </h2>
                    <p className="text-gray-600">
                        {date}
                    </p>
                </div>
                <a href={link} target='_blank'>
                    <img src={image} className="w-24 h-24 sm:w-36 sm:h-36 p-4 bg-gray-200 dark:bg-slate-300 rounded-2xl object-contain" />
                </a>
                
            </div>
            
            
            <p className="mt-8">
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
                        <h1 className="mt-8 mb-2 font-bold"> Tasks & Responsibilities</h1>
                        <ul className="list-disc pl-5">
                            {activities.map((activity, index) => (
                                <li key={index} className="text-gray-300">
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>



            <button
                onClick={toggleShowMore}
                className="font-bold text-white mt-8 py-3 px-5 border border-purple-700 hover:bg-purple-700 rounded-full duration-300"
            >
                {showMore ? "Show less" : "Show more"}
            </button>
        </div>
    );
}

export default ExperienceCard;
