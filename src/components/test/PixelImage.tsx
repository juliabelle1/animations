"use client"

import Image from "next/image"
import React from "react"

type Props = {
  imageUrl: string
  largeSize?: number
  mediumSize?: number
  smallSize?: number
}

export const PixelImage = ({
  imageUrl,
  largeSize,
  mediumSize,
  smallSize,
}: Props) => {
  const [isHoveredOne, setIsHoveredOne] = React.useState(false)
  const [isHoveredTwo, setIsHoveredTwo] = React.useState(false)
  // const [isHoveredThree, setIsHoveredThree] = React.useState(false)

  const handlePixel = () => {
    // setTimeout(() => {
    //   setIsHoveredThree(!isHoveredThree)
    // }, 400)
    setTimeout(() => {
      setIsHoveredOne(!isHoveredOne)
    }, 700)
    setTimeout(() => {
      setIsHoveredTwo(!isHoveredTwo)
    }, 1000)
  }

  return (
    <div className=" relative h-[100vh] w-full flex flex-col justify-center items-center m-auto">
      <button
        className="w-24 h-10 bg-black text-white"
        type="button"
        onClick={handlePixel}
      >
        Change
      </button>
      <div className=" relative w-96 h-96 object-contain bg-white">
        <Image
          style={{
            imageRendering: "pixelated",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
          // src="/girl.jpg"
          src={imageUrl || ""}
          alt="Ica"
          width={largeSize}
          height={largeSize}
        />
        <Image
          className={
            isHoveredTwo ? "transition-all duration-[1s] opacity-0" : ""
          }
          style={{
            imageRendering: "pixelated",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            // opacity: 0.8,
          }}
          src={imageUrl || ""}
          alt="Ica"
          width={mediumSize}
          height={mediumSize}
        />
        <Image
          className={
            isHoveredOne ? "transition-all duration-[1s] opacity-0 " : ""
          }
          style={{
            imageRendering: "pixelated",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            // opacity: 0.8,
          }}
          src={imageUrl || ""}
          alt="Ica"
          width={smallSize}
          height={smallSize}
        />
        {/* <Image
          className={
            isHoveredThree ? "transition-all duration-[1s] opacity-0 " : ""
          }
          style={{
            imageRendering: "pixelated",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            // opacity: 0.8,
          }}
          src={imageUrl || ""}
          alt="Ica"
          width={5}
          height={5}
        /> */}
      </div>
    </div>
  )
}
