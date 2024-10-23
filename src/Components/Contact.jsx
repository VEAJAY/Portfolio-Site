function Contact() {
  return (
    <div className="min-h-screen dark:bg-gray-200">
        {/* TITLE */}
        <div className="flex flex-col mx-4 pt-24 sm:mx-8 md:mx-24 lg:mx-44">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-gray-900">
                Contact<span className="text-purple-700 dark:text-blue-600">.</span>
            </h1>
            <h2 className="text-gray-400 mb-10 mt-3 text-lg sm:text-xl lg:text-2xl dark:text-gray-900">
                Feel free to reach out
            </h2>
        </div>
    </div>
  )
}

export default Contact
