import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "We specialize in building internet-based applications for enterprises, startups, and SMEs. Our team delivers custom web solutions tailored to your business needs, ensuring functionality, scalability, and a seamless user experience.",
    tags: [
      "Custom Web Applications",
      "Cloud-Based Development",
      "Web Solutions",
      "Application Support",
    ],
  },
  {
    id: "mobile-applications",
    number: "02",
    title: "Mobile Applications",
    description:
      "Our team creates scalable mobile apps for e-commerce and on-demand services, ensuring cross-platform compatibility and a seamless user experience.",
    tags: [
      "E-commerce Platforms",
      "On-Demand Service Apps",
      "Cross-Platform Development",
      "Native Applications",
    ],
  },
  {
    id: "devops-solutions",
    number: "03",
    title: "DevOps Solutions",
    description:
      "We offer comprehensive DevOps services, including CI/CD pipeline implementation and cloud infrastructure setup, to enhance your deployment processes and performance.",
    tags: [
      "CI/CD Implementation",
      "Cloud Infrastructure",
      "Deployment Automation",
      "Performance Optimization",
    ],
  },
  {
    id: "ai-powered-tools",
    number: "04",
    title: "AI-Powered Tools",
    description:
      "Leverage intelligent solutions for business insights and optimization through our AI-powered tools, incorporating business analytics, predictive modeling, and machine learning integration.",
    tags: [
      "Business Analytics",
      "Predictive Modeling",
      "Process Optimization",
      "Machine Learning Integration",
    ],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Mobile View */}
        <div className="lg:hidden space-y-24">
          {services.map((service) => (
            <div key={service.id} className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm text-gray-400 font-medium">
                  {service.number}
                </span>
                <h2 className="text-5xl font-bold">{service.title}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-base leading-relaxed text-gray-700 mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-20">
          <div className="space-y-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveService(service.id)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-400 font-medium">
                    {service.number}
                  </span>
                  <h2
                    className={`text-5xl font-bold transition-colors duration-300 ${
                      activeService === service.id
                        ? "text-black"
                        : "text-gray-200"
                    }`}
                  >
                    {service.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="relative ">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: activeService === service.id ? 1 : 0,
                  y: activeService === service.id ? 0 : 20,
                }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className={`absolute top-0 left-0 w-full `}
              >
                <div className="flex flex-wrap gap-2 mb-8 ">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  {service.description}
                </p>

                {/* <div className="border-t border-gray-200 pt-8">
                  <button className="group inline-flex items-center gap-2 text-blue-500 font-medium">
                    Learn more
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
