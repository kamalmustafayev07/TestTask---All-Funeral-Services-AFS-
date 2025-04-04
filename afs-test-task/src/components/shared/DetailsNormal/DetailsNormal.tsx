import { cn, formatDate, formatPhoneNumber, formatType } from "../../../lib/utils";
import { Contract } from "../../../types/company.types";
import styles from "./DetailsNormal.module.css";

interface DetailsNormalProps {
  className?: string;
  businessEntity: string;
  contract: Contract;
  type: string[];
}

const DetailsNormal = ({ className,businessEntity,contract,type }: DetailsNormalProps) => {
  return (
    <div className={cn(`${styles.details_main}`, className)}>
      <div className={styles.main_line}>
        <h5 className={styles.line_title}>Agreement:</h5>
        <p className={styles.line_value}>{contract.no}</p>
        <p className={styles.line_seperator}>/</p>
        <p className={styles.line_value}>{formatDate(contract.issue_date)}</p>
      </div>
      <div className={styles.main_line}>
        <h5 className={styles.line_title}>Business entity:</h5>
        <p className={styles.line_value}>{businessEntity}</p>
      </div>
      <div className={styles.main_line}>
        <h5 className={styles.line_title}>Company type:</h5>
        <p className={styles.line_value}>{formatType(type)}</p>
      </div>
    </div>
  );
};

export default DetailsNormal;
