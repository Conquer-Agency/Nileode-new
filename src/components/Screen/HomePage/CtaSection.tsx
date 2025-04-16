import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-24 px-4">
      <div className="w-11/12 mx-auto font-poppins">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="relative w-full rounded-3xl bg-gradient-to-br from-blue-800 via-blue-900 to-black p-12 md:p-16 lg:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-blue-200/20 blur-[80px] rounded-full"></div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false }}
              className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-10 inline-block text-white"
            >
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 "
            >
              Let's start
              <br />
              your project now
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false }}
              className="text-white/80 text-lg mb-10"
            >
              Our team will get back to you within 24 hours 🙌
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white hover:text-white/80 border-transparent backdrop-blur-sm rounded-full px-10 py-6"
                >
                  Book a free call
                </Button>
              </a>
              {/* <a href="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black rounded-full px-8"
                >
                  Get a quote
                </Button>
              </a> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
