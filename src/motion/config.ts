/**
 * 全站衔接动画：统一缓动、视口与交错，配合 App 中 MotionConfig 使用
 */
export const easeSilky = [0.16, 1, 0.3, 1] as const;

export const transitionSilky = {
  duration: 0.75,
  ease: easeSilky,
} as const;

export const transitionSilkySlow = {
  duration: 0.9,
  ease: easeSilky,
} as const;

export const transitionHero = {
  duration: 0.95,
  ease: easeSilky,
} as const;

/** 区块进入视口时略提前触发，更易感知「衔接」 */
export const viewportSection = {
  once: true,
  amount: 0.12 as const,
  margin: "0px 0px -12% 0px" as const,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

export const staggerContainerTight = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSilky,
  },
};
