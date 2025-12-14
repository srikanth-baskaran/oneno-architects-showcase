import { Project } from "@/types/project";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.jpg";

// Helper to get image URLs from import.meta.glob
const getImages = (glob: Record<string, unknown>) => {
    return Object.values(glob).map((module) => (module as { default: string }).default);
};

// Import images dynamically
const syedImages = import.meta.glob("@/assets/projects/residential/syed/*.{png,jpg,jpeg,svg}", { eager: true });
const vaibhavImages = import.meta.glob("@/assets/projects/residential/vaibhav/*.{png,jpg,jpeg,svg}", { eager: true });
const sojitzImages = import.meta.glob("@/assets/projects/industry_office/sojitz/*.{png,jpg,jpeg,svg}", { eager: true });
const tgmiImages = import.meta.glob("@/assets/projects/industry_office/tgmi_manesar/Site photos/*.{png,jpg,jpeg,svg}", { eager: true });
const vasanthImages = import.meta.glob("@/assets/projects/residential/vasanth/*.{png,jpg,jpeg,svg}", { eager: true });
const pramodImages = import.meta.glob("@/assets/projects/residential/pramod/*.{png,jpg,jpeg,svg}", { eager: true });
const poojaImages = import.meta.glob("@/assets/projects/residential/pooja/*.{png,jpg,jpeg,svg}", { eager: true });
const phoenixGymImages = import.meta.glob("@/assets/projects/commercial/phoenix-gym/*.{png,jpg,jpeg,svg}", { eager: true });

// Get cover images
import vasanthCover from "@/assets/projects/residential/vasanth/cover.jpg";
import pramodCover from "@/assets/projects/residential/pramod/cover.jpg";
import poojaCover from "@/assets/projects/residential/pooja/cover.jpg";
import phoenixGymCover from "@/assets/projects/commercial/phoenix-gym/cover.jpg";

export const projectsData: Project[] = [
    {
        id: "mr-syed-villa",
        title: "Mr. Syed Villa",
        category: "Residential",
        location: "Nungambakkam, Chennai",
        year: "2024",
        description: `A contemporary residence in Nungambakkam featuring five bedrooms, two living areas, and an open kitchen-dining-living layout designed for seamless spatial flow.

The design follows a unified aesthetic language with warm tones and refined material selections throughout. Each bedroom is individually designed to reflect the personality and preferences of its occupant through personalised layouts and curated elements.

Every space balances comfort, elegance, and user-centric detailing — creating a home that feels both cohesive and distinctly personal.`,
        coverImage: project1,
        images: getImages(syedImages),
        isFeatured: true,
    },
    {
        id: "vaibhav-villa",
        title: "Vaibhav",
        category: "Residential",
        location: "Bangalore",
        year: "2023",
        description: `A contemporary duplex villa in Bangalore designed with clean architectural volumes, open layouts, and refined material detailing throughout.

The design prioritises natural light, functional planning, and seamless vertical circulation between levels. Warm tones, premium finishes, and curated textures create a sophisticated yet comfortable living environment.

Each space reflects modern aesthetics with thoughtful spatial planning — a residence built for elevated contemporary living.`,
        coverImage: project2,
        images: getImages(vaibhavImages),
        isFeatured: true,
    },
    {
        id: "the-sojitz-office",
        title: "The Sojitz Office",
        category: "Commercial",
        year: "2025",
        description: `A forward-thinking corporate workspace featuring multiple meeting rooms, collaborative workstations, and an innovative open meeting area designed for dynamic team interactions.

A modern telephonic booth provides privacy and supports contemporary communication requirements. The workspace integrates clean lines, warm materials, and refined lighting to create an environment that is both contemporary and highly functional.

Every zone is planned to enhance productivity, comfort, and collaboration while reflecting the organisation's global, progressive identity.`,
        coverImage: project3,
        images: getImages(sojitzImages),
        isFeatured: true,
    },
    {
        id: "tgmi",
        title: "TGMI",
        category: "Commercial",
        year: "2023",
        description: `A corporate office designed to maximise workstation capacity while maintaining comfort, clarity, and efficient workflow throughout.

The layout incorporates a dedicated display zone for showcasing operational machinery, enabling clients and teams to engage with product capabilities. A specialised testing laboratory supports technical evaluations, complemented by a controlled vibration testing zone designed to meet precision and safety standards.

The workspace balances corporate functionality with high-specification industrial requirements — creating a unified environment for operations, testing, and client presentations.`,
        coverImage: project4,
        images: getImages(tgmiImages),
    },
    {
        id: "mr-vasanth-residence",
        title: "Mr. Vasanth Residence",
        category: "Residential",
        location: "Chennai",
        year: "2024",
        description: `A complete residential interior design featuring thoughtfully planned kitchen, dining, and living spaces with contemporary aesthetics.

The design emphasises functional layouts with refined material selections and warm tones throughout. Each zone is crafted to enhance daily living while maintaining visual continuity across the home.

The residence showcases modern Indian design sensibilities balanced with practical family-oriented planning.`,
        coverImage: vasanthCover,
        images: getImages(vasanthImages),
    },
    {
        id: "mr-pramod-villa",
        title: "Mr. Pramod's Villa",
        category: "Residential",
        location: "Bangalore",
        year: "2024",
        description: `A contemporary villa in Bangalore designed with bold architectural expressions and refined interior detailing.

The design features clean volumes, strategic fenestration, and premium material finishes that create a sophisticated living environment. The interiors balance modern aesthetics with functional family spaces.

Every element is curated to reflect contemporary luxury while ensuring practical, comfortable living.`,
        coverImage: pramodCover,
        images: getImages(pramodImages),
    },
    {
        id: "mrs-pooja-residence",
        title: "Mrs. Pooja Residence",
        category: "Residential",
        year: "2024",
        description: `A residential interior project featuring elegant living spaces with contemporary design language.

The design incorporates warm materials, refined textures, and thoughtful spatial planning to create a welcoming home environment. Each room is designed to maximise functionality while maintaining aesthetic harmony.

The residence exemplifies modern interior design with attention to detail and user comfort.`,
        coverImage: poojaCover,
        images: getImages(poojaImages),
    },
    {
        id: "phoenix-fitness",
        title: "Phoenix Fitness",
        category: "Commercial",
        year: "2025",
        description: `A commercial gym interior designed for Mr. Pankaj, featuring dynamic spaces that inspire fitness and wellness.

The design incorporates industrial aesthetics with warm accents, creating an energetic yet welcoming atmosphere. Strategic zoning separates workout areas while maintaining visual connectivity throughout the facility.

Every element is planned to enhance the fitness experience through functional design and motivational spatial character.`,
        coverImage: phoenixGymCover,
        images: getImages(phoenixGymImages),
    },
];
