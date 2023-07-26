import { motion } from "framer-motion";

function ProductComponent() {
  return (
    <motion.div
      className='w-full h-screen bg-cover bg-product-bg overflow-x-none'
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      ProductComponent
    </motion.div>
  );
}

export default ProductComponent;
