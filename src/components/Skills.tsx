import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = {
  technical: [
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "Java", level: 65 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Docker", level: 60 },
    { name: "AWS", level: 55 },
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#121212] border-[#232323] shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.technical.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#3ecf8e]">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="bg-[#232323] [&>div]:bg-[#3ecf8e]" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#121212] border-[#232323] shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Tools & Technologies
              </h3>
              <div className="space-y-6">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#3ecf8e]">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="bg-[#232323] [&>div]:bg-[#3ecf8e]" 
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}