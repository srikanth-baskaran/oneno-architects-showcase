interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  year?: string;
}

export const ProjectCard = ({ title, category, image, year }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-muted aspect-square mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-serif">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{category}</span>
          {year && (
            <>
              <span>•</span>
              <span>{year}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
