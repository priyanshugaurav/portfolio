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

/**
 * Geometric 3D Isometric Ramp & Architectural Platform
 * Designed with CAD precision: inclined ramp plane, upper terrace, recessed portal, and hatching lines.
 */
export function RampMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `ramp-face-pattern-${id}`,
    faceFill: `ramp-face-fill-${id}`,
    stroke: `ramp-stroke-${id}`,
    radialGradient: `ramp-radial-gradient-${id}`,
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
        {/* Diagonal Hatching Pattern for Ramp and Top Terraces */}
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

        {/* Top Surfaces: Inclined Ramp + Elevated Platform */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: { y: 0 },
            pressed: { y: 14 },
          }}
          transition={transition}
        >
          {/* Main Ascending Ramp Inclined Plane */}
          <path d="M110 256.58 L220.85 320.58 L386.48 224.58 L275.63 160.58 Z" />

          {/* Elevated Upper Terrace (with central portal cutout) */}
          <path d="M275.63 160.58 L386.48 224.58 L524.76 144.58 L413.91 80.58 Z" />

          {/* Stepped Base / Lower Platform */}
          <path d="M30 210.58 L110 256.58 L165.42 224.58 L85.42 178.58 Z" />

          {/* Cantilevered Top Cap */}
          <path d="M386.48 32.58 L441.91 64.58 L331.05 128.58 L275.63 96.58 Z" />
        </motion.g>

        {/* Outline Stroke for the Entire Isometric Sculpture */}
        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // Base & Lower Step
                "M30 210.58 L110 256.58 V288.58 L30 242.58 Z",
                "M110 256.58 L220.85 320.58 V352.58 L110 288.58",
                "M220.85 320.58 L386.48 224.58 V256.58 L220.85 352.58",

                // Ascending Ramp Edges
                "M110 256.58 L275.63 160.58",
                "M220.85 320.58 L386.48 224.58",
                "M275.63 160.58 L386.48 224.58",

                // Upper Terrace Perimeter & Portal
                "M386.48 224.58 L524.76 144.58 V176.58 L386.48 256.58",
                "M524.76 144.58 L413.91 80.58 L275.63 160.58",
                "M413.91 80.58 V112.58 L524.76 176.58",

                // Inner Aperture / Recessed Terrace Well
                "M350 160.58 L395 186.58 L440 160.58 L395 134.58 Z",
                "M350 160.58 V180.58 L395 206.58 V186.58",
                "M395 206.58 L440 180.58 V160.58",

                // Top Cantilever Tower
                "M275.63 96.58 L386.48 32.58 L441.91 64.58 L331.05 128.58 Z",
                "M275.63 96.58 V160.58",
                "M331.05 128.58 V160.58",
                "M441.91 64.58 V96.58 L386.48 128.58",
              ].join(""),
            },
            pressed: {
              d: [
                // Base & Lower Step (Compressed by 14px)
                "M30 224.58 L110 270.58 V288.58 L30 242.58 Z",
                "M110 270.58 L220.85 334.58 V352.58 L110 288.58",
                "M220.85 334.58 L386.48 238.58 V256.58 L220.85 352.58",

                // Ascending Ramp Edges
                "M110 270.58 L275.63 174.58",
                "M220.85 334.58 L386.48 238.58",
                "M275.63 174.58 L386.48 238.58",

                // Upper Terrace Perimeter & Portal
                "M386.48 238.58 L524.76 158.58 V176.58 L386.48 256.58",
                "M524.76 158.58 L413.91 94.58 L275.63 174.58",
                "M413.91 94.58 V112.58 L524.76 176.58",

                // Inner Aperture / Recessed Terrace Well
                "M350 174.58 L395 200.58 L440 174.58 L395 148.58 Z",
                "M350 174.58 V194.58 L395 220.58 V200.58",
                "M395 220.58 L440 194.58 V174.58",

                // Top Cantilever Tower
                "M275.63 110.58 L386.48 46.58 L441.91 78.58 L331.05 142.58 Z",
                "M275.63 110.58 V174.58",
                "M331.05 142.58 V174.58",
                "M441.91 78.58 V110.58 L386.48 142.58",
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

      {/* Background Diagonal Dashed Coordinate Guides */}
      <g className="stroke-[var(--line)]" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      {/* Solid Opaque Background for Front & Side Structural Walls */}
      <g className="fill-[var(--background)]" fillRule="evenodd" clipRule="evenodd">
        <motion.path
          variants={{
            normal: {
              d: "M110 256.58 L220.85 320.58 V352.58 L110 288.58 Z",
            },
            pressed: {
              d: "M110 270.58 L220.85 334.58 V352.58 L110 288.58 Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M220.85 320.58 L386.48 224.58 V256.58 L220.85 352.58 Z",
            },
            pressed: {
              d: "M220.85 334.58 L386.48 238.58 V256.58 L220.85 352.58 Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M386.48 224.58 L524.76 144.58 V176.58 L386.48 256.58 Z",
            },
            pressed: {
              d: "M386.48 238.58 L524.76 158.58 V176.58 L386.48 256.58 Z",
            },
          }}
          transition={transition}
        />
      </g>

      {/* Solid Fill Underneath Top Faces + Hatching Texture */}
      <use href={`#${ids.faceFill}`} className="fill-[var(--background)]" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      {/* Wireframe Outline Strokes: Base Stroke + Dynamic Cursor Spotlight */}
      <use href={`#${ids.stroke}`} stroke="var(--stroke)" strokeWidth="1.2" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} strokeWidth="1.2" />
    </motion.svg>
  )
}
