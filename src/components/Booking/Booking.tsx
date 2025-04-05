// import { Modal } from "./ui/Modal";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { Modal } from "../ui/Modal";
import { motion } from "framer-motion";
import { useState } from "react";

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

export function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="booking" className="bg-gray-50">
      <div className="">
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 w-[220px] mt-8"
          >
            Book a call
          </motion.button>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Schedule Your Free Consultation
          </h3>
          <CalendlyEmbed url="https://calendly.com/d/abc-123-xyz/consultation" />
        </div>
      </Modal>
    </section>
  );
}
