import { Project } from "@/types/project";

// Helper to get image URLs from import.meta.glob
const getImages = (glob: Record<string, unknown>) => {
    return Object.values(glob).map((module) => (module as { default: string }).default);
};

// Import images dynamically
const syedImages = import.meta.glob("@/assets/projects/residential/syed/*.{png,jpg,jpeg,svg}", { eager: true });
const vaibhavImages = import.meta.glob("@/assets/projects/residential/vaibhav/*.{png,jpg,jpeg,svg}", { eager: true });
const sojitzImages = import.meta.glob("@/assets/projects/industry_office/sojitz/*.{png,jpg,jpeg,svg}", { eager: true });
const tgmiImages = import.meta.glob("@/assets/projects/industry_office/tgmi_manesar/Site photos/*.{png,jpg,jpeg,svg}", { eager: true });

export const projectsData: Project[] = [
    {
        id: "mr-syed-villa",
        title: "Mr.Syed Villa",
        category: "Residential",
        location: "Nungambakkam",
        year: "2024",
        description: `Located in Nungambakkam, this is a modern residence featuring five bedrooms, two living areas, and an open kitchen–dining–living layout designed for seamless flow.
The home follows a unified design language with warm tones and refined materials for overall harmony.
Each bedroom is uniquely designed to reflect the personality and lifestyle of its user through personalised layouts and feature elements.
Every space is crafted with intention, balancing comfort, elegance, and user-centric detailing.
Syed Villa brings together cohesion and individuality to create a home that feels connected yet deeply personal.`,
        coverImage: "src/assets/project-1.png",
        images: getImages(syedImages),
        isFeatured: true,
    },
    {
        id: "vaibhav-villa",
        title: "Vaibhav",
        category: "Residential",
        location: "Bangalore",
        year: "2023",
        description: `This duplex villa in Bangalore is designed as a contemporary luxury home with clean volumes, open layouts, and refined material detailing.
The design emphasises natural light, functional planning, and seamless vertical flow between levels.
Warm tones, premium finishes, and curated textures create a sophisticated yet comfortable living experience.
Each space is crafted with modern aesthetics, user-focused planning, and elegant spatial balance.
The villa reflects a blend of urban luxury and thoughtful design — a home built for elevated, modern living.`,
        coverImage: "src/assets/project-2.jpg",
        images: getImages(vaibhavImages),
        isFeatured: true,
    },
    {
        id: "the-sojitz-office",
        title: "The Sojitz Office",
        category: "Commercial",
        year: "2025",
        description: `This is designed as a forward-thinking corporate environment featuring multiple meeting rooms, collaborative workstations, and a new-concept open meeting area for dynamic discussions.
A futuristic telephonic booth adds privacy and tech-driven convenience, supporting modern communication needs.
The workspace blends clean lines, warm materials, and refined lighting to create a setting that feels both contemporary and highly functional.
Every zone is planned to enhance productivity, comfort, and team interaction while reflecting the brand’s global, progressive identity.`,
        coverImage: "src/assets/project-3.png",
        images: getImages(sojitzImages),
        isFeatured: true,
    },
    {
        id: "tgmi",
        title: "TGMI",
        category: "Commercial",
        year: "2023",
        description: `This office space is designed to achieve maximum workstation capacity while maintaining comfort, clarity, and efficient workflow.
The layout integrates a dedicated display zone for showcasing working machinery, allowing clients and teams to visually engage with product capabilities.
A specialised testing laboratory is incorporated for technical evaluations, supported by a controlled vibration testing zone designed to meet precision and safety standards.
The workspace balances functionality and technical performance, combining corporate environments with high-spec industrial requirements.
Every area is planned to optimise movement, productivity, and demonstration efficiency, creating a unified space for operations, testing, and presentation.`,
        coverImage: "src/assets/project-4.jpg",
        images: getImages(tgmiImages),
    },
];
