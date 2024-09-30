"use client"

import React from "react"
import {motion} from "framer-motion"

const AnimatedTextWord = () => {
  const text = "Compileit"
  const words = text.split("")

  const [showLine, setShowLine] = React.useState(false)

  // Variants for Container of words.
  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.16, delayChildren: 0.04 * i},
    }),
  }

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const border = {
    visible: {
      opacity: 0.6,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const lineVariant = {
    hidden: {height: "0px"},
    visible: {
      height: "500px", // Adjust this to your desired height
      transition: {
        duration: 3, // Animation duration
        ease: "easeInOut",
        // repeat: Infinity,
        // repeatDelay: 1
      },
      dalay: 1000,
    },
  }
  // const lineAnimation = {
  //   visible: {
  //     opacity: 0.8,
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       damping: 12,
  //       stiffness: 100,
  //     },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     x: 20,
  //     transition: {
  //       type: "spring",
  //       damping: 12,
  //       stiffness: 100,
  //     },
  //   },
  // }

  return (
    <motion.div
      onAnimationComplete={() => setShowLine(true)}
      className="overflow-hidden w-full flex text-7xl h-full justify-center font-bold text-white "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <div className="relative h-full">
          <motion.div variants={child} key={index} className="relative top-1/3">
            {word}
          </motion.div>
          <motion.div
            className="w-[0.2px] bg-gray-700" // Adjust width and color as needed
            variants={lineVariant}
            initial="hidden"
            animate="visible"
          />
        </div>
      ))}
      <motion.div
        className="w-[0.2px] bg-gray-600 mt-16" // Adjust width and color as needed
        variants={lineVariant}
        initial="hidden"
        animate="visible"
      />
    </motion.div>
  )
}

export default AnimatedTextWord
