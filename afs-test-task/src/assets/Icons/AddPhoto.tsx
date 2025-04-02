import { SVGProps } from "react"
const AddPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} viewBox="0 0 20 20">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.334 9.583v2.584c0 1.867 0 2.8-.364 3.513a3.333 3.333 0 0 1-1.456 1.457c-.713.363-1.647.363-3.514.363H7c-1.867 0-2.8 0-3.513-.363A3.333 3.333 0 0 1 2.03 15.68c-.363-.713-.363-1.646-.363-3.513V7.833c0-1.867 0-2.8.363-3.513.32-.627.83-1.137 1.457-1.457C4.2 2.5 5.133 2.5 7 2.5h3.417m5.417 4.167v-5m-2.5 2.5h5m-5 5.833a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
    />
  </svg>
)
export default AddPhoto
