import clsx from "clsx";
import {
//   ExternalLink,
  Database,
//   Globe,
//   Smartphone,
  Server,
  Layout,
  Cpu,
  Code2,
  Cloud,
  CreditCard,
  ExternalLink,
} from "lucide-react";
import kuukaImage from "@/assets/kuuka.png";
import cncmImage from "@/assets/cncm.png";
import funroundImage from "@/assets/Funround.png";
import bankosImage from "@/assets/bankos.png";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

const ProjectsSection = () => {
  const themes = ["Blue", "Orange", "Navy", "Lime"];


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


  return (
    <div className="relative">
      {projects.map((project, index) => {
        const theme = themes[index % themes.length];
        const variation = index % 2 === 0 ? "imageOnLeft" : "imageOnRight";

        return (
          <div
            key={project.title}
            className={clsx(
              "sticky top-[calc(var(--index)*2rem)]",
              "py-16 px-8 min-h-screen flex items-center  border border-gray-900/50 rounded-md mx-8 font-railway",
              theme === "Blue" && "bg-gray-100 text-black",
              theme === "Orange" && "bg-gray-100 text-black",
              theme === "Navy" && "bg-gray-100 text-black",
              theme === "Lime" && "bg-gray-100 text-black"
            )}
            style={{ "--index": index + 1 }}
          >
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24 w-full ">
              <div
                className={clsx(
                  "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
                  variation === "imageOnLeft" && "md:order-2"
                )}
              >
                <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                <p className="max-w-5xl text-lg leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* <div className="w-full mb-8">
                  <h3 className="text-xl font-semibold mb-4">Case Study</h3>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <h4 className="font-medium mb-2">Challenge</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        {project.caseStudy.challenge.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Solution</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        {project.caseStudy.solution.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Outcome</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        {project.caseStudy.outcome.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> */}

                <div className="w-full mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full"
                      >
                        <tech.icon className="h-5 w-5" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "inline-block px-8 py-3 rounded-full text-lg font-medium",
                    "transition-transform hover:scale-105 bg-blue-500 text-white flex items-center justify-between gap-2 text-xl"
                  )}
                >
                  <ExternalLink className="text-white h-5 w-5" />
                  <span className="text-white text-sm font-medium">
                    View Website
                  </span>
                </a>
              </div>

              <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="h-[100vh] bg-gray-100 flex items-center justify-center">
        <p className="text-2xl">End of Projects - Scroll back up</p>
      </div>
    </div>
  );
};

export default ProjectsSection;
