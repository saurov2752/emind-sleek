import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import adminDashboardBg from "@/assets/admin-dashboard-bg.jpg";
import ecommerceUserBg from "@/assets/ecommerce-user-bg.jpg";

const projects = [
  {
    title: "eMind Admin Hub",
    category: "Ecommerce Solution",
    description:
      "Empower your business with our sleek, feature-rich admin panel. Combining a stunning UI with intuitive controls, it’s the ultimate admin-friendly solution designed for seamless, high-performance ecommerce management.",
    technologies: ["Laravel", "Php", "MySql", "JWT Auth"],
    backgroundImage: adminDashboardBg,
    demoUrl: "https://admin.debuggermind.com",
    docsUrl: "https://emind-backend-documentation.vercel.app/BackendDocumentation.html",
  },
  {
    title: "eMind AI Powered Web App",
    category: "Ecommerce Solution",
    description:
      "Experience the future of retail with our AI-powered ecommerce platform. Blending a stunning modern UI with elite performance, it delivers a seamless, user-friendly shopping journey designed for high-conversion growth.",
    technologies: ["Next.js", "React", "Google AI"],
    backgroundImage: ecommerceUserBg,
    demoUrl: "https://emind.debuggermind.com",
    docsUrl: "https://instagram.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let’s Explore The eMind
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the eMind and see how we help businesses achieve their goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Project Header with background image */}
              <div 
                className="h-48 p-8 flex flex-col justify-end relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${project.backgroundImage})` }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                
                <span className="text-primary-foreground/80 text-sm font-medium mb-1 relative z-10">
                  {project.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground relative z-10">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="demo" size="lg" className="w-full sm:w-auto">
                      View Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="docs" size="lg" className="w-full sm:w-auto">
                      Documentation
                      <FileText className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
