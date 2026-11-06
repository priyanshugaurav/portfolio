import type { ComponentProps } from "react"

/**
 * Geometric Ascending Ramp Brand Glyph
 * Designed with architectural precision: ascending isometric steps and ramp
 */
export function RampBrandMark(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      className="h-5 w-auto"
      {...props}
    >
      {/* Ascending Geometric Ramp / Stepped Monolith */}
      <path
        fill="currentColor"
        d="M64 256H0v-64h64v64Zm128 0h-64v-128h64v128Zm128 0h-64V64h64v192Zm128 0h-64V0h64v256ZM512 0h-32v256h32V0ZM256 0h-32v64h32V0Z"
      />
    </svg>
  )
}
