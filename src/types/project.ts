export interface Project {
    id: string;
export interface Project {
    id: string;
    title: string;
    category: string;
    location?: string;
    year?: string;
    description: string;
    coverImage: string;
    images: string[];
    isFeatured?: boolean;
}
