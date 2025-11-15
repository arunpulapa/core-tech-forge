import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; // install with npm i react-parallax-tilt
import housing from "@/assets/housing.png"
import resturent from "@/assets/resturent.jpg"
import tax from "@/assets/tax.jpg"

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "AI Image Generator",
    description: "Create realistic images from prompts with AI-powered models.",
    image: "https://i.pinimg.com/736x/02/61/96/026196c12bf94ebae9533c5d06e20bfe.jpg",
    category: "AI",
  },
  {
    title: "HRM Dashboard",
    description: "Manage employees, attendance, and payroll efficiently.",
    image: "https://i.pinimg.com/736x/21/ce/96/21ce960479fc576304613e852c7d4f59.jpg",
    category: "Web",
  },
  {
    title: "E-Commerce Platform",
    description: "A modern platform for selling products online.",
    image: "https://i.pinimg.com/1200x/76/30/85/7630856095ac7979117823645648bcb5.jpg",
    category: "Web",
  },
  {
    title: "Delivery App",
    description: "Grocery and food delivery app with React Native & Expo.",
    image: "https://i.pinimg.com/1200x/ab/5b/f0/ab5bf05f7b7b9231a4460607e1e04904.jpg",
    category: "Mobile",
  },
  {
    title: "Housing Society App",
    description: "Manage residents, visitors, maintenance requests, and announcements efficiently.",
    image: housing,
    category: "Mobile",
  },
  {
    title: "Tax Management Dashboard",
    description: "Admin dashboard for tax company to manage clients, teams, and financial reports.",
    image: tax,
    category: "Web",
  },
  {
    title: "Icon Filers",
    description: "A modern, responsive company website with corporate branding, services showcase, and contact integration.",
    image: "https://i.pinimg.com/736x/7a/9e/3a/7a9e3abe745a468b32dd81c5e4cd2eb6.jpg",
    category: "Web",
  },
  {
    title: "Restaurant Management System",
    description: "Manage orders, menus, staff, and customer feedback efficiently.",
    image: resturent,
    category: "Web",
  },
];


const categories = ["All", "Web", "Mobile", "AI"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-section-bg text-foreground gradient-mesh">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="neon-text-secondary font-medium mb-2 tracking-wider">| Our Projects</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
          Recent Works & <span className="neon-text-primary">Innovations</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base relative transition-all duration-300 ${
                selectedCategory === cat
                  ? "gradient-primary neon-border-primary shadow-2xl"
                  : "glass hover:neon-border-secondary"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-white rounded-full animate-pulse-glow"></span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={400}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="glass-card neon-border-secondary hover:neon-border-primary relative overflow-hidden shadow-2xl cursor-pointer group border-2 transition-all"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 neon-border-secondary"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-background/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 rounded-2xl"
                >
                  <span className="text-xs uppercase text-secondary font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 neon-text-primary">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="mt-4 px-4 py-2 gradient-primary neon-border-primary rounded-full font-semibold hover:scale-105 transition-all"
                    >
                      View Project
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
          <motion.button
            className="px-8 py-3 gradient-primary neon-border-primary font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
          >
            See More Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
