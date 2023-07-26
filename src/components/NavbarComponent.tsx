import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

function NavbarComponent() {
  const [isShowSide, setIsShowSide] = useState<Boolean>(false);

  const variants: Variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  function showSidebar() {
    setIsShowSide(!isShowSide);
  }

  return (
    <>
      <div className='fixed top-0 left-0 right-0 bg-black px-4 h-12 text-white z-10'>
        <div className='flex items-center md:hidden h-full'>
          <motion.button
            onClick={showSidebar}
            animate={isShowSide ? "open" : "closed"}
            variants={variants}>
            <BiMenuAltLeft className='text-3xl' />
          </motion.button>
        </div>
        <div className='md:flex items-center gap-4 hidden h-full'>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/service"}>Service</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
      <AnimatePresence>
        {isShowSide ? (
          <motion.div
            className='w-1/2 fixed bg-black left-0 top-0 bottom-0'
            initial={{ x: -window.innerWidth }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ x: -window.innerWidth }}>
            <div className='flex pt-16 px-4 gap-4 h-full flex-col text-white'>
              <Link onClick={showSidebar} to={"/"}>
                Home
              </Link>
              <Link onClick={showSidebar} to={"/about"}>
                About
              </Link>
              <Link onClick={showSidebar} to={"/service"}>
                Service
              </Link>
              <Link onClick={showSidebar} to={"/product"}>
                Product
              </Link>
              <Link onClick={showSidebar} to={"/contact"}>
                Contact
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default NavbarComponent;
