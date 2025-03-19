"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  Database,
  Server,
  Layout,
  Cpu,
  Code2,
  Cloud,
  CreditCard,
  ExternalLink,
  ChevronRight,
  X,
} from "lucide-react";

// Import your images
import kuukaImage from "@/assets/kuuka.png";
import cncmImage from "@/assets/cncm.png";
import funroundImage from "@/assets/Funround.png";
import bankosImage from "@/assets/bank.png";
import bgTexture from "@/assets/bg/bg-texture.webp";
import imgTexture from "@/assets/bg/image-texture.png";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Register GSAP plugins
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Set up scroll animations
  useEffect(() => {
    if (!projectsRef.current) return;

    const projects = projectRefs.current.filter(Boolean);

    // Create a timeline for each project
    projects.forEach((project, index) => {
      if (!project) return;

      // Create a timeline for each project
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

      // Animate the project content
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

    // Parallax effect for the heading
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

  // const themes = ["Blue", "Orange", "Navy", "Lime"];

  const projects = [
    {
      title: "FunRound",
      description:
        "FunRound offers an exciting platform where players can engage in mini-games against others globally, with the chance to win cryptocurrency. Experience the thrill of a 60-second race and compete for the top spot!",
      image: funroundImage,
      link: "https://funround.io",
      caseStudy: {
        challenge: [
          "Traditional gaming platforms lacked cryptocurrency integration",
          "Players wanted quick, engaging games with real rewards",
          "Need for a fair and transparent reward system",
        ],
        solution: [
          "Built a blockchain-based gaming platform",
          "Implemented fast-paced 60-second mini-games",
          "Created a secure cryptocurrency reward system",
        ],
        outcome: [
          "Successfully merged gaming with cryptocurrency rewards",
          "Created an engaging global gaming community",
          "Established a transparent and fair reward distribution system",
        ],
      },
      technologies: [
        { name: "Node.js", icon: Server },
        { name: "React", icon: Layout },
        { name: "Next.js", icon: Code2 },
        { name: "Tailwind", icon: Layout },
        { name: "AWS", icon: Cloud },
        { name: "Blockchain", icon: Database },
      ],
    },
    {
      title: "Bankos.ai",
      description:
        "An AI-powered loan processing system that revolutionizes traditional banking workflows through intelligent automation and real-time communication.",
      image: bankosImage,
      link: "https://bankos.ai",
      caseStudy: {
        challenge: [
          "Traditional loan processing systems were slow and inefficient",
          "Manual document processing created bottlenecks",
          "Lack of real-time communication between stakeholders",
        ],
        solution: [
          "Developed 3 integrated components",
          "The loan management portal, AI loan assistant, and loan application portal",
        ],
        outcome: ["Streamlined loan application workflows"],
      },
      technologies: [
        { name: "React", icon: Layout },
        { name: "Node.js", icon: Server },
        { name: "AI/ML", icon: Cpu },
        { name: "AWS", icon: Cloud },
      ],
    },
    {
      title: "Kuuka E-commerce",
      description:
        "Kuuka is a platform that allows you to create your own e-commerce store in minutes. We built the platform from scratch and integrated it with Stripe for payments.",
      image: kuukaImage,
      link: "https://kuuka.co.uk",
      caseStudy: {
        challenge: [
          "UK local retailers were struggling to compete with large e-commerce platforms",
          "Traditional e-commerce delivery wasn't meeting consumer's immediate needs",
        ],
        solution: [
          "Implemented real-time order tracking system",
          "Created a platform connecting local stores, brands, and consumers",
        ],
        outcome: [
          "Created a new standard for local commerce",
          "Eliminated missed deliveries through real-time tracking",
        ],
      },
      technologies: [
        { name: "React", icon: Layout },
        { name: "Node.js", icon: Server },
        { name: "AWS", icon: Cloud },
        { name: "Stripe", icon: CreditCard },
      ],
    },
    {
      title: "CNCM",
      description:
        "The purpose of the system is copyright and neighboring rights management, Including license management. Members that are registered on this system can easily manage their copyright and license using the system. Usage reports are generated to make the workflow easy and traceable.",
      image: cncmImage,
      link: "https://cncmethiopia.com/",
      caseStudy: {
        challenge: [
          "Difficulty in protecting intellectual property rights for creators",
          "Unauthorized use of creative works",
        ],
        solution: [
          "Advanced tracking system for monitoring content usage",
          "Automated royalty collection and distribution",
        ],
        outcome: [
          "Protected intellectual property rights",
          "Fair compensation for work",
          "Transparent royalty distribution",
        ],
      },
      technologies: [
        { name: "Node.js", icon: Server },
        { name: "React", icon: Layout },
        { name: "PostgreSQL", icon: Database },
        { name: "Digital Ocean", icon: Cloud },
        { name: "Remix", icon: Code2 },
      ],
    },
  ];

  const openCaseStudy = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = "hidden"; 
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = ""; 
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="text-center my-12 projects-heading">
        <motion.h1
          className="text-6xl font-poppins font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Success Stories
        </motion.h1>
        <motion.p
          className="text-xl max-w-md mx-auto font-railway text-gray-600 mt-3 italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transforming businesses through innovative solutions
        </motion.p>
      </div>

      <div ref={projectsRef} className="relative pb-[50vh]">
        {projects.map((project, index) => {
          // const theme = themes[index % themes.length];
          const variation = index % 2 === 0 ? "imageOnLeft" : "imageOnRight";

          return (
            <motion.div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className={clsx(
                "sticky top-[calc(var(--index)*2rem)]",
                "py-12 px-8 min-h-[50vh] flex items-center border border-gray-900/50 rounded-md mx-8 font-railway mb-12",
                "bg-gray-100 text-black"
              )}
              style={{
                "--index": index + 1,
                backgroundImage: `url(${bgTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setIsHovering(index)}
              onHoverEnd={() => setIsHovering(null)}
            >
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24 w-full">
                <motion.div
                  className={clsx(
                    "flex flex-col items-center gap-8 text-center md:items-start md:text-left project-content",
                    variation === "imageOnLeft" && "md:order-2"
                  )}
                >
                  <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h2>

                  <motion.p
                    className="max-w-5xl text-lg leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="w-full mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          className="tech-pill flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + i * 0.1,
                            ease: "easeOut",
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          <tech.icon className="h-5 w-5" />
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        "inline-block px-8 py-3 rounded-full text-lg font-medium",
                        "transition-all bg-blue-500 text-white flex items-center justify-between gap-2 text-xl"
                      )}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <ExternalLink className="text-white h-5 w-5" />
                      <span className="text-white text-sm font-medium">
                        View Website
                      </span>
                    </motion.a>

                    <motion.button
                      onClick={() => openCaseStudy(index)}
                      className={clsx(
                        "inline-block px-8 py-3 rounded-full text-lg font-medium",
                        "transition-all bg-white border border-blue-500 text-blue-500 flex items-center justify-between gap-2 text-xl"
                      )}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <span className="text-sm font-medium">Case Study</span>
                      <ChevronRight className="h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  className="relative h-64 rounded-xl overflow-hidden project-image"
                  style={{
                    backgroundImage: `url(${imgTexture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: isHovering === index ? 1.05 : 1,
                      transition: { duration: 0.5 },
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/0 flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    {isHovering === index && (
                      <motion.span
                        className="text-white text-2xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.span>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCaseStudy}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">
                    {projects[selectedProject].title} Case Study
                  </h2>
                  <button
                    onClick={closeCaseStudy}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-medium mb-4 text-blue-600">
                      Challenge
                    </h4>
                    <ul className="list-disc pl-4 space-y-3">
                      {projects[selectedProject].caseStudy.challenge.map(
                        (item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="text-gray-700"
                          >
                            {item}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xl font-medium mb-4 text-green-600">
                      Solution
                    </h4>
                    <ul className="list-disc pl-4 space-y-3">
                      {projects[selectedProject].caseStudy.solution.map(
                        (item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                            className="text-gray-700"
                          >
                            {item}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="text-xl font-medium mb-4 text-purple-600">
                      Outcome
                    </h4>
                    <ul className="list-disc pl-4 space-y-3">
                      {projects[selectedProject].caseStudy.outcome.map(
                        (item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                            className="text-gray-700"
                          >
                            {item}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-xl font-medium mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[selectedProject].technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
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
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href={projects[selectedProject].link}
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
    </div>
  );
};

export default ProjectsSection;
