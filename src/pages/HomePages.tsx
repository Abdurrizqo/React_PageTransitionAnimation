import { motion } from "framer-motion";
function HomePages() {
  return (
    <motion.div
      className='w-full h-screen bg-cover bg-home-bg overflow-x-none'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      HomePages
    </motion.div>
  );
}

export default HomePages;
