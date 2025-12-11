import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  year?: string;
  location?: string;
}

export const ProjectCard = ({ id, title, category, image, year, location }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="group block">
      <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-muted mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <p className="text-xs tracking-wider text-muted-foreground uppercase">{category}</p>
        <h3 className="text-lg sm:text-xl font-serif group-hover:text-accent transition-colors duration-300">{title}</h3>
        {(location || year) && (
          <p className="text-sm text-muted-foreground">
            {location}{location && year && " · "}{year}
          </p>
        )}
      </div>
    </Link>
  );
};
