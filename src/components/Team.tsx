import TeamMember from "./TeamMember";

const Team = () => {
  const team = [
    {
      name: "Diego Ornelas",
      title: "Full-time AI Engineer",
      education: [
        "Bachelor's in Cyber Security",
        "Bachelor's in Information Systems"
      ],
      image: "/lovable-uploads/ac789c92-918c-4f77-9539-5696b5746d9f.png",
      linkedinUrl: "https://www.linkedin.com/in/d-ornelas/"
    },
    {
      name: "Enrique Ornelas",
      title: "Full-time Software Engineer",
      education: [
        "Bachelor's in Computer Science",
        "Minor in Cyber Security"
      ],
      image: "/lovable-uploads/e962c3ad-2c23-4bab-a6b6-ce46e5fea938.png",
      linkedinUrl: "https://www.linkedin.com/in/enriqueornelas/"
    },
    {
      name: "Andres Marín",
      title: "Full-time AI Researcher",
      education: [
        "Master's in AI",
        "Master's in Quantum Computing"
      ],
      image: "/lovable-uploads/29a0bb08-e168-4f9e-9f1c-74bd0b910d31.png",
      linkedinUrl: "https://www.linkedin.com/in/andresmez2199/"
    }
  ];

  return (
    <section id="team" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-3 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Meet the <span className="gradient-text">Experts</span> Behind Splivix
          </h2>
          <p className="text-foreground/80 text-lg">
            Our team of specialists brings together years of experience in AI, software engineering, and research to deliver cutting-edge solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={member.name}
              name={member.name}
              title={member.title}
              education={member.education}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
