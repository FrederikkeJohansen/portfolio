function About() {
    return (
        <div
            className="h-screen px-4 md:px-12 pt-8 2xl:pt-16 flex flex-col max-md:h-auto max-md:min-h-screen overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #FBF9FE 0%, #CADAFF 8%, #d8e4ff 40%, #FBF9FE 70%, #CADAFF 100%)",
            }}
        >
            {/* Header */}
            <div className="flex flex-row items-center mb-8 md:mb-10">
                <h2 className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
                    About
                </h2>
                <div className="border-b border-slate-400/50 flex-1 mx-8"></div>
            </div>

            {/* Content — asymmetric layout */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">

                {/* Left column — text content, offset upward */}
                <div className="md:col-span-7 flex flex-col gap-8 md:gap-10 md:-mt-12">

                    {/* Education */}
                    <div>
                        <h3 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-4">
                            Education
                        </h3>
                        <ul className="list-disc list-outside ml-8 space-y-3">
                            <li>
                                <p className="text-base 2xl:text-lg font-medium text-[#1a1a1a]">Aarhus University</p>
                                <p className="text-sm 2xl:text-base font-light text-slate-600">MSc in IT Product Development, 2023–2025</p>
                            </li>
                            <li>
                                <p className="text-base 2xl:text-lg font-medium text-[#1a1a1a]">Politecnico di Milano</p>
                                <p className="text-sm 2xl:text-base font-light text-slate-600">Exchange Semester, 2024–2025</p>
                            </li>
                            <li>
                                <p className="text-base 2xl:text-lg font-medium text-[#1a1a1a]">Aarhus University</p>
                                <p className="text-sm 2xl:text-base font-light text-slate-600">BSc in IT Product Development, 2020–2023</p>
                            </li>
                        </ul>
                    </div>

                    {/* Who I Am */}
                    <div className="max-w-lg">
                        <h3 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-3">
                            Who I Am
                        </h3>
                        <p className="text-base 2xl:text-lg font-light text-slate-700 leading-relaxed">
                            I'm a designer and developer with a passion for creating meaningful
                            digital experiences. With a background spanning UX research,
                            interface design, and front-end development, I enjoy working in the
                            space where people and technology meet.
                        </p>
                        <p className="text-base 2xl:text-lg font-light text-slate-700 leading-relaxed mt-3">
                            I'm drawn to projects that challenge me to think both creatively and
                            technically — from wearable prototypes to web applications. I care
                            about the details, the people using the product, and the story
                            behind every design decision.
                        </p>
                    </div>

                    {/* Good to Know */}
                    <div>
                        <h3 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-3">
                            Good to Know
                        </h3>
                        <div className="flex flex-wrap items-center text-base 2xl:text-lg font-light text-slate-700">
                            <span>Something</span>
                            <span className="mx-3 text-slate-400">|</span>
                            <span>Something</span>
                            <span className="mx-3 text-slate-400">|</span>
                            <span>Something</span>
                            <span className="mx-3 text-slate-400">|</span>
                            <span>Something</span>
                        </div>
                    </div>
                </div>

                {/* Right column — Image, vertically centered */}
                <div className="md:col-span-5 flex justify-center md:justify-end md:-mt-16">
                    <div className="w-72 h-80 md:w-full md:h-[28rem] 2xl:h-[32rem] bg-slate-300/30 rounded-2xl shadow-lg flex items-center justify-center -rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-xl">
                        <span className="text-slate-400 text-sm tracking-[0.2em] uppercase">
                            Photo
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
