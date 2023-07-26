import { motion } from "framer-motion";

function AboutPages() {
  return (
    <motion.div
      className='w-full h-screen bg-cover bg-about-bg overflow-x-none'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      AboutPages
    </motion.div>
  );
}

export default AboutPages;
