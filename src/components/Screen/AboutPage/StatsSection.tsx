import { motion } from "framer-motion";
import { CheckCircle, Trophy, Users } from "lucide-react";
// import { AnimatePresence } from "framer-motion";

const stats = [
  {
    icon: <Trophy className="text-blue-500 size-16 " />,
    number: "6 + ",
    label: "Years Experience",
    description:
      "Proven track record of delivering enterprise-grade IT solutions across industries",
  },
  {
    icon: <CheckCircle className="text-blue-500 size-16" />,
    number: "99.9%",
    label: " Project Success Rate",
    description: "Consistent delivery of projects on time and within budget",
  },
  {
    icon: <Users className="text-blue-500 size-16" />,
    number: "15+",
    label: "Expert Developers",
    description:
      "Skilled professionals across all major technologies and platforms",
  },
];

const statVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-24 px-4 h-[90vh] flex items-center ">
      <div className="mx-auto w-10/12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-300 rounded-md"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-left p-6 border-l "
            >
              <div className="mb-4">
                <motion.span
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  className="  text-blue-600 bg-white rounded-full"
                >
                  {stat.icon}
                </motion.span>
                <motion.span
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  className="text-6xl font-bold text-blue-600 block mt-6"
                >
                  {stat.number}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-semibold mt-4 mb-2"
                >
                  {stat.label}
                </motion.h3>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 max-w-xs"
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
