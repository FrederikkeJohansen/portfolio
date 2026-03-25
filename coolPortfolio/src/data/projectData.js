import CSPortfolioImage from "../assets/projects/CSPortfolio/CSPortfolioPB.jpg";
import CSPortfolio1 from "../assets/projects/CSPortfolio/CSPortfolio1.jpg";
import CSPortfolio2 from "../assets/projects/CSPortfolio/CSPortfolio2.png";
import CSPortfolio3 from "../assets/projects/CSPortfolio/CSPortfolio3.png";
import CSPortfolio4 from "../assets/projects/CSPortfolio/CSPortfolio4.jpg";
import CSPortfolio5 from "../assets/projects/CSPortfolio/CSPortfolio5.png";
import CSPortfolio6 from "../assets/projects/CSPortfolio/CSPortfolio6.jpg";
import CSPortfolio7 from "../assets/projects/CSPortfolio/CSPortfolio7.jpg";

import hyperBoxImage from "../assets/projects/HyperBox/hyperBoxPB.jpg";
import eieioImage from "../assets/projects/EIEIO/eieioPB.png";
import vaerdicentralenImage from "../assets/projects/Vaerdicentralen/vaerdicentralenPB.png";
import designAsImage from "../assets/projects/DesignAs/designAsPB.png";
import bachelorImage from "../assets/projects/Bachelor/bachelorPB.png";
import strainySleevyImage from "../assets/projects/StrainySleevy/strainySleevyPB.png";
import nightWatchImage from "../assets/projects/NightWatch/nightWatchPB.png";
import logoENVAImage from "../assets/projects/LogoENVA/logoEnvaPB.png";
import PersonalGifts from "../assets/projects/PersonalGifts/personalGiftsPB.png";

import uxImage from "../assets/projects/UXLogbook/UXPB.jpg";
import ux1 from "../assets/projects/UXLogbook/UX1.jpg";
import ux2 from "../assets/projects/UXLogbook/UX2.jpg";
import ux3 from "../assets/projects/UXLogbook/UX3.jpg";
import ux4 from "../assets/projects/UXLogbook/UX4.jpg";
import ux6 from "../assets/projects/UXLogbook/UX6.jpg";

import toWoodToGoImage from "../assets/projects/ToWoodToGo/toWoodToGoPB.jpg";
import toWoodToGo1 from "../assets/projects/ToWoodToGo/toWoodToGo1.jpg";
import toWoodToGo2 from "../assets/projects/ToWoodToGo/toWoodToGo2.jpg";
import toWoodToGo3 from "../assets/projects/ToWoodToGo/toWoodToGo3.jpg";
import toWoodToGo4 from "../assets/projects/ToWoodToGo/toWoodToGo4.jpg";
import toWoodToGo5 from "../assets/projects/ToWoodToGo/toWoodToGo5.png";

import evoliImage from "../assets/projects/Evoli/evoliPB.jpg";
import evoli2 from "../assets/projects/Evoli/evoli2.jpg";
import evoli3 from "../assets/projects/Evoli/evoli3.jpg";
import evoli4 from "../assets/projects/Evoli/evoli4.jpg";
import evoli5 from "../assets/projects/Evoli/evoli5.jpg";
import evoli6 from "../assets/projects/Evoli/evoli6.jpg";
import evoli7 from "../assets/projects/Evoli/evoli7.jpg";


