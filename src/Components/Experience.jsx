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
                            "Assisted professors in setting up class materials and on-campus events.",
                            "Assisted the Dean of Fine Arts in the selection of the monthly ABR (American Book Review).",
                            "Tutored students in Data Structures & Algorithms I, Programming C++, and Applied Algebra."
                        ]}
                        image="/assets/school_logos/uhv-logo.png"
                        link="https://www.uhv.edu/"
                    />

                    <ExperienceCard 
                        title="Individual Contributor - QA"
                        employer="Lowe's Tech"
                        date="April 2023 - September 2024"
                        paragraph="I took the opportunity to work with some of Lowe's talented engineers to test some of the company's new, redefining software as we transitioned away from 20 year old tools that better serve customers and their home improvement needs."
                        activities={[
                            "Provided timely feedback to developers on identified issues, facilitating the rapid resolution of bugs and ensuring adherence to launch deadlines",
                            "Developed and enhanced web-based applications using modern frameworks like Angular and React JS, contributing to improved functionality and user experience.",
                            "Implemented and maintained AWS infrastructure, utilizing services such as Route 53 and RDS to support database applications hosted on EC2 Instances.",
                            "Conducted API testing and server management using tools like Postman and PuTTY, ensuring seamless database application performance and reliability.",
                            "Performed unit testing in Python to validate code integrity, optimize performance, and minimize potential defects before deployment."
                        ]}
                        image="/assets/school_logos/lowes-tech.png"
                        link="https://talent.lowes.com/us/en/tech"
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;
