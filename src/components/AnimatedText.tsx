import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';

import drop from '../public/svgs/drop.svg';

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
    textRed: {
      WebkitTextFillColor: "transparent",
      backgroundImage: [
        "linear-gradient(180deg,#ff0000 0%,#000 0%)",
        "linear-gradient(180deg,#ff0000 100%,#000 0%)",
        "linear-gradient(180deg,#ff0000 100%,#000 100%)",
      ],
      transition: {
        duration: 4,
      },
    },
  };

  const dropAnimation = {
    dropFall: {
      opacity: 1,
      y: "8rem",
      transition: {
        duration: 10,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const dropPathAnimation = {
    hidden: {
      opacity: 0,
    },
    dropShow: {
      opacity: 1,
    },
    dropFall: {
      y: "8rem",
      height: "8rem",
      transition: {
        duration: 10,
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
      }, 2000);
      setTimeout(() => {
        ctrls.start("dropShow");
        ctrls.start("dropFall");
      }, 6000);
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
      {breakText.split(" ").map((word, indexWord) => {
        return (
          <motion.span
            aria-hidden="true"
            key={indexWord}
            initial="hidden"
            animate={ctrls}
            variants={wordBreakAnimation}
            transition={{
              delayChildren: indexWord * 0.25,
              staggerChildren: 0.05,
            }}
            className="ml-4 text-9xl"
          >
            {word.split("").map((character, indexChar) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={indexChar}
                  variants={characterBreakAnimation}
                  style={{
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {character}
                  {indexWord == 0 && indexChar == 0 && (
                    <motion.div
                      className="fixed w-[0.5rem] h-[1.8rem] ml-[9.1rem] bottom-[4.6rem] bg-[#ff0000] overflow-visible"
                      variants={dropPathAnimation}
                    >
                      <motion.img
                        src={drop}
                        animate={ctrls}
                        initial="hidden"
                        className="mt-2 min-w-[1.5rem] right-[-0.48rem] fixed"
                        variants={dropAnimation}
                      />
                    </motion.div>
                  )}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </motion.h2>
  );
};
