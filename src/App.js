// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion'; // For animations
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import './styles/App.css';

// function App() {
  
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Home />
//                 </motion.div>
//               }
//             />
//             <Route
//               path="/about"
//               element={
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <About />
//                 </motion.div>
//               }
//             />
            
//             <Route
//               path="/projects"
//               element={
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Projects />
//                 </motion.div>
//               }
//             />
            
//             <Route
//               path="/contact"
//               element={
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Contact />
//                 </motion.div>
//               }
//             />
//           </Routes>
//         </AnimatePresence>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
