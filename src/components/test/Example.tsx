import {motion} from "framer-motion"

const variants: any = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
}

export const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">C</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">O</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">M</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">P</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">I</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">L</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">E</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">I</h1>
      </motion.div>
      <motion.div variants={variants} className="h-12 w-6 p-6 bg-red">
        <h1 className=" text-white text-7xl">T</h1>
      </motion.div>
    </motion.div>
  )
}
