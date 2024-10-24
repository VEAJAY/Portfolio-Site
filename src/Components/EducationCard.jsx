const EducationCard = ({ logoSrc, classification, degree, dates, school }) => {
  return (
    <div className="flex flex-row items-center">
      <img
        src={logoSrc}
        className="w-24 h-24 sm:w-36 sm:h-36 p-4 bg-gray-200 dark:bg-slate-300 rounded-2xl object-contain"
      />
      <div className="flex flex-col ml-4 text-white dark:text-gray-900">
        <p className="text-sm text-gray-400 dark:text-gray-600">{classification}:</p>
        <h1 className="font-bold text-xl sm:text-2xl">{degree}</h1>
        <p className="text-gray-400 dark:text-gray-600">{dates}</p>
        <p className="text-lg font-thin">{school}</p>
      </div>
    </div>
  );
};

export default EducationCard;
