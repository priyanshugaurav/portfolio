import { useEffect, useId, useRef, useState } from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Transition,
} from "motion/react"
import { playMetalClick } from "./metal-click"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

export function ChanhDaiMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `ncdai-face-pattern-${id}`,
    faceFill: `ncdai-face-fill-${id}`,
    stroke: `ncdai-stroke-${id}`,
    radialGradient: `ncdai-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)
  const [isPressed, setIsPressed] = useState(false)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  const handlePointerDown = () => {
    setIsPressed(true)
    playMetalClick()
  }

  const handlePointerUp = () => {
    setIsPressed(false)
  }

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible cursor-pointer select-none"
      style={{
        // Define stroke and pattern variables dynamically based on theme
        ["--pattern" as string]: "var(--pattern)",
        ["--stroke" as string]: "var(--stroke)",
      }}
      viewBox="0 0 556 354"
      fill="none"
      initial="normal"
      animate={isPressed ? "pressed" : "normal"}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <defs>
        {/* Diagonal Hatching Pattern for Top Faces */}
        <pattern
          id={ids.facePattern}
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="4"
            stroke="var(--pattern)"
            strokeWidth="1.2"
          />
        </pattern>

        {/* Isometric Top Faces of C and D */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              y: 0,
            },
            pressed: {
              y: 16,
            },
          }}
          transition={transition}
        >
          {/* C top faces */}
          <path d="M333.05 256.58L222.20 320.58L166.78 288.58L277.63 224.58L333.05 256.58Z" />
          <path d="M166.78 288.58L111.35 320.58L0.50 256.58L55.93 224.58L166.78 288.58Z" />
          <path d="M166.78 160.58L55.93 224.58L0.50 192.58L111.35 128.58L166.78 160.58Z" />

          {/* D top faces */}
          <path d="M388.48 32.58L277.63 96.58L388.48 160.58L499.33 96.58L554.76 128.58L388.48 224.58L166.78 96.58L333.05 0.58L388.48 32.58Z" />
          <path d="M554.76 64.58L499.33 96.58L388.48 32.58L443.90 0.58L554.76 64.58Z" />
        </motion.g>

        {/* Outline Stroke for C and D Wireframes */}
        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // C
                "M28.21 240.58 L0.50 224.58 V192.58 L111.35 128.58 L166.78 160.58 V192.58 L83.64 240.58",
                "M166.78 160.58 L0.50 256.58 V288.58 L111.35 352.58 L166.78 320.58 L222.20 352.58 L333.05 288.58 V256.58 L277.63 224.58 L166.78 288.58 L0.50 192.58",
                "M0.50 256.58 L111.35 320.58 L166.78 288.58 L222.20 320.58 L333.05 256.58",
                "M111.35 320.58 V352.58",
                "M166.78 288.58 V320.58",
                "M222.20 320.58 V352.58",
                // D
                "M499.33 96.58 L554.76 128.58 V160.58 L388.48 256.58 L166.78 128.58 V96.58 L333.05 0.58 L499.33 96.58",
                "M166.78 96.58 L388.48 224.58 L554.76 128.58",
                "M527.04 112.58 L554.76 96.58 V64.58 L443.90 0.58 L277.63 96.58 L388.48 160.58 L554.76 64.58",
                "M305.34 112.58 L388.48 64.58 L471.62 112.58",
                "M388.48 224.58 V256.58",
                "M388.48 32.58 V64.58",
              ].join(""),
            },
            pressed: {
              d: [
                // C
                "M42.07 248.58 L0.50 224.58 V208.58 L111.35 144.58 L166.78 176.58 V192.58 L69.78 248.58",
                "M166.78 176.58 L0.5 272.58 V288.58 L111.35 352.58 L166.78 320.58 L222.20 352.58 L333.05 288.58 V272.58 L277.63 240.58 L166.78 304.58 L0.5 208.58",
                "M0.5 272.58 L111.35 336.58 L166.78 304.58 L222.20 336.58 L333.05 272.58",
                "M111.35 336.58 V352.58",
                "M166.78 304.58 V320.58",
                "M222.20 336.58 V352.58",
                // D
                "M499.33 112.58 L554.76 144.58 V160.58 L388.48 256.58 L166.78 128.58 V112.58 L333.05 16.58 L499.33 112.58",
                "M166.78 112.58 L388.48 240.58 L554.76 144.58",
                "M513.19 120.58 L554.76 96.58 V80.58 L443.90 16.58 L277.63 112.58 L388.48 176.58 L554.76 80.58",
                "M291.48 120.58 L388.48 64.58 L485.47 120.58",
                "M388.48 240.58 V256.58",
                "M388.48 48.58 V64.58",
              ].join(""),
            },
          }}
          transition={transition}
        />

        {/* Dynamic Cursor Spotlight Radial Gradient */}
        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#71717a" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      {/* Background Diagonal Dashed Guidelines */}
      <g className="stroke-[var(--line)]" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      {/* Side & Front Voxel Faces */}
      <g className="fill-[var(--background)]" fillRule="evenodd" clipRule="evenodd">
        <motion.path
          variants={{
            normal: {
              d: "M166.78 160.58L55.93 224.58L0.50 192.58V224.58L55.93 256.58L166.78 192.58V160.58Z",
            },
            pressed: {
              d: "M166.78 176.58L55.93 240.58L0.50 208.58V224.58L55.93 256.58L166.78 192.58V176.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M166.78 288.58L111.35 320.58L0.50 256.58V288.58L111.35 352.58L166.78 320.58L222.20 352.58L333.05 288.58V256.58L222.20 320.58L166.78 288.58Z",
            },
            pressed: {
              d: "M166.78 304.58L111.35 336.58L0.50 272.58V288.58L111.35 352.58L166.78 320.58L222.20 352.58L333.05 288.58V272.58L222.20 336.58L166.78 304.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M388.48 224.58L166.78 96.58V128.58L388.48 256.58L554.76 160.58V128.58L388.48 224.58Z",
            },
            pressed: {
              d: "M388.48 240.58L166.78 112.58V128.58L388.48 256.58L554.76 160.58V144.58L388.48 240.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M388.48 32.58L277.63 96.58V128.58L388.48 64.58L499.33 128.58L554.75 96.58V64.58L499.33 96.58L388.48 32.58Z",
            },
            pressed: {
              d: "M388.48 48.58L277.63 112.58V128.58L388.48 64.58L499.33 128.58L554.75 96.58V80.58L499.33 112.58L388.48 48.58Z",
            },
          }}
          transition={transition}
        />
      </g>

      {/* Solid Top Fill and Top Hatching Pattern */}
      <use href={`#${ids.faceFill}`} className="fill-[var(--background)]" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      {/* Wireframe Strokes */}
      <use href={`#${ids.stroke}`} stroke="var(--stroke)" strokeWidth="1.2" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} strokeWidth="1.2" />
    </motion.svg>
  )
}
