import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';

/*const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;*/

export const AnimatedText = () => {
  const clockText = "Clock"; // This would normally be passed into this component as a prop!
  const breakText = "BREAK IT";

  const ctrls = useAnimation();

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const wordBreakAnimation = {
    hidden: {},
    visible: {},
    textRed: {
      color: ["#000", "#ff0000"],
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const characterClockAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const characterBreakAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visibleBreak: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  React.useEffect(() => {
    setTimeout(() => {
      ctrls.start("visible");
    }, 500);
    setTimeout(() => {
      ctrls.start("visibleBreak");
      setTimeout(() => {
        ctrls.start("textRed");
      }, 1000);
    }, 2500);
  }, []);

  return (
    <motion.h2
      aria-label={clockText}
      role="heading"
      className="text-5xl font-semibold"
    >
      {clockText.split("").map((character, index) => (
        <motion.span
          key={index}
          animate={ctrls}
          initial="hidden"
          variants={characterClockAnimation}
        >
          {character}
        </motion.span>
      ))}
      {breakText.split(" ").map((word, index) => {
        return (
          <motion.span
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordBreakAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="ml-4 text-9xl"
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterBreakAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};
