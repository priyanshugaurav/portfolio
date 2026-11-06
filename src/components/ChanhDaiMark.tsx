import type { ComponentProps } from "react"

export function ChanhDaiMark(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      className="h-5 w-auto"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v256H0V0ZM64 0h128v64H64V0ZM128 64h64v64h-64V64ZM64 128h128v64H64v-64ZM320 0h128v64H320V0ZM256 64h64v128h-64V64ZM384 128h128v64H384v-64ZM320 192h192v64H320v-64Z"
      />
    </svg>
  )
}
