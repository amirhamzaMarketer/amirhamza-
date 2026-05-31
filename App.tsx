/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate premium loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative antialiased selection:bg-accent/30">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-24 h-24 border-4 border-accent/20 rounded-full animate-[spin_3s_linear_infinite]" />
              <div className="absolute inset-0 w-24 h-24 border-t-4 border-accent rounded-full animate-spin" />
              <div className="absolute inset-x-0 -bottom-12 text-center">
                <span className="text-accent font-display font-bold tracking-[0.2em] animate-pulse">AMIR HAMZA</span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <BackgroundEffect />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <WhyChooseMe />
            <Testimonials />
            <CTA />
          </main>
          <Footer />

          {/* Floating WhatsApp Button */}
          <motion.a
            href="https://shorturl.at/x1tpz"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -6, 0]
            }}
            whileHover={{ 
              scale: 1.12, 
              y: -12,
              boxShadow: "0px 0px 30px rgba(37, 211, 102, 0.8)",
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 15,
                y: { duration: 0.2 }
              }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { type: "spring", stiffness: 450, damping: 12 }
            }}
            transition={{ 
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              default: {
                delay: 2,
                type: "spring",
                stiffness: 260,
                damping: 20
              }
            }}
            className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all group cursor-pointer border border-[#25D366]/30"
          >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />
            <MessageCircle size={32} className="relative z-10 fill-white/10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-white text-dark px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Chat on WhatsApp
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
            </div>
          </motion.a>
        </motion.div>
      )}
    </div>
  );
}

