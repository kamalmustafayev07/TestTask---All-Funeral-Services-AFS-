import { SVGProps } from "react"
const Account = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} viewBox="0 0 20 20">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.6 2.44c1.334.693 2.25 2.132 2.25 3.795 0 1.663-.916 3.102-2.25 3.795m1.8 4.927c1.36.643 2.585 1.692 3.6 3.043M1 18c1.752-2.332 4.13-3.765 6.75-3.765S12.748 15.668 14.5 18M11.8 6.235c0 2.34-1.813 4.236-4.05 4.236S3.7 8.574 3.7 6.235C3.7 3.896 5.513 2 7.75 2s4.05 1.896 4.05 4.235Z"
    />
  </svg>
)
export default Account;