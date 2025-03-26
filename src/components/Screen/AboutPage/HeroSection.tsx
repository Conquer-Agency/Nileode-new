import Hero from "@/assets/photo_1_2024-08-15_08-53-45.jpg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full py-16 md:py-24 overflow-x-clip h-[110vh]">
      <div className="w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: false }}
              className=" backdrop-blur-sm px-4 py-1.5 rounded-full mb-10 inline-block text-white bg-blue-500"
            >
              About Us
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 leading-tight">
              We&apos;re Obsessed With Making Our Clients Happy
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl">
              We&apos;re a premium, boutique web design agency working remotely
              throughout North America and serving clients across the globe.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* <Link
                to="/contact"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors group"
              >
                <span>Get a Proposal</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link> */}
              <Link
                to="/contact"
                className="hidden md:inline-block rounded-full border border-black px-8 py-2 text-lg opacity-100 transition-transform hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="relative h-full"
          >
            <div className="relative h-[600px] w-[1000px]  rounded-2xl overflow-hidden">
              {/* <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm z-10 rounded-2xl"></div> */}
              <img
                src={Hero}
                alt="Hero Image"
                // its better to scale it down than to edit the h & w
                className="object-cover scale-90 h-full w-full rounded-2xl"
              />

              {/* Decorative elements */}
              <div className="absolute top-4 left-6 bg-white/10 backdrop-blur-md p-2 rounded-full z-20 ">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute -inset-4 bg-blue-600/40 rounded-[30px] blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
