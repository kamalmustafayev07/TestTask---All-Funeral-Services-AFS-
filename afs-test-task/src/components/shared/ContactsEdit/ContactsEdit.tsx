import { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { cn, formatPhoneNumber } from "../../../lib/utils";
import Input from "../../ui/Input/Input";
import styles from "./ContactsEdit.module.css";
import { ContactUpdate } from "../../../types/company.types";

interface ContactsEditProps {
  className?: string;
  register: UseFormRegister<ContactUpdate>;
  setValue: UseFormSetValue<ContactUpdate>;
  firstname: string;
  lastname: string;
}

const ContactsEdit = ({
  className,
  register,
  setValue,
  lastname,
  firstname,
}: ContactsEditProps) => {
  const [fullName, setFullName] = useState(`${firstname} ${lastname}`);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  
    const words = value.trim().split(/\s+/);
  
    if (words.length > 2 || (words.length === 2 && value.endsWith(" "))) {
      return;
    }
  
    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  
    setFullName(value);
    setValue("firstname", formattedWords[0] || "");
    setValue("lastname", formattedWords[1] || "");
  };
  
  

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted);
  };

  return (
    <form className={cn(styles.contacts_main, className)}>
      <div className={styles.main_line}>
        <label className={styles.line_title}>Responsible person:</label>
        <Input
          type="text"
          placeholder="First Last"
          className={styles.line_value}
          onChange={handleNameChange}
          value={fullName}
        />
      </div>
      <div className={styles.main_line}>
        <label className={styles.line_title}>Phone number:</label>
        <Input
          type="text"
          {...register("phone")}
          className={styles.line_value}
          onChange={handlePhoneChange}
        />
      </div>
      <div className={styles.main_line}>
        <label className={styles.line_title}>E-mail:</label>
        <Input
          type="email"
          {...register("email")}
          className={styles.line_value}
        />
      </div>
    </form>
  );
};

export default ContactsEdit;
