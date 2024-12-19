import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#121212] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Hi, I'm <span className="text-[#3ecf8e]">Shubham Choudhary</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl">
          A passionate Computer Science student with a focus on creating innovative solutions
          through code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-[#3ecf8e] hover:bg-[#4ffca6] text-black"
            asChild
          >
            <a href="#projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#3ecf8e] text-[#3ecf8e] hover:bg-[#3ecf8e] hover:text-black"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}