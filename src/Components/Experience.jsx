import ExperienceCard from './ExperienceCard';
import Title from './Title';

function Experience() {
    return (
        <div className='h-auto' id='experience'>
            <Title 
                title="Experience"
                description="Here are some things I've done"
            />

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12'>
                    <ExperienceCard 
                        title="Student Worker"
                        employer="University of Houston - Victoria"
                        date="October 2014 - February 2017"
                        paragraph="I had the task of working one-on-one with professors to set up events, courses and course material, as well as participating in a student work-study program, tutoring students in subjects such as Data Structures & Algorithms, Foundations in Programming C++ and Applied Algebra."
                        activities={[
                            "Assisted professors in setting up class materials and on-campus events",
                            "Assisted the Dean of Fine Arts in the selection of the monthly ABR (American Book Review)",
                            "Tutored students in Data Structures & Algorithms I, Programming C++, and Applied Algebra"
                        ]}
                        image="/assets/school_logos/uhv-logo.png"
                        link="https://www.uhv.edu/"
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;
