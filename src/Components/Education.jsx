import EducationCard from './EducationCard';

function Education() {
    return (
      <div className="min-h-screen dark:bg-gray-200">
  
        {/* TITLE */}
        <div className="flex flex-col mx-4 pt-24 sm:mx-8 md:mx-24 lg:mx-44">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-gray-900">
            Education<span className="text-purple-700 dark:text-blue-600">.</span>
          </h1>
          <h2 className="text-gray-400 mb-10 mt-3 text-lg sm:text-xl lg:text-2xl dark:text-gray-900">
            My educational journey
          </h2>
        </div>
  
        {/* EDUCATION CARDS */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 justify-center max-w-6xl px-4">
  
            <EducationCard
              logoSrc="../src/assets/school_logos/tiger-logo.png"
              classification="Certificate"
              degree="Highschool Diploma"
              dates="August 2010 - May 2014"
              school="Irving High School"
            />
  
            <EducationCard
              logoSrc="../src/assets/school_logos/uhv-logo.png"
              classification="Program"
              degree="Game & Digital Simulation"
              dates="August 2014 - Februrary 2017"
              school="University of Houston - Victoria"
            />
  
            <EducationCard
              logoSrc="../src/assets/school_logos/wgu-logo.png"
              classification="Degree"
              degree="B.S. Software Engineering"
              dates="April 2023 - September 2024"
              school="Western Governors University"
            />

            <EducationCard
              logoSrc="../src/assets/school_logos/awscloud-logo.png"
              classification="Certificate"
              degree="AWS Cloud Practitioner"
              dates="November 2023 - November 2026"
              school="Amazon Web Services"
            />

            <EducationCard
              logoSrc="../src/assets/school_logos/itil-logo.png"
              classification="Certificate"
              degree="ITIL Foundation Certificate"
              dates="March 2024 - March 2027"
              school="PeopleCert"
            />

            <EducationCard
              logoSrc="../src/assets/school_logos/project-logo.webp"
              classification="Certificate"
              degree="Project+"
              dates="December 2023"
              school="CompTIA"
            />
  
          </div>
        </div>
      </div>
    )
  }
  
  export default Education;
  