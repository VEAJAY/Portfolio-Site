import { FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

function Hero() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center text-white">
            {/* NAME */}
            <h1 className="border-gray-400 border-b pb-4 px-12 mb-12">
                Hello! 👋 I&apos;m Jayland Veasey!
            </h1>


            {/* MAIN HEADING */}
            <h1 className="font-bold text-7xl w-[96rem] text-center leading-none">
                Passionate <span className="text-purple-700">Software Engineer</span> with a focus on <span className="text-purple-700">web development</span> and <span className="text-purple-700">game design</span>.
            </h1>


            {/* STATS */}
            <div className='my-6 p-4 bg-slate-800 rounded-2xl font-mono'>
                <p>
                    <b>119</b> credits earned | <b>100K</b> lines of code written | <b>200HRS</b> of sleepless nights
                </p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-8 m-8">

                <a href="https://github.com/VEAJAY" target='_blank'>
                    <button className="flex items-center py-5 px-16 bg-purple-700 rounded-full font-bold gap-3 hover:saturate-200 duration-300">
                        GitHub
                        <FaGithub className="h-6 w-6" />
                    </button>
                </a>
                
                
                <button className="flex items-center py-5 px-16 border rounded-full font-bold gap-3 hover:bg-white hover:text-gray-900 duration-300">
                    Contact
                    <FiSend className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}

export default Hero;
