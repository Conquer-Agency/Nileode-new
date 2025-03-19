import { Team } from "@/components/Teams/TeamsImage";
import { motion } from "framer-motion";
import Bemnet from "@/assets/users/Bemnet-preview.png"
const TeamSection = () => {
  return (
    <div>
      <div className="text-center my-12 projects-heading">
        <motion.h1
          className="text-6xl font-poppins font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Meet Out Team
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4  mb-12 w-9/12 mx-auto">
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
            first_name: "Bemnet",
            last_name: "Mitku",
            photo_background: Bemnet,
            photo_foreground: Bemnet,
            customizer_link: "/customize",
          }}
        />
        <Team
          index={0}
          skater={{
            first_name: "Bemnet",
            last_name: "Mitku",
            photo_background: Bemnet,
            photo_foreground: Bemnet,
            customizer_link: "/customize",
          }}
        />
        <Team
          index={0}
          skater={{
            first_name: "Bemnet",
            last_name: "Mitku",
            photo_background: Bemnet,
            photo_foreground: Bemnet,
            customizer_link: "/customize",
          }}
        />
        <Team
          index={0}
          skater={{
            first_name: "Bemnet",
            last_name: "Mitku",
            photo_background: Bemnet,
            photo_foreground: Bemnet,
            customizer_link: "/customize",
          }}
        />
      </div>
    </div>
  );
}

export default TeamSection