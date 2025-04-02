import { cn } from "../../../lib/utils";
import styles from "./Company.module.css";

interface CompanyProps {
  className?: string;
}

const Company = ({ className }: CompanyProps) => {
  return (
    <section className={cn(`${styles.company}`, className)}>
        
    </section>
  );
};

export default Company;
