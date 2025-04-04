import { cn, formatPhoneNumber } from "../../../lib/utils";
import styles from "./ContactsNormal.module.css";

interface ContactsNormalProps {
  className?: string;
  lastname:string;
  firstname:string;
  email:string;
  phone:string;
}

const ContactsNormal = ({ className,lastname,firstname,phone,email}: ContactsNormalProps) => {
  return (
    <div className={cn(`${styles.contacts_main}`, className)}>
    <div className={styles.main_line}>
      <h5 className={styles.line_title}>Responsible person:</h5>
      <p className={styles.line_value}>{firstname} {lastname}</p>
    </div>
    <div className={styles.main_line}>
      <h5 className={styles.line_title}>Phone number:</h5>
      <p className={styles.line_value}>{phone}</p>
    </div>
    <div className={styles.main_line}>
      <h5 className={styles.line_title}>E-mail:</h5>
      <p className={styles.line_value}>{email}</p>
    </div>
  </div>
  );
};

export default ContactsNormal;