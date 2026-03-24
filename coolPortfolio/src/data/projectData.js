import hyperBoxImage from "../assets/projects/HyperBox/hyperBoxPB.jpg";
import eieioImage from "../assets/projects/EIEIO/eieioPB.png";
import vaerdicentralenImage from "../assets/projects/Vaerdicentralen/vaerdicentralenPB.png";
import designAsImage from "../assets/projects/DesignAs/designAsPB.png";
import bachelorImage from "../assets/projects/Bachelor/bachelorPB.png";
import uxImage from "../assets/projects/UXLogbook/uxPB.png";
import strainySleevyImage from "../assets/projects/StrainySleevy/strainySleevyPB.png";
import nightWatchImage from "../assets/projects/NightWatch/nightWatchPB.png";
import toWoodToGoImage from "../assets/projects/ToWoodToGo/toWoodToGoPB.png";
import evoliImage from "../assets/projects/Evoli/evoliPB.png";
import logoENVAImage from "../assets/projects/LogoENVA/logoEnvaPB.png";
import PersonalGifts from "../assets/projects/PersonalGifts/personalGiftsPB.png";

export const projects = [
  {
    id: 10,
    title: "Evoli",
    slug: "evoli",
    thumbnail: evoliImage,
    description: "Master Thesis: A mobile application and a wearable designed to reduce loneliness among university students. Features include self-reflection through an AI generated personal podcast and discreet in-situ support through haptic feedback.",
  },
  {
    id: 9,
    title: "To-Wood-To-Go",
    slug: "to-wood-to-go",
    thumbnail: toWoodToGoImage,
    description: "A web application enabling craftsmen to sell leftover building materials back to STARK, promoting circular economy and reducing waste for a more sustainable construction industry.",
  },
  {
    id: 6,
    title: "UX Design Logbook",
    slug: "ux-logbook",
    thumbnail: uxImage,
    description: "Selected pages from my UX logbook, including comparisons of UX maps and mental models, exploring newcomers' experiences at the Burning Man festival through benchmarking and digital ethnography, and the creation of Burner Sphere.",
  },
  {
    id: 5,
    title: "Traces, Privacy, and Territories",
    slug: "bachelor",
    thumbnail: bachelorImage,
    description: "Bachelor Thesis: Explored the use of traces in collaborative writing by developing and evaluating a Google Docs–style prototype with features supporting private work and territorial boundaries.",
  },
  {
    id: 3,
    title: "System Design for Værdicentralen",
    slug: "vaerdicentralen",
    thumbnail: vaerdicentralenImage,
    description: "Collaborative project with Værdicentralen (thrift shop) involving participatory design, field studies, and agile development to design and develop a platform supporting workflow and coordination.",
  },
  {
    id: 8,
    title: "Night Watch",
    slug: "night-watch",
    thumbnail: nightWatchImage,
    description: "Wearable designed to enhance personal safety during night time walks. Key components include a soft button for activation, vibration motors for discreet feedback, and optical fibers for emitting light.",
  },
  {
    id: 1,
    title: "HyperBox",
    slug: "hyperbox",
    thumbnail: hyperBoxImage,
    description: "A physical learning device for high school students to explore machine learning by adjusting hyperparameters and observing the outcomes.",
  },
  {
    id: 2,
    title: "E-I-E-I-O",
    slug: "eieio",
    thumbnail: eieioImage,
    description: "Interactive toy for children. Built with electronic circuits, custom PCBs, laser cutting, 3D printing, Arduino and I²C communication.",
  },
  {
    id: 11,
    title: "Logo Design",
    slug: "logo-enva",
    thumbnail: logoENVAImage,
    description: "Logo design for the choir ENVA, reflecting a sleek and modern aesthetic.",
  },
  {
    id: 7,
    title: "Strainy Sleevy",
    slug: "strainy-sleevy",
    thumbnail: strainySleevyImage,
    description: "Critical Design Project on Sustainability: An elbow sleeve for children that restricts movement based on parental energy consumption to provoke reflection and awareness.",
  },
  {
    id: 4,
    title: "Redesign of Stand Mixer",
    slug: "stand-mixer",
    thumbnail: designAsImage,
    description: "Redesign of a stand mixer through six distinct design periods; Arts & Crafts, Bauhaus, Ulm, Streamline, Postmodernism, and Eco-design.",
  },
  {
    id: 12,
    title: "Personalized Projects",
    slug: "personal",
    thumbnail: PersonalGifts,
    description: "A collection of small personalized projects, including bookmarks, placecards, decorations, and christmas ornaments.",
  },
];

export const featuredIds = [10, 9, 6];
