import { motion } from "framer-motion";

function ContactPages() {
  return (
    <motion.div
      className='w-full h-screen bg-cover bg-contact-bg overflow-x-none'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      ContactPages
    </motion.div>
  );
}

export default ContactPages;
