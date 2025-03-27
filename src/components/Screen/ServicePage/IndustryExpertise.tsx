import { motion } from "framer-motion";
import {
  CreditCard,
  GraduationCap,
  ShoppingCart,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "fintech",
    title: "Fintech",
    icon: CreditCard,
    description:
      "Financial technology companies rely on us to build user-friendly platforms for online banking, investing, insurance, and more. Our expertise in blockchain, AI, and cybersecurity allows us to create innovative products that transform the FinTech landscape.",
  },
  {
    id: "edtech",
    title: "Edtech",
    icon: GraduationCap,
    description:
      "Education technology companies turn to us to develop interactive learning tools, management software, and online courses. We help EdTech brands expand access to education and improve outcomes for students of all ages.",
  },
  {
    id: "retail",
    title: "Retail",
    icon: ShoppingCart,
    description:
      "We partner with retailers to build seamless e-commerce experiences, streamline operations, and connect brands with customers. Our custom software development solutions include online stores, mobile apps, loyalty programs, and analytics tools that boost sales and improve satisfaction.",
  },
  {
    id: "realestate",
    title: "Real estate",
    icon: Building2,
    description:
      "Property owners and managers use our custom software solutions to list rentals, process leases and payments, oversee maintenance requests, and market to prospective tenants. We provide digital tools that simplify real estate transactions and management.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// New animation variant for grid items
const gridItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

export default function IndustryExpertise() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        {/* Title Section */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">
            Industry Expertise
          </h2>
          <motion.p variants={itemVariants} className="text-lg text-[#64748b]">
            We provide custom solutions for companies in several high-growth
            industries:
          </motion.p>
        </motion.div>

        {/* Button */}
        <motion.div variants={itemVariants}>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 w-[220px]"
            >
              Book a call
            </motion.button>
          </Link>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={gridItemVariants}
              custom={index}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  className="text-[#8b5cf6] mt-1"
                  whileHover={{ rotate: 15 }}
                >
                  <industry.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#8b5cf6]">
                  {industry.title}
                </h3>
              </div>
              <motion.p
                className="text-[#64748b] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                {industry.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
