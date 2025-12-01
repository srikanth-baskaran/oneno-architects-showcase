import { useParams, Navigate, Link } from "react-router-dom";
import { projectsData } from "@/data/projectsData";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12">
                <div className="container mx-auto">
                    {/* Back Button */}
                    <div className="mb-8 fade-in">
                        <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
                            <Link to="/projects">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Projects
                            </Link>
                        </Button>
                    </div>

                    {/* Header */}
                    <div className="mb-12 fade-in">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                            <div>
                                <p className="text-xs sm:text-sm tracking-widest text-muted-foreground mb-3">
                                    {project.category.toUpperCase()}
                                </p>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                                    {project.title}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                                {project.location && <p>{project.location}</p>}
                                {project.year && <p>{project.year}</p>}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-3xl">
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 fade-in-up">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted group"
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} - Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
