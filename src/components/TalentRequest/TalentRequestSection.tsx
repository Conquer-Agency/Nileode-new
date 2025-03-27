import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users2, Clock, CheckCircle2 } from "lucide-react";


const features = [
  {
    icon: Users2,
    title: 'Expert Matching',
    description: 'Get matched with pre-vetted developers who perfectly fit your requirements'
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    description: 'Receive a response from our team within 24 hours of your request'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Guaranteed',
    description: 'All our talents go through a rigorous vetting process'
  }
];

const technologies = [
  '.NET', 'React', 'Node.js', 'Python', 'Java', 'Angular',
  'Vue.js', 'PHP', 'Ruby', 'iOS', 'Android', 'Flutter'
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const viewportConfig = {
  margin: "-30%", // Triggers animation when element is 30% from view
  once: false, // This is the key change to allow re-triggering
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

const featureVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "backOut",
    },
  }),
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function TalentRequestSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    technology: ".NET",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <motion.section
      id="request-talent"
      className="bg-gradient-to-br from-gray-50 via-white to-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            viewport={viewportConfig}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Request a Talent
          </motion.h2>
          <motion.p
            variants={itemVariants}
            viewport={viewportConfig}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Connect with top-tier developers who can bring your vision to life
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-5 gap-8 items-start"
          variants={containerVariants}
          viewport={viewportConfig}
        >
          {/* Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={itemVariants}
            viewport={viewportConfig}
          >
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  {/* Name Input */}
                  <motion.div
                    variants={formItemVariants}
                    viewport={{ once: false }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </motion.div>

                  {/* Company Input */}
                  <motion.div variants={formItemVariants}>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={formItemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </motion.div>

                  {/* Technology Select */}
                  <motion.div variants={formItemVariants}>
                    <label
                      htmlFor="technology"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Required Technology
                    </label>
                    <select
                      id="technology"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.technology}
                      onChange={(e) =>
                        setFormData({ ...formData, technology: e.target.value })
                      }
                    >
                      {technologies.map((tech) => (
                        <option key={tech} value={tech}>
                          {tech}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </motion.div>

                {/* Description Textarea */}
                <motion.div variants={formItemVariants}>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="write about your project here..."
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mt-3"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-end"
                  variants={formItemVariants}
                  viewport={viewportConfig}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Request Talent
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                // viewport={viewportConfig}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-100 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 15 }}
                    viewport={viewportConfig}
                  >
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
