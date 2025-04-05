import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .max(250, { message: "Message cannot exceed 250 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const serviceID = "service_nc6zvsa";
    const templateID = "template_wnsbbhk";
    const userID = "atkoIvKSPAVeQsWDv";

    try {
      const response = await emailjs.send(serviceID, templateID, data, userID);
      console.log("Email successfully sent!", response.status, response.text);
      setIsSuccess(true);
    } catch (error) {
      console.error("Failed to send email. Error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        reset();
        setCharCount(0);
        setIsSuccess(false);
      }, 3000);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
  };

  return (
    <div className="bg-gray-200 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="max-w-md mx-auto w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-medium mb-8"
        >
          Get in touch.
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm mb-2">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                className={`w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-xs">
                  {errors.name.message}
                </p>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm mb-2">
                Your email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-xs">
                  {errors.email.message}
                </p>
              )}
            </motion.div>
          </div>

          {/* Company and Budget Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="company" className="block text-sm mb-2">
                Your company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("company")}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="budget" className="block text-sm mb-2">
                Budget Range
              </label>
              <input
                id="budget"
                type="text"
                placeholder="In USD"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("budget")}
              />
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                placeholder="Type here..."
                rows={5}
                className={`w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...register("message")}
                onChange={(e) => {
                  handleMessageChange(e);
                  register("message").onChange(e);
                }}
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {charCount}/250
              </div>
            </div>
            {errors.message && (
              <p className="mt-1 text-red-500 text-xs">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="flex justify-end">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Sent!
                </span>
              ) : (
                "Send"
              )}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
