import { SVGProps } from "react"
const Company = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 20 20" 
    {...props}
  >
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" opacity={0.9}>
      <path
        strokeWidth={1.2}
        d="M16.875 5.625H3.125a.625.625 0 0 0-.625.625v10c0 .345.28.625.625.625h13.75c.346 0 .625-.28.625-.625v-10a.625.625 0 0 0-.625-.625ZM13.125 5.625v-1.25a1.25 1.25 0 0 0-1.25-1.25h-3.75a1.25 1.25 0 0 0-1.25 1.25v1.25"
      />
      <path
        strokeWidth={1.2}
        d="M17.5 9.868a14.93 14.93 0 0 1-7.5 2.007 14.93 14.93 0 0 1-7.5-2.006"
      />
      <path d="M9.063 9.375h1.874" />
    </g>
  </svg>
)
export default Company


