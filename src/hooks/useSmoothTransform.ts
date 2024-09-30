import {useSpring, useTransform} from "framer-motion"

//@ts-ignore
export function useSmoothTransform(value, springOptions, transformer) {
//@ts-ignore

  return useSpring(useTransform(value, transformer), springOptions)
}
