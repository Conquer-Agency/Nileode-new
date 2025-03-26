import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Img from "@/assets/photo_2_2024-08-15_08-53-45.jpg";
import Img2 from "@/assets/photo_4_2024-08-15_08-53-45.jpg";
import Img3 from "@/assets/photo_1_2024-08-15_08-53-45.jpg";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions, web applications, and mobile apps tailored to your business requirements. We transform your ideas into powerful digital solutions.",
    image: Img,
    alignment: "left",
  },
  {
    title: "Back-Office & IT Support Services",
    description:
      "Comprehensive IT support, system maintenance, and back-office operations to keep your business running smoothly 24/7.",
    image: Img2,
    alignment: "right",
  },
  {
    title: "Specialized Consulting",
    description:
      "Expert guidance in digital transformation, technology strategy, and business process optimization to drive your organization forward.",
    image: Img3,
    alignment: "left",
  },
];

export default function DetailedServiceSection() {

  return (
    <section className="w-full py-16 bg-gray-100">
      <div>
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 ">
            Unlocking Possibilities Through Experiencing our Comprehensive
            Services.
          </p>
        </div>
        <div className="">
          {services.map((service) => (
            <div className="h-full my-8" key={service.title}>
              <div className="relative w-11/12 mx-auto  flex items-center justify-center ">
                <div className="w-fit h-[70vh] overflow-clip">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-fill object-center shadow-2xl  "
                  />
                </div>
                <div
                  className={`absolute z-50 bottom-0  ${
                    service.alignment === "right"
                      ? "right-16 md:mr-[-20px]"
                      : "md:left-16 "
                  }`}
                >
                  <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-white p-6 shadow-2xl max-w-md relative"
                  >
                    <h3 className="text-3xl font-bold mb-4 relative inline-block z-30">
                      {service.title}
                      <span className="absolute bottom-0 left-0 w-full h-4 bg-blue-500 -z-10"></span>
                    </h3>

                    <p className="text-gray-700 text-md mb-4">
                      {service.description}
                    </p>

                    <Link
                      to={`/services/${service.title}`}
                      className="text-black font-medium hover:text-blue-500 transition-colors inline-block border-b border-black hover:border-blue-500"
                    >
                      Read more
                    </Link>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: false }}
                      className={`absolute ${
                        service.alignment === "right"
                          ? "right-[-20px]"
                          : "left-[-20px]"
                      } bottom-[-20px] w-full h-full bg-blue-500 -z-10`}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}