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
                <div className='grid grid-cols-2 gap-12'>


                    <ExperienceCard 
                        title="Student Worker"
                        employer="University of Houston - Victoria"
                        date="October 2014 - Februrary 2017"
                        paragraph="I had the task of working one-on-one with professors to set up events, courses and course material, as well as participating in a student work-study program, tutoring students in subjects such as Data Structures & Algorithms, Foundations in Programming C++ and Applied Algebra."
                        activities={[
                            "Tutored students in programming",
                            "Assisted in setting up events",
                            "Collaborated on course material",
                        ]}
                        image="../src/assets/school_logos/uhv-logo.png"
                        link="https://www.uhv.edu/"
                    />
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Experience;
