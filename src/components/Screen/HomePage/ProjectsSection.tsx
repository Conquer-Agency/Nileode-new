import { useEffect, useRef } from "react";
// import clsx from "clsx";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Database, Server, Layout, Cpu, Code2, Cloud, CreditCard } from "lucide-react";

import kuukaImage from "@/assets/WEBSITE MOCKUP 2.jpg";
import cncmImage from "@/assets/WEBSITE MOCKUP.jpg";
import funroundImage from "@/assets/Funround.png";
import bankosImage from "@/assets/bank.png";
import { ProjectCard } from "@/components/ProjectCard";
// import bgTexture from "@/assets/bg/bg-texture.webp";
// import imgTexture from "@/assets/bg/image-texture.png";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

const ProjectsSection = () => {
  // const [selectedProject, setSelectedProject] = useState<number | null>(null);
  // const [isHovering, setIsHovering] = useState<number | null>(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const projects = [
    {
      title: "Kuuka E-commerce",
      subtitle: "A platform connecting local stores, brands, and consumers",
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
      subtitle: "Advanced tracking system for monitoring content usage",
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
    {
      title: "FunRound",
      subtitle: "A blockchain-based gaming platform ",
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
      subtitle: " A loan management portal, AI loan assistant, and loan application portal",
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
  ];

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

      <div className="relative pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 w-9/12 mx-auto ">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
