import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocation, Navigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { type TeamMember, getIconComponent } from "@/components/TeamMemberCard";

const TeamMemberPage = () => {
  const location = useLocation();
  const member = location.state?.member as TeamMember | undefined;

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Back Link */}
      <section className="pt-24 sm:pt-28 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to About
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Image */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-2">
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Team</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3">{member.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{member.role}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {member.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {member.stats.map((stat) => {
                  const IconComponent = getIconComponent(stat.iconType);
                  return (
                    <div key={stat.label} className="text-center p-4 border border-border">
                      <IconComponent className="h-5 w-5 mx-auto mb-2 text-accent" />
                      <div className="text-2xl font-serif mb-1">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-12 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Experience</p>
            <h2 className="text-2xl sm:text-3xl font-serif">Career Journey</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {member.career.map((item) => (
              <div key={item.title} className="p-5 border border-border bg-background">
                <p className="text-xs text-accent mb-2">{item.period}</p>
                <h3 className="text-base font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-3 uppercase">Skills</p>
            <h2 className="text-2xl sm:text-3xl font-serif">Technical Expertise</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {member.expertise.map((category) => (
              <div key={category.category} className="p-5 border border-border">
                <h3 className="text-base font-serif mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamMemberPage;
