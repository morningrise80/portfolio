import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // 🔹 Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Responsive Design", level: 85, category: "frontend" },

  // 🔹 Backend
  { name: "Java", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Node.js & Express", level: 75, category: "backend" },
  { name: "RESTful APIs", level: 80, category: "backend" },
  { name: "SQL (MySQL/PostgreSQL)", level: 75, category: "backend" },
  { name: "Spring Boot", level: 70, category: "backend" },

  // 🔹 Tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma (UI/UX)", level: 75, category: "tools" },
  { name: "VS Code / IntelliJ", level: 95, category: "tools" },
  { name: "Postman (API Testing)", level: 80, category: "tools" },
  { name: "Agile/Scrum", level: 85, category: "tools" },
  { name: "AWS EC2", level: 75, category: "tools" },
  { name: "AWS Lambda", level: 70, category: "tools" },
  { name: "AWS ECS", level: 65, category: "tools" },
  { name: "AWS VPC", level: 65, category: "tools" },
  { name: "AWS S3 Buckets", level: 80, category: "tools" },

  // 🔹 Machine Learning
  {
    name: "Supervised Learning (Classification)",
    level: 80,
    category: "machine-learning",
  },
  { name: "Scikit-learn", level: 85, category: "machine-learning" },
  { name: "TensorFlow / Keras", level: 80, category: "machine-learning" },
  { name: "PyTorch", level: 70, category: "machine-learning" },
  { name: "NumPy", level: 90, category: "machine-learning" },
  { name: "Pandas", level: 80, category: "machine-learning" },
  {
    name: "Data Preprocessing & Feature Engineering",
    level: 80,
    category: "machine-learning",
  },
  {
    name: "Model Evaluation (Accuracy, Precision, Recall, F1)",
    level: 85,
    category: "machine-learning",
  },
  { name: "Weka / ML Tools", level: 70, category: "machine-learning" },
];
const categories = ["frontend", "backend", "tools", "machine-learning"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                activeCategory === category
                  ? // Active
                    "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:brightness-110"
                  : // Inactive + hover effects
                    "bg-secondary/70 text-foreground ring-1 ring-border hover:bg-secondary hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(139,92,246,0.35)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
