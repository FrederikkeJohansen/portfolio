function About() {
    return (
        <div
            id="about"
            className="px-4 md:px-12 py-8 flex flex-col"
            style={{
                background:
                    "linear-gradient(180deg, #FBF9FE 0%, #CADAFF 8%, #d8e4ff 40%, #FBF9FE 70%, #CADAFF 100%)",
            }}
        >
            {/* Header */}
            <div className="flex flex-row items-center mb-2">
                <h2 className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
                    About
                </h2>
                <div className="border-b border-slate-300 flex-1 mx-8"></div>
            </div>

            {/* Content — fills remaining viewport */}
            <div className="flex-1 flex items-start justify-center pt-2">
                <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-start">

                    {/* Left column */}
                    <div className="flex flex-col gap-[2.5vh]">

                        {/* Education */}
                        <div>
                            <h3 className="text-[clamp(0.75rem,1vw,1.25rem)] font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-[1vh]">
                                Education
                            </h3>
                            <ul className="list-disc list-outside ml-8 space-y-[1vh]">
                                <li>
                                    <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] font-medium text-[#1a1a1a]">Aarhus University</p>
                                    <p className="text-[clamp(0.75rem,1vw,1.25rem)] font-light text-slate-600">MSc in IT Product Development, 2023–2025</p>
                                </li>
                                <li>
                                    <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] font-medium text-[#1a1a1a]">Politecnico di Milano</p>
                                    <p className="text-[clamp(0.75rem,1vw,1.25rem)] font-light text-slate-600">Exchange Semester, 2024–2025</p>
                                </li>
                                <li>
                                    <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] font-medium text-[#1a1a1a]">Aarhus University</p>
                                    <p className="text-[clamp(0.75rem,1vw,1.25rem)] font-light text-slate-600">BSc in IT Product Development, 2020–2023</p>
                                </li>
                            </ul>
                        </div>

                        {/* Who I Am */}
                        <div>
                            <h3 className="text-[clamp(0.75rem,1vw,1.25rem)] font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-[1vh]">
                                Who I Am
                            </h3>
                            <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] font-light text-slate-700 leading-relaxed">
                                I'm a designer and developer with a passion for creating meaningful
                                digital experiences. With a background spanning UX research,
                                interface design, and front-end development, I enjoy working in the
                                space where people and technology meet.
                            </p>
                            <p className="text-[clamp(0.875rem,1.3vw,1.5rem)] font-light text-slate-700 leading-relaxed mt-[0.5vh]">
                                I'm drawn to projects that challenge me to think both creatively and
                                technically — from wearable prototypes to web applications. I care
                                about the details, the people using the product, and the story
                                behind every design decision.
                            </p>
                        </div>

                        {/* Good to Know */}
                        <div>
                            <h3 className="text-[clamp(0.75rem,1vw,1.25rem)] font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-[1vh]">
                                Good to Know
                            </h3>
                            <div className="flex flex-wrap items-center text-[clamp(0.875rem,1.3vw,1.5rem)] font-light text-slate-700">
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
                        <div className="w-72 h-80 md:w-full md:h-[55vh] bg-slate-300/30 rounded-2xl shadow-lg flex items-center justify-center -rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-xl">
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
