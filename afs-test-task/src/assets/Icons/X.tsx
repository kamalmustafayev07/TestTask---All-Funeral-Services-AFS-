import { SVGProps } from "react"
const X = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} viewBox="0 0 20 20">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.625 4.375-11.25 11.25M15.625 15.625 4.375 4.375"
    />
  </svg>
)
export default X
