import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Learning Platform",
    description: "A full-stack web application for online learning with video courses, quizzes, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/shubham/elearning",
    demo: "https://elearning-demo.com"
  },
  {
    title: "Smart Home Dashboard",
    description: "IoT dashboard for monitoring and controlling smart home devices with real-time updates.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    tech: ["Vue.js", "Firebase", "MQTT", "Chart.js"],
    github: "https://github.com/shubham/smart-home",
    demo: "https://smarthome-demo.com"
  },
  {
    title: "AI Image Generator",
    description: "Web application that generates unique images using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "https://github.com/shubham/ai-image-gen",
    demo: "https://ai-image-gen-demo.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-[#1c1c1c] border-[#232323] overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#232323] text-[#3ecf8e] text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-[#232323] px-6 py-4">
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-[#3ecf8e] text-[#3ecf8e] hover:bg-[#3ecf8e] hover:text-black"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-[#3ecf8e] hover:bg-[#4ffca6] text-black"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}