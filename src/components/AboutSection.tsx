import { Target, Users, Award, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We focus on delivering solutions that create real value for your business.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work as an extension of your team.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted Technology Partner Since 2016
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              NexaTech is a forward-thinking IT company dedicated to helping businesses 
              navigate the complexities of digital transformation. With a team of experienced 
              developers, designers, and strategists, we deliver technology solutions that 
              drive growth and innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in building long-term partnerships with our clients, understanding 
              their unique challenges, and crafting solutions that not only meet today's needs 
              but also prepare them for tomorrow's opportunities.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
