import { motion } from "framer-motion";
import { Home, Timer, Users } from "lucide-react";


const models = [
  {
    id: "outstaffing",
    title: "Outstaffing",
    icon: Home,
    description:
      "Our outstaffing model brings our skilled team to work with yours, offering a flexible and cost-friendly solution for your project requirements.",
  },
  {
    id: "time-materials",
    title: "Time and materials",
    icon: Timer,
    description:
      "The cost is based on the amount of time and resources spent on custom software development. We charge hourly or daily rates, and the final cost is calculated based on the actual effort expended.",
  },
  {
    id: "dedicated-team",
    title: "Dedicated team",
    icon: Users,
    description:
      "We provide a dedicated team of developers that provides custom software development services exclusively for your project. The cost is based on a monthly rate for the team's services.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CooperationModels() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={containerVariants}
        className="space-y-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1e293b] text-center max-w-4xl mx-auto"
        >
          Our Cooperation Models for Custom Software Development Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <motion.div
              key={model.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6 flex-col-reverse">
                  <h3 className="text-2xl font-semibold text-[#8b5cf6]">
                    {model.title}
                  </h3>
                    <model.icon className="w-12 h-12 text-blue-500 flex-shrink-0" />
                </div>
                <p className="text-[#64748b] leading-relaxed">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
