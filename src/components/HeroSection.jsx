import { ArrowDown } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
            <div className="opacity-0 animate-fade-in">Hello,</div>
            <div className="opacity-0 animate-fade-in-delay-1 text-indigo-500">
              And
            </div>
            <div className="opacity-0 animate-fade-in-delay-2 text-pink-500">
              Welcome
            </div>
          </h1>

          {/* Intro Line */}
          <div className="opacity-0 animate-fade-in-delay-3 text-2xl md:text-3xl font-bold tracking-tight text-center mt-8">
            <span>My name is</span>{" "}
            <span className="text-indigo-500">Amir</span>{" "}
            <span>and this is my portfolio</span>
          </div>

          {/* Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-indigo-500 transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll + Arrow (reuse delay-4 too) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-muted-foreground mb-2">scroll</span>
        <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};
