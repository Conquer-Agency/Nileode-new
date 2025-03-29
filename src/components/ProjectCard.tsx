import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ExternalLink, X } from "lucide-react";

interface Technology {
  name: string;
  icon: React.ElementType;
}

interface CaseStudy {
  challenge: string[];
  solution: string[];
  outcome: string[];
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  caseStudy: CaseStudy;
  technologies: Technology[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isEven = index % 2 === 0;

  console.log("Project : ", project);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!projectsRef.current) return;

    const projects = projectRefs.current.filter(Boolean);

    projects.forEach((project, index) => {
      if (!project) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // Animate the project card
      tl.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      const content = project.querySelector(".project-content");
      const image = project.querySelector(".project-image");
      const techs = project.querySelectorAll(".tech-pill");

      if (content && image) {
        tl.fromTo(
          content,
          { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=0.8"
        );

        tl.fromTo(
          image,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=0.6"
        );
      }

      if (techs.length) {
        tl.fromTo(
          techs,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
          },
          "-=0.4"
        );
      }
    });

    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-heading",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    headingTl.fromTo(
      ".projects-heading h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    headingTl.fromTo(
      ".projects-heading p",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.8"
    );
  }, []);

  const openCaseStudy = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = "hidden";
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  //   console.log(index);

  return (
    <>
      <motion.div
        className={`group transition-all duration-500 hover:scale-[1.02] w-11/12 mx-auto ${
          !isEven ? "mt-20" : ""
        }`}
        onClick={() => openCaseStudy(index)}
        ref={(el) => {
          projectRefs.current[index] = el;
        }}
        initial={{ y: 50 }}
        whileInView={{
          // opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.1,
            ease: "easeOut",
          },
        }}
        viewport={{ once: false, margin: "-100px" }}
        whileHover={{
          // scale: 1.02,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 },
        }}
      >
        <div className=" ">
          <div className="mt-8 ">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 ">
              <div className="absolute inset-0 bg-black rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-gray-600">{project.subtitle}</p>
              </div>
              <span className="text-gray-400">2024</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-black/10 px-3 py-2 rounded-md text-sm"
                >
                  <Icon size={16} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence mode="popLayout">
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCaseStudy}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-3xl md:text-4xl font-bold">{project.title} Case Study</h2>
                      <button
                        onClick={closeCaseStudy}
                        className="p-2 rounded-full hover:bg-gray-100 shrink-0"
                      >
                        <X className="h-8 w-8 " />
                      </button>
                    </div>
                    <p className="font-light mt-2 text-sm md:text-base">{project.description}</p>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-medium mb-4 text-blue-600">Challenge</h4>
                    <ul className="list-disc pl-4 space-y-3">
                      {project.caseStudy.challenge.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          className="text-gray-700"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xl font-medium mb-4 text-green-600">Solution</h4>
                    <ul className="list-disc pl-4 space-y-3">
                      {project.caseStudy.solution.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                          className="text-gray-700"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="text-xl font-medium mb-4 text-purple-600">Outcome</h4>
                    <ul className="list-disc pl-4 space-y-3">
                      {project.caseStudy.outcome.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                          className="text-gray-700"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-xl font-medium mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                      >
                        <tech.icon className="h-5 w-5 text-blue-500" />
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="mt-8 flex justify-end"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
