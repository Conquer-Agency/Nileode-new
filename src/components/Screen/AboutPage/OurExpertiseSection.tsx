import { motion } from "framer-motion";
import img from "@/assets/photo_2_2024-08-15_08-53-45.jpg";
import img2 from "@/assets/photo_4_2024-08-15_08-53-45.jpg";
import img3 from "@/assets/photo_2025-01-13_10-12-06.jpg";
import img4 from "@/assets/photo_2025-01-13_10-12-08.jpg";

const expertiseData = [
  {
    title: "Discover",
    description:
      "We uncover hidden opportunities and insights to drive innovation and success.",
    img: img,
  },
  {
    title: "Design",
    description:
      "Crafting stunning, user-centric designs that elevate experiences and engagement.",
    img: img2,
  },
  {
    title: "Develop",
    description:
      "Building scalable, high-performance applications with cutting-edge technologies.",
    img: img3,
  },
  {
    title: "Deploy",
    description:
      "Seamlessly launching solutions to ensure reliability and long-term success.",
    img: img4,
  },
];

const OurExpertiseSection = () => {
  return (
    <div className="py-16">
      <div className="mx-auto w-11/12 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Our Expertise
        </motion.h1>
        <motion.p
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          We bridge the gap between world-class talent and cost-effective
          solutions. Our team of experts ensures businesses have access to
          top-tier IT professionals, delivering exceptional results while
          optimizing operational costs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px mt-16">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden "
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: false }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover object-center"
            />
            <div className="bg-black/40 absolute inset-0 text-white flex flex-col justify-end p-4">
              <h1 className="text-3xl font-semibold mb-6">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertiseSection;
