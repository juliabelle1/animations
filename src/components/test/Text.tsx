import React from "react"
import styles from "./bubble.module.css"

const Text = () => {
  return (
    <div className="w-full h-screen place-content-center bg-black">
      <h2 className="text-center text-8xl font-thin text-indigo-300">
        {"Compileit".split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    </div>
  )
}

export default Text
