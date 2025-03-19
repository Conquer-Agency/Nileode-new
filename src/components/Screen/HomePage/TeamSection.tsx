import { Team } from "@/components/Teams/TeamsImage";
import { motion } from "framer-motion";
import Bemnet from "@/assets/users/Bemnet-preview.png"
import nati from "@/assets/users/nati-removebg-preview.png"
import eyob from "@/assets/users/eyob-removebg-preview.png"
import bisrat from "@/assets/users/Bisrat-CbEPFgi4-removebg-preview.png"
import dietrick from "@/assets/users/Dietrick-BKF6rjQK-removebg-preview.png"
const TeamSection = () => {
  return (
    <div className=" py-4">
      <div className="text-center my-12 projects-heading">
        <motion.h1
          className="text-6xl font-poppins font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          className="text-xl max-w-md mx-auto font-railway text-gray-600 mt-3 italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Passionate experts dedicated to delivering excellence
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4  mb-12 w-9/12 mx-auto ">
        <Team
          index={0}
          skater={{
            first_name: "Bemnet ",
            last_name: "Mitku",
            photo_background: Bemnet,
            photo_foreground: Bemnet,
            customizer_link: "/customize",
          }}
        />
        <Team
          index={0}
          skater={{
            first_name: "Natnael ",
            last_name: "Hailay",
            photo_background: nati,
            photo_foreground: nati,
            customizer_link: "/customize",
          }}
        />
        <Team
          index={0}
          skater={{
            first_name: "Eyob",
            last_name: "Birhanu",
            photo_background: eyob,
            photo_foreground: eyob,
            customizer_link: "/customize",
          }}
        />
        <Team
          index={0}
          skater={{
            first_name: "Bisrat ",
            last_name: "Hagos",
            photo_background: bisrat,
            photo_foreground: bisrat,
            customizer_link: "/customize",
          }}
        />
        <Team
          index={0}
          skater={{
            first_name: "Dietrick ",
            last_name: "Cyrus",
            photo_background: dietrick,
            photo_foreground: dietrick,
            customizer_link: "/customize",
          }}
        />
      </div>
    </div>
  );
}

export default TeamSection