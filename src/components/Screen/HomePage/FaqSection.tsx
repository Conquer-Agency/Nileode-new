import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Nileode Technologies?",
    answer:
      "Nileode is an IT outsourcing powerhouse, offering custom software development, IT consulting, and systems integration. We're help businesses modernize their tech infrastructure with a blend of classic and forward thinking solutions.",
  },
  {
    question: "What services do you offer?",
    answer:
      "From building tailored software solutions to advising on IT strategy and integrating systems, Nileode ensures smooth tech operations without the corporate jargon—just solid, reliable service.",
  },
  {
    question: "Who do we work with?",
    answer:
      "Startups, enterprises, and businesses of all sizes .Nileode customizes its approach to fit diverse industries, ensuring every client gets a solution that works for them.",
  },
  {
    question: "How does Nileode approach a new project?",
    answer:
      "We start with a deep dive into your current systems and needs, then craft a roadmap that aligns with your goals. In short: listen, plan, execute—no fluff, just results.",
  },
  {
    question: "What makes Nileode different?",
    answer:
      "It's our balance between time-tested methods and modern innovation. we don't reinvent the wheel they ensure it runs smoother and lasts longer with the latest tech enhancements.",
  },
  {
    question: "How do we ensure quality?",
    answer:
      "Nileode prioritizes quality through proven methodologies, continuous communication, and rigorous testing, ensuring every solution meets and exceeds industry standards.",
  },
 
];



export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, approach, and
            how we can help your business succeed.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className={cn(
                "border-b border-gray-200 py-6",
                index === 0 && "border-t"
              )}
            >
              <div
                onClick={() => toggleExpand(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none group "
              >
                <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  {expandedIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="pt-4 prose prose-blue max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: faq.answer
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
