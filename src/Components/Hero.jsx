import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter, FaLaptopCode } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { TbWorldWww } from "react-icons/tb";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white p-4 dark:bg-gray-200">
      {/* NAME */}
      <h1 className="border-gray-400 border-b pb-4 mb-6 text-xl sm:text-md md:text-lg lg:text-xl text-center dark:text-gray-900">
        Hello! 👋 I&apos;m Jayland Veasey!
      </h1>

      {/* MAIN HEADING */}
      <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight sm:leading-none w-full lg:w-[90rem] dark:text-gray-900 cursor-pointer">
        Passionate{" "}
        <span className="text-purple-700 dark:text-blue-700 hover:text-purple-500 dark:hover:text-blue-500 transition-colors duration-500">
          Software Engineer
        </span>{" "}
        with a focus on{" "}
        <span className="text-purple-700 dark:text-blue-700 hover:text-purple-500 dark:hover:text-blue-500 transition-colors duration-500">
          web development
        </span>{" "}
        and{" "}
        <span className="text-purple-700 dark:text-blue-700 hover:text-purple-500 dark:hover:text-blue-500 transition-colors duration-500">
          game design
        </span>
        .
      </h1>

      {/* STATS */}
      <div className="my-14 py-4 px-8 bg-slate-800 dark:bg-slate-300 rounded-2xl font-mono text-sm sm:text-base">
        <p className="text-gray-300 text-center dark:text-gray-900">
          <b>119</b> credits earned | <b>100K</b> lines of code written |{" "}
          <b>200HRS</b> of sleepless nights
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 m-4">
        <a href="https://github.com/VEAJAY" target="_blank">
          <button className="flex items-center justify-center py-3 px-8 bg-purple-700 dark:bg-blue-700 rounded-full font-bold gap-2 hover:saturate-200 duration-300 w-full sm:w-auto">
            GitHub
            <FaGithub className="h-5 w-5" />
          </button>
        </a>

        <a href="#projects">
          <button className="flex items-center justify-center py-3 px-8 border rounded-full font-bold gap-2 hover:bg-white hover:text-gray-900 duration-300 w-full sm:w-auto dark:border-gray-900 dark:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-200">
            Projects
            <FaLaptopCode className="h-5 w-5" />
          </button>
        </a>
      </div>

      {/* CONTACT LINKS */}
      <div className="mt-40 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
        <a
          href="https://www.linkedin.com/in/jayland-veasey-72696715b/"
          className="flex items-center justify-center w-16 h-16 rounded-full text-purple-700 border-2 border-purple-700 hover:text-purple-500 hover:border-purple-500 dark:text-blue-700 dark:border-blue-500 dark:hover:text-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
        >
          <FaLinkedinIn className="h-8 w-8" />
        </a>

        <a
          href="https://x.com/jayland37"
          className="flex items-center justify-center w-16 h-16 rounded-full text-purple-700 border-2 border-purple-700 hover:text-purple-500 hover:border-purple-500 dark:text-blue-700 dark:border-blue-500 dark:hover:text-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
        >
          <FaXTwitter className="h-8 w-8" />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=veaseyjayland3@gmail.com&su=Hello%20Jayland&body=Hey%20there!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full text-purple-700 border-2 border-purple-700 hover:text-purple-500 hover:border-purple-500 dark:text-blue-700 dark:border-blue-500 dark:hover:text-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
        >
          <CgMail className="h-8 w-8" />
        </a>

        <a
          href="https://discord.com/users/veajay5740"
          className="flex items-center justify-center w-16 h-16 rounded-full text-purple-700 border-2 border-purple-700 hover:text-purple-500 hover:border-purple-500 dark:text-blue-700 dark:border-blue-500 dark:hover:text-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
        >
          <FaDiscord className="h-8 w-8" />
        </a>

        <a
          href="https://github.com/VEAJAY"
          className="flex items-center justify-center w-16 h-16 rounded-full text-purple-700 border-2 border-purple-700 hover:text-purple-500 hover:border-purple-500 dark:text-blue-700 dark:border-blue-500 dark:hover:text-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
        >
          <FaGithub className="h-8 w-8" />
        </a>

        <a
          href="https://jaylandveasey.dev"
          className="flex items-center justify-center w-16 h-16 rounded-full text-purple-700 border-2 border-purple-700 hover:text-purple-500 hover:border-purple-500 dark:text-blue-700 dark:border-blue-500 dark:hover:text-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
        >
          <TbWorldWww className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
