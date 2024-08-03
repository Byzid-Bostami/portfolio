import React from 'react';
import { motion } from 'framer-motion';

function Motioneffect(OgComponent) {
  return function EnhancedComponent() {
    return (
      <>
        <OgComponent />

        <motion.div
          className="fixed top-0 left-0 z-20 w-full h-screen origin-top bg-neutral-800"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="fixed top-0 left-0 z-20 w-full h-screen origin-bottom bg-neutral-800"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
}

export default Motioneffect;
