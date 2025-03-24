import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";


const services = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design",
    description:
      "We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project. While maintaining bespoke originality, our team will focus on responsive design and optimize your website for any device and interface. Your new website will attract desirable target audiences, boost engagement, drive sales, and increase the brand value of your business.",
    tags: [
      "Landing",
      "Brochure Site",
      "Corporate Website",
      "E-Commerce",
      "Web 3.0",
      "UI/UX Design",
    ],
  },
  {
    id: "branding",
    number: "02",
    title: "Branding",
    description:
      "Our branding team will excel at presenting your business in its best light. Whether you're looking to attract a new set of eyes, rekindle an old client base, or simply refine your business's identity - our creatives will formulate the optimal corporate identity, collateral designs, and brand guidelines unique to your company's needs. Armed with your new bespoke brand - you will now be able to captivate engaged new audiences and capitalize on your company's full potential.",
    tags: [
      "Corporate",
      "Beauty",
      "F&B",
      "Web 3.0",
      "Hospitality",
      "Re-Branding",
    ],
  },
  {
    id: "graphic-design",
    number: "03",
    title: "Graphic Design",
    description:
      "Our innovative graphic design team will create the digital and print designs for your project. Having both startup and enterprise experience, our designers consider differing execution and audience demographics when designing a pixel-perfect graphic for each unique client challenge. Following an existing brand guideline or a specific reference in mind, our team will deliver a sleek, clean design within timeline and budget.",
    tags: [
      "Print Graphics",
      "Conference Event Branding",
      "Deck Designs",
      "Digital Brand Collateral",
      "Social Media Designs",
    ],
  },
  {
    id: "packaging-design",
    number: "04",
    title: "Packaging Design",
    description:
      "Transform your product packaging into a compelling brand story. Our packaging design solutions combine aesthetic appeal with functional excellence, ensuring your products stand out on shelves and in digital marketplaces while maintaining brand consistency and meeting all regulatory requirements.",
    tags: [
      "Product Packaging",
      "Retail Packaging",
      "Sustainable Design",
      "Label Design",
      "Package Prototyping",
    ],
  },
  {
    id: "video-production",
    number: "05",
    title: "Video Production",
    description:
      "Bring your brand to life through compelling visual storytelling. Our video production team creates high-impact content that engages your audience across all platforms, from social media shorts to full-scale commercial productions, ensuring your message resonates with professional quality and creative excellence.",
    tags: [
      "Commercial",
      "Corporate",
      "Social Media",
      "Motion Graphics",
      "Event Coverage",
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

                <button className="group inline-flex items-center gap-2 text-[#FF4D00] font-medium">
                  Learn more
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-2 gap-20">
          {/* Left Column - Service List */}
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

          {/* Right Column - Service Details */}
          <div className="relative ">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: activeService === service.id ? 1 : 0,
                  y: activeService === service.id ? 0 : 20,
                }}
                viewport={{ once:false}}
                transition={{ duration: 0.3 ,delay:0.2 }}
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

                <div className="border-t border-gray-200 pt-8">
                  <button className="group inline-flex items-center gap-2 text-blue-500 font-medium">
                    Learn more
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
