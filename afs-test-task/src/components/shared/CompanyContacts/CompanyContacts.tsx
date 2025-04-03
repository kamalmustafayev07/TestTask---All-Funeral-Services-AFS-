import { EditIcon } from "../../../assets/Icons";
import { cn, formatDate, formatType } from "../../../lib/utils";
import { Contract } from "../../../types/company.types";
import Button from "../../ui/Button/Button";
import styles from "./CompanyContacts.module.css";
interface CompanyContactsProps {
  className?: string;
  businessEntity:string;
  contract:Contract;
  type:string[];
}

const CompanyContacts = ({ className,contract,type,businessEntity }: CompanyContactsProps) => {
  return (
    <section className={cn(`${styles.contacts}`, className)}>
      <div className={styles.contacts_header}>
        <h3 className={styles.header_title}>Company Details</h3>
        <Button btnType="outline" className={styles.header_editButton}>
          <EditIcon width={16} height={16} />
          <span>Edit</span>
        </Button>
      </div>
      <div className={styles.contacts_main}>
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
          <p className={styles.line_value}>
            {formatType(type)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyContacts;
