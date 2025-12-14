import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, Building2, Home, Factory, Briefcase } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  stats: { label: string; value: string; icon: typeof Home }[];
  expertise: { category: string; items: string[] }[];
  career: { period: string; title: string; description: string }[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group text-left w-full max-w-xs mx-auto block focus:outline-none">
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
              <p className="text-xs text-accent mt-2">Click to view profile</p>
            </div>
          </div>
        </button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-foreground text-background border-background/10">
        <div className="p-2 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto sm:mx-0 flex-shrink-0 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-serif mb-2">{member.name}</h2>
              <p className="text-sm text-background/60 mb-4">{member.role}</p>
              <p className="text-sm text-background/80 leading-relaxed">{member.bio}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {member.stats.map((stat) => (
              <div key={stat.label} className="text-center p-3 border border-background/10">
                <stat.icon className="h-4 w-4 mx-auto mb-2 text-accent" />
                <div className="text-xl sm:text-2xl font-serif mb-1">{stat.value}</div>
                <p className="text-xs text-background/50">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Career Timeline */}
          <div className="mb-8">
            <h4 className="text-xs tracking-[0.2em] text-background/50 mb-4 uppercase text-center">Career Journey</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {member.career.map((item) => (
                <div key={item.title} className="p-3 border border-background/10">
                  <p className="text-xs text-accent mb-1">{item.period}</p>
                  <h5 className="text-sm font-serif mb-1">{item.title}</h5>
                  <p className="text-xs text-background/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-background/50 mb-4 uppercase text-center">Technical Expertise</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {member.expertise.map((category) => (
                <div key={category.category} className="p-3 border border-background/10">
                  <h5 className="text-sm font-serif mb-2">{category.category}</h5>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-background/60">
                        <CheckCircle2 className="h-3 w-3 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { type TeamMember };