export const projects = [
  {
    id: 1,
    title: "Evoli",
    slug: "evoli",
    year: 2025,
    responsibility: "Developed in a team of two, with shared responsibility for user research, interviews, ideation, concept development, data analysis, and both usability and in-the-wild evaluations. My primary responsibilities included UX/UI design, frontend development, prompt engineering for the AI features, and the development of the wearable, including hardware integration and sewing.",
    tags: ["App Development", "React Native", "TailwindCSS", "Wearable Technology", "AI-features", "User-Centered Design", "Human-Computer Interaction", "Prompt Engineering", "Prototyping", "Usability Evaluations"],
    caseStudyReady: true,
    thumbnail: evoliImage,
    images: [evoliImage, evoli2, evoli3, evoli4, evoli5, evoli6, evoli7],
    shortDescription: "Master Thesis: A mobile application and a wearable designed to reduce loneliness among university students. Features include self-reflection through an AI generated personal podcast and discreet in-situ support through haptic feedback.",
    description: ["This master thesis explores how technology can support university students in reducing experiences of loneliness through the design and development of Evoli: a combined mobile application and wearable. The project is grounded in literature, user research, and continuous collaboration with a psychological expert, ensuring both theoretical and practical relevance.", "The mobile application focuses on fostering self-reflection, self-efficacy, and a sense of belonging. Key features include an AI-generated personal podcast based on the user’s weekly activity, an AI-driven coach for guidance in social situations (tool rather than a friend), goal-creation for behavioral change, psychoeducational content, and a community feature where users can share advice and experiences.", "The wearable provides discreet, in-situ support through embodied interaction. Through discrete interactions, users can activate a haptic breathing pattern to interrupt cycles of negative thinking, or trigger a “getaway call” to exit uncomfortable situations in a socially acceptable way. This combination of digital and physical interaction moves beyond traditional screen-based solutions and emphasizes subtle, socially aware design.", "Technically, the system is built as a modular architecture with a mobile application developed in React Native (Expo), a cloud-based backend using Supabase for authentication and data management, and custom Python services handling AI-driven features such as podcast generation and text-to-speech synthesis.", "Through evaluations with students and expert input, the project highlights that loneliness is a complex and deeply personal experience that cannot be addressed through one-size-fits-all solutions. Instead, the findings emphasize the importance of personalization, discretion, and the interplay between digital and physical artifacts. Overall, the project demonstrates how combining AI-driven reflection with wearable interaction can create meaningful and context-aware support systems for mental well-being, while acknowledging the limitations and ethical considerations of technology in this space."]
  },
  {
    id: 2,
    title: "To-Wood-To-Go",
    slug: "to-wood-to-go",
    year: 2024,
    responsibility: "Developed in a team of three, collaborating on ideation and concept development. My primary responsibility was frontend development, along with user research and usability evaluation.",
    tags: ["Figma Prototyping", "Web Application", "MERN Stack", "Usability Evaluation", "Next-js", "User Journey Map"],
    caseStudyReady: true,
    thumbnail: toWoodToGoImage,
    images: [toWoodToGo1, toWoodToGo2, toWoodToGo3, toWoodToGo5, toWoodToGo4],
    shortDescription: "A web application enabling craftsmen to sell leftover building materials back to STARK, promoting circular economy and reducing waste for a more sustainable construction industry.",
    description: ["This project explores how digital technology can help reduce material waste in the construction industry. Large amounts of leftover materials from construction sites are often discarded because handling them requires additional time and logistics. To address this problem, we developed a concept where craftsmen can sell leftover or used materials back to a supplier through a digital platform. The system was designed in collaboration with STARK. Here, craftsmen can upload materials through an app by taking pictures, adding a description (written or voice recorded), and specifying quantity. STARK can then review the listing and propose a price. If the craftsman accepts the offer, the materials can be delivered to a STARK store when the craftsman next visits.", "The concept aims to support a circular economy by keeping materials in use rather than discarding them after a project. To explore the feasibility of the concept, we used Figma for prototyping to explore ideas and externalize it to users. Later, we designed and implemented a prototype web application. The prototype allows users to create material listings, upload images and descriptions, and receive price offers. STARK can access the listing through a link sent by email and respond with an offer that the craftsman can accept or reject.", "The prototype was implemented using a MERN-based web architecture enhanced with Next.js. The system supports listing creation, database storage, media uploads, email notifications, and responsive access from both mobile devices and desktop computers.",]
  },
  {
    id: 3,
    title: "Computer Science Portfolio",
    slug: "computer-science-portfolio",
    year: 2026,
    responsibility: "Developed independently during a 4-week internship. Responsible for end-to-end design and development, including UX/UI design (wireframes + Figma), frontend and backend implementation, and database integration.",
    tags: ["UX/UI Design", "Responsive Design", "Full-Stack Development", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Design Principles"],
    caseStudyReady: true,
    thumbnail: CSPortfolioImage,
    images: [CSPortfolio1, CSPortfolio2, CSPortfolio3, CSPortfolio4, CSPortfolio5, CSPortfolio6, CSPortfolio7],
    shortDescription: "Platform for Computer Science students at Aarhus University to showcase projects. Enables uploading, browsing, and filtering of projects, supported by an admin interface for content management.",
    description: ["During an internship at the Department of Computer Science at Aarhus University, I developed a web platform designed to showcase student projects for computer science students. The platform allows students to both share their own work and explore projects created by others. As a former student, I based the design decisions on my own experience, with a focus on creating an intuitive and engaging platform", "The design process began with hand-drawn wireframes, which were later translated into Figma designs to explore layout, interaction, and visual direction. The platform was developed using Next.js, TypeScript, and TailwindCSS with PostgreSQL. Students can upload projects through an upload form, search and browse existing projects, and filter content based on courses. Uploading is handled through a passphrase validation system to ensure controlled submissions. In addition to the platform for students, I developed a separate admin interface for managing content. Here, administrators can review and approve new submissions, hide projects, mark selected projects as featured, and access detailed project information.", "The project was completed within a 4-week timeframe, with a strong focus on building an intuitive, responsive, and user-friendly solution. It gave me the opportunity to combine a user-centered UX/UI approach with the development of a visually refined and responsive platform.", "The platform can bee accessed at https://cs.au.dk/csportfolio"],
  },
  {
    id: 4,
    title: "UX Design Logbook",
    slug: "ux-logbook",
    year: 2024,
    responsibility: "The logbook was developed independently by me. However, the Burning Man project was developed in a group of eight, where we shared responsiblity, and I contributed to the literature review, digital ethnography, benckmarking, stakeholder matrix, and value proposition canvas.",
    tags: ["UX Design", "UX Mapping", "Human-Centered Design", "Chrono-maps", "Non-chrono maps", "Research-for-Design", "Digital Ethnography", "Benchmarking", "Customer Journey Mapping", "Hierarchical Task Analysis", "Service Blueprint"],
    caseStudyReady: true,
    thumbnail: uxImage,
    images: [ux1, ux2, ux3, ux4, uxImage, ux6],
    shortDescription: "Selected pages from my UX logbook developed during a course at Politecnico di Milano, including explorations of UX mapping methods, mental models, and a design project investigating newcomers’ experiences at the Burning Man festival through digital ethnography, benchmarking, and concept development.",
    description: ["I here present selected work from my UX logbook created during a course at Politecnico di Milano, focusing on understanding and applying user experience design methods.", "The logbook includes an overview and comparison of chrono-based UX mapping techniques such as experience maps, service blueprints, task analysis, and customer journey maps. These methods were analyzed in terms of their characteristics, components, purpose, and when to use them. To better understand their relationships, they were also positioned within a comparative framework. These insights were applied in practice through the creation of a customer journey map and a hierarchical task analysis for a travel scenario from Milan to Venice, comparing services such as FlixBus and Trenitalia. In addition, the project explores non-chrono maps, including system maps, stakeholder maps, service ecosystem maps, and mental models. These were analyzed and compared based on their level of abstraction, purpose, and visualization approach.", "The logbook presents a group research-for-design project focused on the Burning Man Festival. The research aimed to understand barriers to engagement for newcomers in community built festivals and how we could make it more exciting. Through methods such as research question tree, literture review, empathy map, digital ethnography, webscrabing/digital ethnography, and benchmarking, we identified key challenges related to understanding the logistics of the festival, challenges finding camping spots, support to artists, and importance of the gifting culture. These insights led to the development of Burner Sphere and Burner Pont, a concept designed to support newcomers in navigating and engaging with the festival. The solution combines a mobile application with physical information points, aiming to enhance both pre-festival preparation and in-situ experience while respecting the values of the Burning Man community."],
  },
  {
    id: 5,
    title: "Traces, Privacy, and Territories",
    slug: "bachelor",
    year: 2023,
    responsibility: "Designed and developed a collaborative writing prototype and conducted user evaluations.",
    tags: ["Bachelor Thesis", "Webstrates", "User Evaluation",],
    caseStudyReady: false,
    thumbnail: bachelorImage,
    images: [bachelorImage, bachelorImage, bachelorImage, bachelorImage],
    shortDescription: "Bachelor Thesis: Explored the use of traces in collaborative writing by developing and evaluating a Google Docs–style prototype with features supporting private work and territorial boundaries.",
    description: "Bachelor Thesis: Explored the use of traces in collaborative writing by developing and evaluating a Google Docs–style prototype with features supporting private work and territorial boundaries.",
  },
  {
    id: 6,
    title: "System Design for Værdicentralen",
    slug: "vaerdicentralen",
    year: 2022,
    responsibility: "Led participatory design sessions and contributed to agile development of the platform.",
    tags: ["Participatory Design", "Field Studies", "Agile Development", "Usability Evaluation", "MERN-Stack", "User-Centered Design"],
    caseStudyReady: false,
    thumbnail: vaerdicentralenImage,
    images: [vaerdicentralenImage, vaerdicentralenImage, vaerdicentralenImage, vaerdicentralenImage],
    shortDescription: "Collaborative project with Værdicentralen (thrift shop) involving participatory design, field studies, and agile development to design and develop a platform supporting workflow and coordination.",
    description: "Collaborative project with Værdicentralen (thrift shop) involving participatory design, field studies, and agile development to design and develop a platform supporting workflow and coordination.",
  },
  {
    id: 7,
    title: "Night Watch",
    slug: "night-watch",
    year: 2024,
    responsibility: "Designed and fabricated a wearable prototype integrating electronics and soft materials.",
    tags: ["Wearable", "Arduino", "3D Printing", "Interaction Design", "Haptic Feedback", "Sewing"],
    caseStudyReady: false,
    thumbnail: nightWatchImage,
    images: [nightWatchImage, nightWatchImage, nightWatchImage, nightWatchImage],
    shortDescription: "Wearable designed to enhance personal safety during night time walks. Key components include a soft button for activation, vibration motors for discreet feedback, and optical fibers for emitting light.",
    description: "Wearable designed to enhance personal safety during night time walks. Key components include a soft button for activation, vibration motors for discreet feedback, and optical fibers for emitting light.",
  },
  {
    id: 8,
    title: "HyperBox",
    slug: "hyperbox",
    year: 2021,
    responsibility: "Designed the physical interface and developed the interactive learning experience.",
    tags: ["Machine Learning", "3D Printing", "Field Studies", "User Research", "Hyperparameters",],
    caseStudyReady: false,
    thumbnail: hyperBoxImage,
    images: [hyperBoxImage, hyperBoxImage, hyperBoxImage, hyperBoxImage],
    shortDescription: "A physical learning device for high school students to explore machine learning by adjusting hyperparameters and observing the outcomes.",
    description: "A physical learning device for high school students to explore machine learning by adjusting hyperparameters and observing the outcomes.",
  },
  {
    id: 9,
    title: "E-I-E-I-O",
    slug: "eieio",
    year: 2021,
    responsibility: "Designed and built an interactive toy using custom electronics and digital fabrication.",
    tags: ["PCB Design", "Arduino", "I²C Communication", "Laser Cutting", "3D Printing", "Interaction Design", "Prototyping"],
    caseStudyReady: false,
    thumbnail: eieioImage,
    images: [eieioImage, eieioImage, eieioImage, eieioImage],
    shortDescription: "Interactive toy for children. Built with electronic circuits, custom PCBs, laser cutting, 3D printing, Arduino and I²C communication.",
    description: "Interactive toy for children. Built with electronic circuits, custom PCBs, laser cutting, 3D printing, Arduino and I²C communication.",
  },
  {
    id: 10,
    title: "Logo Design",
    slug: "logo-enva",
    year: 2026,
    responsibility: "Created a brand identity through iterative logo design and visual exploration.",
    tags: ["Logo Design", "Figma",],
    caseStudyReady: false,
    thumbnail: logoENVAImage,
    images: [logoENVAImage, logoENVAImage, logoENVAImage],
    shortDescription: "Logo design for the choir ENVA, reflecting a sleek and modern aesthetic.",
    description: "Logo design for the choir ENVA, reflecting a sleek and modern aesthetic.",
  },
  {
    id: 11,
    title: "Strainy Sleevy",
    slug: "strainy-sleevy",
    year: 2023,
    responsibility: "Conceptualized and prototyped a critical design piece exploring sustainability themes.",
    tags: ["Critical Design", "Sustainability", "Wearable", "Prototyping", "Concept Design"],
    caseStudyReady: false,
    thumbnail: strainySleevyImage,
    images: [strainySleevyImage, strainySleevyImage, strainySleevyImage, strainySleevyImage],
    shortDescription: "Critical design — An elbow sleeve provoking reflection on sustainability and energy use.",
    description: "Critical Design Project on Sustainability: An elbow sleeve for children that restricts movement based on parental energy consumption to provoke reflection and awareness.",
  },

];

export const featuredIds = [3, 1, 4, 2];
