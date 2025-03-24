import { motion } from "framer-motion"
import { Phone, Mail, Pin } from "lucide-react"

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-md mx-auto w-full"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-16">
          Let&apos;s build an awesome project together!
        </motion.h1>

        <div className="space-y-8">
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="mr-4 mt-1">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Call us</h3>
              <p className="text-gray-600 mb-1">+251 9334371102</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="mr-4 mt-1">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-gray-600 mb-1">info.nileode@gmail.com</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="mr-4 mt-1">
              <Pin className="h-5 w-5 rotate-45" />
            </div>
            <div>
              <h3 className="font-medium mb-2">Find us</h3>
              <div className="my-4">
                <h4>Addis Office</h4>
                <p className="text-gray-600">
                  Lideta, Flintstone bldg, 5th floor
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div className="my-4">
                <h4>Us Office</h4>
                <p className="text-gray-600">Coming Soon...</p>
              </div>
              <div className="my-4">
                <h4>Dubai Office</h4>
                <p className="text-gray-600">Coming Soon...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

