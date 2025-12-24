'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: any;
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimateOnScroll = ({
  children,
  animation,
  className = '',
  delay = 0,
  threshold = 0.2,
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Default animation if none provided
  const defaultAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const animationToUse = animation || defaultAnimation;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={animationToUse}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
