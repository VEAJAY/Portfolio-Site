function About() {
    return (
        <div className="h-[40rem] flex flex-col lg:flex-row justify-center items-center p-4 lg:p-12 dark:bg-gray-200">
            <div className="lg:p-12 text-center lg:text-left">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-black">
                    About <span className="text-purple-700 dark:text-blue-700">Me</span>.
                </h1>
                <p className="text-white w-full lg:w-[40rem] mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl dark:text-black">
                    Hello! My name is Jayland Veasey! I am a 29-year-old Software Engineer from Texas, currently living in the city of Houston. My interest in computer science and technology started with video games when I was only in middle school. From there, I was self-taught all the way up until college, making games and programming my own applications. After my journey at the University of Houston and finally graduating from Western Governors University, I look to take my passions for tech and creating to a professional level as a front-end developer.
                </p>

            </div>
            
            <img
                className="rounded-3xl lg:rounded-full object-cover w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mt-8 lg:mt-0 lg:ml-12"
                src="../src/assets/pixar_headshot.jpeg"
            />
        </div>
    );
}

export default About;
