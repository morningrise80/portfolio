import { Briefcase, Code, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="opacity-0 animate-fade-in text-3xl md:text-4xl font-bold text-foreground transition-colors">
              About <span className="text-primary">ME</span>
            </h2>

            <h3 className="opacity-0 animate-fade-in-delay-1 text-xl md:text-2xl font-semibold tracking-wide italic text-foreground/90 transition-colors">
              A Passionate Software Developer
            </h3>

            <p className="opacity-0 animate-fade-in-delay-2 text-lg leading-relaxed text-foreground/80 transition-colors">
              I am a recent college graduate in Computer Programming and
              Analysis from Humber College, with strong expertise in{" "}
              <span className="text-pink-500 dark:text-pink-400 font-semibold transition-colors">
                Java
              </span>
              ,
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold transition-colors">
                {" "}
                JavaScript
              </span>
              , and{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold transition-colors">
                Python
              </span>
              . I am proficient in modern frameworks such as
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors">
                {" "}
                React.js
              </span>
              , which I used to build this website, along with{" "}
              <span className="text-teal-600 dark:text-teal-400 font-semibold transition-colors">
                Tailwind CSS
              </span>
              . My passion lies in creating efficient, user-friendly
              applications while continuously learning and adapting to new
              technologies.
            </p>

            <div className="opacity-0 animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="opacity-0 animate-fade-in-delay-2 gradient-border p-6 card-hover transition-colors bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground transition-colors">
                    Web Development
                  </h4>
                  <p className="text-foreground/70 transition-colors">
                    Building responsive, full-stack web apps with attention to
                    performance, security, and scalable architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-delay-3 gradient-border p-6 card-hover transition-colors bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground transition-colors">
                    UI/UX Design
                  </h4>
                  <p className="text-foreground/70 transition-colors">
                    Delivering clean, accessible interfaces that improve task
                    success and engagement through user-centered design.
                  </p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-delay-4 gradient-border p-6 card-hover transition-colors bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground transition-colors">
                    Project Management
                  </h4>
                  <p className="text-foreground/70 transition-colors">
                    Leading delivery with agile practices, clear communication,
                    and a strong focus on quality outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
