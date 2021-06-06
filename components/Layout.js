import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { itemAppear } from "./Animation";

const Layout = ({ children }) => {
  return (
    <motion.div
      variants={itemAppear}
      initial="hidden"
      animate="show"
      className="content"
    >
      <Navbar />
      {children}
    </motion.div>
  );
};

export default Layout;
