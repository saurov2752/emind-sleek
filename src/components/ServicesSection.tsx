import { Code, Cloud, Shield, Smartphone, Database, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business requirements and scale with your growth.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services to modernize your operations.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security assessments and solutions to protect your digital assets and data.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics solutions.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Leverage cutting-edge AI to automate processes and unlock new business opportunities.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 bg-card rounded-2xl border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "var(--gradient-card-hover)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
