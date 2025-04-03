import { EditIcon } from "../../../assets/Icons";
import { cn, formatPhoneNumber } from "../../../lib/utils";
import Button from "../../ui/Button/Button";
import styles from "./CompanyDetails.module.css";

interface CompanyDetailsProps {
  className?: string;
  lastname:string;
  firstname:string;
  email:string;
  phone:string;
}

const CompanyDetails = ({ className,lastname,firstname,phone,email}: CompanyDetailsProps) => {
  return (
    <section className={cn(`${styles.details}`, className)}>
      <div className={styles.details_header}>
        <h3 className={styles.header_title}>Contacts</h3>
        <Button btnType="outline" className={styles.header_editButton}>
          <EditIcon width={16} height={16} />
          <span>Edit</span>
        </Button>
      </div>
      <div className={styles.details_main}>
        <div className={styles.main_line}>
          <h5 className={styles.line_title}>Responsible person:</h5>
          <p className={styles.line_value}>{firstname} {lastname}</p>
        </div>
        <div className={styles.main_line}>
          <h5 className={styles.line_title}>Phone number:</h5>
          <p className={styles.line_value}>{formatPhoneNumber(phone)}</p>
        </div>
        <div className={styles.main_line}>
          <h5 className={styles.line_title}>E-mail:</h5>
          <p className={styles.line_value}>{email}</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;