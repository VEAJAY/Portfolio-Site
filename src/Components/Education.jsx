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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-6xl px-4">
  
            {/* INDIVIDUAL CARD */}
            <div className="flex flex-row items-center">
              <img
                src="../src/assets/school_logos/tiger-logo.png"
                alt="School Logo"
                className="w-24 h-24 sm:w-36 sm:h-36 p-4 bg-gray-200 dark:bg-slate-300 rounded-2xl object-contain"
              />
              <div className="flex flex-col ml-4 text-white dark:text-gray-900">
                <p className="text-sm text-gray-400 dark:text-gray-600">Certificate:</p>
                <h1 className="font-bold text-xl sm:text-2xl">High School Diploma</h1>
                <p className="text-gray-400 dark:text-gray-600">August 2010 - May 2014</p>
                <p className="text-lg font-thin">Irving High School</p>
              </div>
            </div>
  
            {/* INDIVIDUAL CARD */}
            <div className="flex flex-row items-center">
              <img
                src="../src/assets/school_logos/uhv-logo.png"
                alt="School Logo"
                className="w-24 h-24 sm:w-36 sm:h-36 p-4 bg-gray-200 dark:bg-slate-300 rounded-2xl object-contain"
              />
              <div className="flex flex-col ml-4 text-white dark:text-gray-900">
              <p className="text-sm text-gray-400 dark:text-gray-600">Program:</p>
                <h1 className="font-bold text-xl sm:text-2xl">Game & Digital Simulation</h1>
                <p className="text-gray-400 dark:text-gray-600">May 2014 - February 2017</p>
                <p className="text-lg font-thin">University of Houston - Victoria</p>
              </div>
            </div>
  
            {/* INDIVIDUAL CARD */}
            <div className="flex flex-row items-center">
              <img
                src="../src/assets/school_logos/wgu-logo.png"
                alt="School Logo"
                className="w-24 h-24 sm:w-36 sm:h-36 p-4 bg-gray-200 dark:bg-slate-300 rounded-2xl object-contain"
              />
              <div className="flex flex-col ml-4 text-white dark:text-gray-900">
                <p className="text-sm text-gray-400 dark:text-gray-600">Degree:</p>
                <h1 className="font-bold text-xl sm:text-2xl">Software Engineering</h1>
                <p className="text-gray-400 dark:text-gray-600">April 2023 - September 2024</p>
                <p className="text-lg font-thin">Western Governors University</p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
  }
  
  export default Education;
  