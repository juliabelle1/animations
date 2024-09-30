import React from "react"

import ParticleRing from "./test/ParticleRing"
import {PixelImage} from "./test/PixelImage"
import Container from "./test/Container"
import AnimatedTextWord from "./test/AnimatedTextWord"
import Text from "./test/Text"
import {RevealLinks} from "./test/RevealLinks"
import {DragCards} from "./test/DragCards"

export const Animation = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <PixelImage
          imageUrl={"/ica.png"}
          largeSize={400}
          mediumSize={10}
          smallSize={6}
        />
        <PixelImage
          imageUrl={"/girl.jpg"}
          largeSize={400}
          mediumSize={10}
          smallSize={6}
        />
      </div>
      <div className="w-full">
        {/* <Likes /> */}
        <ParticleRing />
      </div>
      <div className="h-full bg-white">
        <Container />
      </div>
      <div className=" h-screen w-full flex flex-col items-center justify-center bg-black">
        <AnimatedTextWord />
      </div>
      <Text />
      <RevealLinks />
      <DragCards />
    </div>
  )
}
