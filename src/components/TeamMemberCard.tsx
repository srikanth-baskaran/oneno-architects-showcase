import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Factory, Briefcase } from "lucide-react";

interface TeamMemberStat {
  label: string;
  value: string;
  iconType: "home" | "building" | "factory" | "briefcase";
}

interface TeamMemberExpertise {
  category: string;
  items: string[];
}

interface TeamMemberCareer {
  period: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  stats: TeamMemberStat[];
  expertise: TeamMemberExpertise[];
  career: TeamMemberCareer[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case "home": return Home;
    case "building": return Building2;
    case "factory": return Factory;
    case "briefcase": return Briefcase;
    default: return Home;
  }
};

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const slug = member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return (
    <Link 
      to={`/team/${slug}`}
      state={{ member }}
      className="group text-left w-full block focus:outline-none"
    >
      <div className="overflow-hidden border border-background/20 hover:border-background/40 transition-all duration-300">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-serif mb-1">{member.name}</h3>
          <p className="text-xs text-background/60">{member.role}</p>
          <p className="text-xs text-accent mt-2 inline-flex items-center gap-1">
            View Profile <ArrowRight className="h-3 w-3" />
          </p>
        </div>
      </div>
    </Link>
  );
};

export { type TeamMember, type TeamMemberStat, type TeamMemberExpertise, type TeamMemberCareer };
