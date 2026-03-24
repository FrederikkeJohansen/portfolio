function About() {
    return (
        <div
            id="about"
            className="px-4 md:px-12 py-8 flex flex-col bg-[#CADAFF]"

        >
            {/* Header */}
            <div className="flex flex-row items-center mb-2">
                <h2 className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
                    About
                </h2>
                <div className="border-b border-slate-600/40 flex-1 mx-8"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex items-start justify-center pt-2">
                <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-start">

                    {/* Left column */}
                    <div className="flex flex-col gap-8 md:gap-10">

                        {/* Education */}
                        <div>
                            <h3 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-2">
                                Education
                            </h3>
                            <ul className="list-disc list-outside ml-8 space-y-2">
                                <li>
                                    <p className="text-[clamp(0.8rem,1.1vw,1.25rem)] font-medium text-[#1a1a1a]">Aarhus University</p>
                                    <p className="text-[clamp(0.7rem,0.85vw,1rem)] font-light text-slate-600">MSc in IT Product Development, 2023–2025</p>
                                </li>
                                <li>
                                    <p className="text-[clamp(0.8rem,1.1vw,1.25rem)] font-medium text-[#1a1a1a]">Politecnico di Milano</p>
                                    <p className="text-[clamp(0.7rem,0.85vw,1rem)] font-light text-slate-600">Exchange Semester, 2024–2025</p>
                                </li>
                                <li>
                                    <p className="text-[clamp(0.8rem,1.1vw,1.25rem)] font-medium text-[#1a1a1a]">Aarhus University</p>
                                    <p className="text-[clamp(0.7rem,0.85vw,1rem)] font-light text-slate-600">BSc in IT Product Development, 2020–2023</p>
                                </li>
                            </ul>
                        </div>

                        {/* Who I Am */}
                        <div>
                            <h3 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-2">
                                Who I Am
                            </h3>
                            <p className="text-[clamp(0.8rem,1.1vw,1.25rem)] font-light text-slate-700 leading-relaxed">
                                I'm a designer and developer with a passion for creating meaningful
                                digital experiences. With a background spanning UX research,
                                interface design, and front-end development, I enjoy working in the
                                space where people and technology meet.
                            </p>
                            <p className="text-[clamp(0.8rem,1.1vw,1.25rem)] font-light text-slate-700 leading-relaxed mt-2">
                                I'm drawn to projects that challenge me to think both creatively and
                                technically — from wearable prototypes to web applications. I care
                                about the details, the people using the product, and the story
                                behind every design decision.
                            </p>
                        </div>

                        {/* Good to Know */}
                        <div>
                            <h3 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-2">
                                Good to Know
                            </h3>
                            <div className="flex flex-wrap items-center text-[clamp(0.8rem,1.1vw,1.25rem)] font-light text-slate-700">
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

                    {/* Right column — Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-72 h-80 md:w-full md:h-[55vh] bg-slate-300/30 rounded-2xl shadow-lg flex items-center justify-center">
                            <span className="text-slate-400 text-sm tracking-[0.2em] uppercase">
                                Photo
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
