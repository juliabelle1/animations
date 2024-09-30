"use client"

import React, {useEffect, useState} from "react"
import {motion} from "framer-motion"
import {initialColors} from "../../../data/colors"

const Container = () => {
  const [colorIndex, setColorIndex] = useState(0)
  const handleChangeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % 8)
  }

  // const handleShuffle = () => {
  //   setColors((prev) => {
  //     const newColors: any[] = [...prev]
  //     // Exclude the center box (index 4) from being shuffled
  //     const colorToShift = newColors.filter((_, index) => index !== 4)

  //     const lastColor = colorToShift.pop()
  //     colorToShift.unshift(lastColor)
  //     // Reinsert the unchanged center box back into the array
  //     colorToShift.splice(4, 0, newColors[4])

  //     return colorToShift
  //   })
  // }

  const rows = 5
  const columns = 5

  const createGridCells = () => {
    const cells = []
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        let classes = "border-[0.2px] border-gray-800 "

        // Hide borders based on position
        if (row === 0) classes += "border-t-0 " // Hide top border for the first row
        if (row === rows - 1) classes += "border-b-0 " // Hide bottom border for the last row
        if (col === 0) classes += "border-l-0 " // Hide left border for the first column
        if (col === columns - 1) classes += "border-r-0 " // Hide right border for the last column

        classes += " w-20 h-20" // Other styling

        cells.push(<div key={`${row}-${col}`} className={classes} />)
      }
    }
    return cells
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeColor()
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className=" flex flex-col items-center justify-center min-h-screen w-full bg-black">
        {/* <button
          onClick={handleChangeColor}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Trigger
        </button> */}
        {/* <div className="grid grid-cols-5 shadow-md relative"> */}
        {/* {[...new Array(25)].map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index >= 0 && index < 5
                    ? "w-20 h-20 border-b-[0.2px] border-l-[0.2px] border-gray-800 bg-black text-white"
                    : index % 5 === 0
                    ? "w-20 h-20 border-r-[0.2px] border-t-[0.2px] border-b-[0.2px] border-gray-800 bg-black text-white"
                    : "w-20 h-20 border-[0.2px] border-gray-800 bg-black text-white"
                }
              >
                {index}
              </div>
            )
          })} */}
        <div
          className="grid relative"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {createGridCells()}
          <div className="grid grid-cols-3 shadow-md absolute top-[20%] left-[20%]">
            {initialColors[colorIndex]?.map((colorClass, index) => (
              <motion.div
                key={index}
                className={`w-20 h-20 border-[0.1px] border-gray-800 ${colorClass.color}`}
                layout
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              ></motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Container
