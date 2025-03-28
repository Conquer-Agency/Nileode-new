import React, { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Database, Server, Layout, Cpu, Code2, Cloud, CreditCard, ExternalLink, ChevronRight, X } from "lucide-react"

import  funroundImage from "@/assets/Funround.png"
import  bankosImage from "@/assets/Funround.png"
import  kuukaImage from "@/assets/Funround.png"
import  cncmImage from "@/assets/Funround.png"

declare module "react" {
  interface CSSProperties {
    "--index"?: number
  }
}

export default function ProductsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

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
  ]

  const openCaseStudy = (index: number) => {
    setSelectedProject(index)
    document.body.style.overflow = "hidden"
  }

  const closeCaseStudy = () => {
    setSelectedProject(null)
    document.body.style.overflow = ""
  }

  return (
    <div className="relative py-24">
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
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            openCaseStudy={() => openCaseStudy(index)}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject !== null && <CaseStudyModal project={projects[selectedProject]} onClose={closeCaseStudy} />}
    </div>
  )
}

const ProjectCard = React.forwardRef<
  HTMLDivElement,
  {
    project: {
      title: string
      description: string
      image: string
      link: string
      caseStudy: {
        challenge: string[]
        solution: string[]
        outcome: string[]
      }
      technologies: {
        name: string
        icon: React.ElementType
      }[]
    }
    index: number
    openCaseStudy: () => void
  }
>(({ project, index, openCaseStudy }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <motion.div
      ref={cardRef}
      className="py-12 px-8 flex border border-gray-900/10 rounded-xl mx-auto w-5/6 lg:w-2/3 overflow-hidden shadow-lg"
      style={{
        "--index": index + 1,
      }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
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
    >
      <div className="flex justify-between flex-col gap-12 md:gap-16 w-full items-center">
        <div className="flex flex-col gap-8">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.title}
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ExternalLink className="h-5 w-5" />
              <span className="text-sm font-medium">View Website</span>
            </motion.a>

            <motion.button
              onClick={openCaseStudy}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="text-sm font-medium">Case Study</span>
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        <div className="relative h-full overflow-hidden rounded-xl ">
          <motion.div
            className="absolute w-full"
            style={{ y: translateY }}
            transition={{ ease: "easeOut", duration: 0.8 }}
          >
            <div className=" ">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-full relative mb-1">
                  <img
                    src={project.image}
                    alt={`${project.title} - Image ${i + 1}`}
                    className="object-cover "
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
})

ProjectCard.displayName = "ProjectCard"

function CaseStudyModal({
  project,
  onClose,
}: {
  project: {
    title: string
    link: string
    caseStudy: {
      challenge: string[]
      solution: string[]
      outcome: string[]
    }
    technologies: {
      name: string
      icon: React.ElementType
    }[]
  }
  onClose: () => void
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
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
            <h2 className="text-3xl font-bold">{project.title} Case Study</h2>

            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h4 className="text-xl font-medium mb-4 text-blue-600">Challenge</h4>
              <ul className="list-disc pl-4 space-y-3">
                {project.caseStudy.challenge.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-medium mb-4 text-green-600">Solution</h4>
              <ul className="list-disc pl-4 space-y-3">
                {project.caseStudy.solution.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-medium mb-4 text-purple-600">Outcome</h4>
              <ul className="list-disc pl-4 space-y-3">
                {project.caseStudy.outcome.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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
  )
}

