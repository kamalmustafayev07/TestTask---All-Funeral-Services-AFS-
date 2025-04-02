import { SVGProps } from "react"
const Edit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} viewBox="0 0 20 20">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.241 16.875H3.75a.625.625 0 0 1-.625-.625v-3.491a.625.625 0 0 1 .183-.442l9.375-9.375a.625.625 0 0 1 .884 0l3.491 3.491a.625.625 0 0 1 0 .884l-9.375 9.375a.627.627 0 0 1-.442.183ZM10.625 5 15 9.375M7.46 16.835 3.165 12.54"
    />
  </svg>
)
export default Edit