import { SVGProps } from "react";

const Contractor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} viewBox="0 0 20 20">
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.667 4.633a7.166 7.166 0 0 1 5.491 6.959v1.591m-14.316 0v-1.591a7.142 7.142 0 0 1 5.491-6.959M17.158 13.183H2.842a1.592 1.592 0 0 0 0 3.184h14.316a1.592 1.592 0 1 0 0-3.184Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.383 13.183H7.617l.715-8.632a1 1 0 0 1 .997-.918h1.342a1 1 0 0 1 .997.918l.715 8.632Z"
    />
  </svg>
);

export default Contractor;
