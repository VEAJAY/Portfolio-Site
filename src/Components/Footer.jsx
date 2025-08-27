function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="h-auto md:h-28 flex flex-col md:flex-row bg-gray-950 dark:bg-slate-300 justify-between items-center p-8 mt-10">
            <a href="#">
                <h1 className="font-bold text-xl sm:text-2xl text-gray-200 dark:text-black mb-4 md:mb-0">
                    Jayland <span className="text-purple-700 dark:text-blue-700">Veasey</span>.
                </h1>
            </a>
            <p className="text-gray-400 text-sm hidden md:block">
                Copyright © {currentYear}. All rights reserved.
            </p>
            <ul className="flex font-bold flex-col md:flex-row text-lg items-center text-gray-200 dark:text-black space-y-2 md:space-y-0 md:space-x-4">
                <a href="#about"><li className="hover:text-purple-600 dark:hover:text-blue-700 duration-200">About</li></a>
                <a href="#skills"><li className="hover:text-purple-600 dark:hover:text-blue-700 duration-200">Skills</li></a>
                <a href="#experience"><li className="hover:text-purple-600 dark:hover:text-blue-700 duration-200">Experience</li></a>
                <a href="#projects"><li className="hover:text-purple-600 dark:hover:text-blue-700 duration-200">Projects</li></a>
                <a href="#education"><li className="hover:text-purple-600 dark:hover:text-blue-700 duration-200">Education</li></a>
                <a href="#contact"><li className="hover:text-purple-600 dark:hover:text-blue-700 duration-200">Contact</li></a>
            </ul>
        </div>
    );
}

export default Footer;
