import { SVGProps } from "react"
const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} viewBox="0 0 20 20">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.875 5.625-8.75 8.75L3.75 10"
    />
  </svg>
)
export default Check
