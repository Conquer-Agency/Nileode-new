import { motion } from "framer-motion";
import {
  Database,
  Server,
  Layout,
  Cpu,
  Code2,
  Cloud,
  CreditCard,
} from "lucide-react";

import bankosImage from "@/assets/bank.png";
import kuukaImage from "@/assets/WEBSITE MOCKUP 2.jpg";
import cncmImage from "@/assets/WEBSITE MOCKUP.jpg";
import funroundImage from "@/assets/WEBSITE MOCKUP 3.jpg";
import { ProjectCard } from "@/components/ProjectCard";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

export default function ProductsSection() {
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
      subtitle:
        " A loan management portal, AI loan assistant, and loan application portal",
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
    <div className="relative py-24 min-h-screen">
      <div className="text-center mb-24">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Success Stories
        </motion.h1>
        <motion.p
          className="text-xl max-w-md mx-auto text-gray-600 mt-3 italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transforming businesses through innovative solutions
        </motion.p>
      </div>

      <div className="space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 w-9/12 mx-auto ">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
