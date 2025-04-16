import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Rocket, DollarSign, Globe } from "lucide-react";
// import { TextPhysics } from "@/components/TextPhysics";

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const isTextInView = useInView(textRef, { once: false, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.5 });
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.5 });

  const stats = [
    {
      icon: Users,
      value: "6+",
      label: "Years Experience",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      value: "5+",
      label: "Global Clients",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Rocket,
      value: "40+",
      label: "Projects Delivered",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: DollarSign,
      value: "85%",
      label: "Cost Savings",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-24 overflow-hidden font-poppins"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 3, delay: 0.6 }}
            viewport={{ once: false }}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div ref={textRef} className="space-y-4 sm:space-y-6">
            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              custom={0}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Nileode Technologies is the result of a shared vision among
              skilled freelance developers who have spent over 6 years
              collaborating with international clients on diverse, high-impact
              projects. Our experience working with global businesses has given
              us deep insights into delivering exceptional solutions across
              industries.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              custom={1}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              By joining forces, we've created a company that bridges the gap
              between world-class talent and cost-effective solutions. We
              believe in leveraging our collective expertise to provide
              businesses with access to top-tier IT professionals, ensuring
              high-quality outcomes at significantly lower operational costs.
            </motion.p>
          </div>

          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 gap-6"
            variants={statsContainerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform-gpu"
                variants={statItemVariants}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div
                    className={`p-2 sm:p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 relative`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-lg`}
                    ></div>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* <TextPhysics /> */}

        <motion.div
          ref={ctaRef}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center relative overflow-hidden"
          variants={ctaVariants}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
            Elevate Your Business, Cut the Costs
          </h3>
          <motion.a
            href="/service#request-talent"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 relative z-10"
            whileHover={{
              y: -3,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ y: 0 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
