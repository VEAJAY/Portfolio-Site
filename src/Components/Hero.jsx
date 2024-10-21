import { FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

function Hero() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center text-white p-4">
            {/* NAME */}
            <h1 className="border-gray-400 border-b pb-4 mb-6 text-xl sm:text-md md:text-lg lg:text-xl text-center">
                Hello! 👋 I&apos;m Jayland Veasey!
            </h1>

            {/* MAIN HEADING */}
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight sm:leading-none w-full lg:w-[90rem]">
                Passionate <span className="text-purple-700">Software Engineer</span> with a focus on <span className="text-purple-700">web development</span> and <span className="text-purple-700">game design</span>.
            </h1>

            {/* STATS */}
            <div className="my-6 p-4 bg-slate-800 rounded-2xl font-mono text-sm sm:text-base">
                <p className="text-gray-300 text-center">
                    <b>119</b> credits earned | <b>100K</b> lines of code written | <b>200HRS</b> of sleepless nights
                </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 m-4">
                <a href="https://github.com/VEAJAY" target="_blank">
                    <button className="flex items-center justify-center py-3 px-8 bg-purple-700 rounded-full font-bold gap-2 hover:saturate-200 duration-300 w-full sm:w-auto">
                        GitHub
                        <FaGithub className="h-5 w-5" />
                    </button>
                </a>

                <button className="flex items-center justify-center py-3 px-8 border rounded-full font-bold gap-2 hover:bg-white hover:text-gray-900 duration-300 w-full sm:w-auto">
                    Contact
                    <FiSend className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}

export default Hero;
