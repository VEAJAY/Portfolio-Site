import EducationCard from './EducationCard';
import Title from './Title';

function Education() {
    return (
      <div className="h-auto dark:bg-gray-200" id='education'>

        <Title 
          title="Education"
          description="My educational journey"
        />
  
        {/* EDUCATION CARDS */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 justify-center max-w-6xl px-4">
  
            <EducationCard
              logoSrc="/assets/school_logos/tiger-logo.png"
              classification="Certificate"
              degree="Highschool Diploma"
              dates="August 2010 - May 2014"
              school="Irving High School"
            />
  
            <EducationCard
              logoSrc="/assets/school_logos/uhv-logo.png"
              classification="Program"
              degree="Game & Digital Simulation"
              dates="August 2014 - Februrary 2017"
              school="University of Houston - Victoria"
            />
  
            <EducationCard
              logoSrc="/assets/school_logos/wgu-logo.png"
              classification="Degree"
              degree="B.S. Software Engineering"
              dates="April 2023 - September 2024"
              school="Western Governors University"
            />

            <EducationCard
              logoSrc="/assets/school_logos/awscloud-logo.png"
              classification="Certificate"
              degree="AWS Cloud Practitioner"
              dates="November 2023 - November 2026"
              school="Amazon Web Services"
            />

            <EducationCard
              logoSrc="/assets/school_logos/itil-logo.png"
              classification="Certificate"
              degree="ITIL Foundation Certificate"
              dates="March 2024 - March 2027"
              school="PeopleCert"
            />

            <EducationCard
              logoSrc="/assets/school_logos/project-logo.webp"
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
  