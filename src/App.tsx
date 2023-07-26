import { Route, Routes, useLocation } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import ContactPages from "./pages/ContactPages";
import { AnimatePresence } from "framer-motion";
import NavbarComponent from "./components/NavbarComponent";
import ServiceComponent from "./pages/ServiceComponent";
import ProductComponent from "./pages/ProductComponent";

function App() {
  const location = useLocation();
  return (
    <>
      <NavbarComponent />
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' Component={HomePages} />
          <Route path='/about' Component={AboutPages} />
          <Route path='/contact' Component={ContactPages} />
          <Route path='/product' Component={ProductComponent} />
          <Route path='/service' Component={ServiceComponent} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
