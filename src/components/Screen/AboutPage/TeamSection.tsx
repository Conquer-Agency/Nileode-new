import nati from "@/assets/nati (1).jpg";
import Bement from "@/assets/bement.jpg";
import eyob from "@/assets/eyob.jpg";
import Bisrat from "@/assets/users/Bisrat-CbEPFgi4-removebg-preview.png";
import Dietrick from "@/assets/users/Dietrick-BKF6rjQK-removebg-preview.png";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Bemnet Mitku",
    role: "CEO",
    image: Bement,
    bio: "Strategic leader with extensive experience in software architecture and team management. Drives innovation and company vision.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com",
    },
  },
  {
    name: "Natnael Hailay",
    role: "COO",
    image: nati,
    bio: "Infrastructure expert specializing in cloud architecture, automation, and scalable DevOps solutions. Ensures robust system reliability.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com",
    },
  },
  {
    name: "Eyob Birhanu.",
    role: "CTO",
    image: eyob,
    bio: "Frontend architect focused on building exceptional user experiences. Leads technical strategy and innovation in web technologies.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com",
    },
  },
  {
    name: "Bisrat Hagos",
    role: "Partnerships Manager",
    image: Bisrat,
    bio: "Enterprise solutions architect with deep expertise in distributed systems and high-performance backend services.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com",
    },
  },
  {
    name: "Dietrick Cyrus",
    role: "CMO",
    image: Dietrick,
    bio: "Mobile development expert crafting seamless cross-platform experiences. Pioneers innovative mobile solutions and best practices.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com",
    },
  },
];

const TeamSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      viewport={{ once: false }}
      className=""
    >
      <div className=" text-center max-w-7xl mx-auto mt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: false }}
          className=" backdrop-blur-sm px-4 py-1.5 rounded-full mb-10 inline-block text-white bg-blue-500"
        >
          Team Members
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 leading-tight mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Creative Crew,
           <br />
           Here for You
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-content-center gap-6 w-11/12 mx-auto ">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden text-center flex items-center flex-col justify-between hover:scale-110"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 object-cover rounded-full object-top bg-white"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-950">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-gray-700 mt-2 text-sm">{member.bio}</p>
              {/* <div className="flex space-x-4 mt-4">
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-600 hover:text-black transition text-xl" />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-gray-600 hover:text-blue-700 transition text-xl" />
                </a>
                <a href={member.social.email}>
                  <FaEnvelope className="text-gray-600 hover:text-red-600 transition text-xl" />
                </a>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamSection;
