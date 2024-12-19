import { GraduationCap, Code2, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#121212] border-[#232323] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-[#3ecf8e] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
              <p className="text-gray-400">
                B.Tech in Computer Science
                <br />
                Expected Graduation 2025
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#121212] border-[#232323] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <Code2 className="h-12 w-12 text-[#3ecf8e] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Development</h3>
              <p className="text-gray-400">
                Passionate about web development and creating innovative solutions
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#121212] border-[#232323] shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <Brain className="h-12 w-12 text-[#3ecf8e] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Problem Solving</h3>
              <p className="text-gray-400">
                Strong analytical and algorithmic thinking skills
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 bg-[#121212] border-[#232323] rounded-lg shadow-lg p-6">
          <p className="text-gray-300 leading-relaxed">
            I'm a third-year Computer Science student with a passion for technology and
            innovation. My journey in programming began with curiosity and has evolved into
            a deep love for creating impactful solutions. I specialize in full-stack
            development and have a keen interest in artificial intelligence and machine
            learning.
          </p>
        </div>
      </div>
    </section>
  );
}