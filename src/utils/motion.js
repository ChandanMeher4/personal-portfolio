// The Working Index — Centralized Motion System

export const EASING = [0.22, 1, 0.36, 1];

export const DURATION = {
  quick: 0.16,
  standard: 0.24,
  entrance: 0.55,
  project: 0.45,
  stagger: 0.08,
};

// Editorial Text Reveal Variants (Clipped container mask)
export const textRevealVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: (customDelay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATION.entrance,
      delay: customDelay,
      ease: EASING,
    },
  }),
};

// Subtle Content Fade Up
export const fadeUpVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: (customDelay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATION.entrance,
      delay: customDelay,
      ease: EASING,
    },
  }),
};

// Controlled Crop Image Reveal
export const imageCropVariants = {
  hidden: { scale: 1.04, opacity: 0 },
  visible: (customDelay = 0.18) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: customDelay,
      ease: EASING,
    },
  }),
};

// Project Image Transition (Signature Crop & Scale)
export const projectImageVariants = {
  initial: { opacity: 0, scale: 1.025, x: 6 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: DURATION.project,
      ease: EASING,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    x: -6,
    transition: {
      duration: 0.3,
      ease: EASING,
    },
  },
};
