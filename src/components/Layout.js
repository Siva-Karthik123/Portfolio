import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <motion.div {...pageTransition}>
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
