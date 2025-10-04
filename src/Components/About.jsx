function About() {
  return (
    <div
      className="min-h-[80vh] mt-20 flex flex-col justify-center space-y-36 items-center p-10 sm:p-12 dark:bg-gray-200 bg-[rgba(56,0,84,0.43)] dark:bg-[rgba(206,206,206,0.43)]"
      id="about"
    >
      {/* TITLE */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-gray-900 text-center">
        About <span className="text-purple-700 dark:text-blue-700">Me</span>.
      </h1>

      <img
        className="rounded-3xl lg:rounded-full object-cover w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 shadow-[10px_10px_0px_rgba(123,31,162,1)] dark:shadow-[10px_10px_0px_rgba(25,118,210,1)] mb-6"
        src="/assets/pixar_headshot.jpeg"
        alt="Jayland Headshot"
      />

      <p className="text-white w-full max-w-5xl text-base sm:text-lg lg:text-xl text-center dark:text-gray-900">
        {/* SUBTITLE */}
        <h2 className="text-white mt-3 mb-6 text-xl font-bold sm:text-4xl dark:text-gray-900 text-center">
          Let Me Introduce Myself!
        </h2>
        Hello! My name is Jayland Veasey! I am a 29-year-old Software Engineer
        from Texas, currently living in the city of Houston. My interest in
        computer science and technology started with video games when I was only
        in middle school. From there, I was self-taught all the way up until
        college, making games and programming my own applications. After my
        journey at the University of Houston and finally graduating from Western
        Governors University, I look to take my passions for tech and creating
        to a professional level as a front-end developer.
      </p>
    </div>
  );
}

export default About;
