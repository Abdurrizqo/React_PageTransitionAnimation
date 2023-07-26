import { motion } from "framer-motion";

function ServiceComponent() {
  return (
    <motion.div
      className='w-full h-screen bg-cover bg-service-bg overflow-x-none'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      ServiceComponent
    </motion.div>
  );
}

export default ServiceComponent;
