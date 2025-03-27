import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Logo from "@/assets/nileode.png";

const technologies = {
  backend: [".Net", "Python", "Node.js", "Java", "PHP", "GO"],
  frontend: [
    "CSS 3",
    "Java Script",
    "React",
    "Ember",
    "HTML 5",
    "Angular",
    "Vue.js",
    "Next",
  ],
  desktop: ["AWS", "Azure", "Rackspace", "Google Cloud", "Digital Ocean"],
  mobile: ["C++", "Python", "Qt", "Microsoft WPF", "C#", "Swift"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function TechnologyStack() {
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
          variants={categoryVariants}
          className="text-4xl md:text-5xl font-bold text-[#1e293b]"
        >
          Technology Stack We Use
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          variants={containerVariants}
        >
          {/* Backend */}
          <motion.div
            variants={categoryVariants}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-[#1e293b] mb-6">Back-end</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.backend.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={listItemVariants}
                  viewport={{ once :false}}
                  custom={index}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check size={14} className="text-[#8b5cf6]" />
                  </motion.div>
                  <motion.span
                    className="text-[#64748b]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                  >
                    {tech}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            variants={categoryVariants}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-[#1e293b] mb-6">Front-end</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.frontend.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={listItemVariants}
                  custom={index}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check size={14} className="text-[#8b5cf6]" />
                  </motion.div>
                  <motion.span
                    className="text-[#64748b]"
                    initial={{ y: -50 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                  >
                    {tech}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Logo */}
          <motion.div
            variants={categoryVariants}
            className="hidden lg:flex items-center justify-center row-span-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.4,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <img
                src={Logo}
                alt="Technology logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Desktop */}
          <motion.div
            variants={categoryVariants}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-[#1e293b] mb-6">Desktop</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.desktop.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={listItemVariants}
                  custom={index}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check size={14} className="text-[#8b5cf6]" />
                  </motion.div>
                  <motion.span
                    className="text-[#64748b]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                  >
                    {tech}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile */}
          <motion.div
            variants={categoryVariants}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold text-[#1e293b] mb-6">Mobile</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.mobile.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={listItemVariants}
                  custom={index}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check size={14} className="text-[#8b5cf6]" />
                  </motion.div>
                  <motion.span
                    className="text-[#64748b]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                  >
                    {tech}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
