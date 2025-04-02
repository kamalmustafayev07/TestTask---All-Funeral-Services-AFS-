import { CompanyIcon, SearchIcon } from "../assets/Icons/index";

interface mainmenuButtonType {
  id:number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export const mainmenuButtons: mainmenuButtonType[] = [
  {
    id:0,
    icon: CompanyIcon,
    link: "company",
  },
  {
    id:1,
    icon: SearchIcon,
    link: "search",
  },
];
