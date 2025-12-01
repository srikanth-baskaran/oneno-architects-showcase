import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  year?: string;
}

export const ProjectCard = ({ id, title, category, image, year }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden bg-muted aspect-square mb-3 md:mb-4 rounded-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-serif">{title}</h3>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <span>{category}</span>
          {year && (
            <>
              <span>•</span>
              <span>{year}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
