import { UseFormRegister, UseFormSetValue, Controller } from "react-hook-form";
import { cn, formatSelectorType, formatType } from "../../../lib/utils";
import Input from "../../ui/Input/Input";
import styles from "./DetailsEdit.module.css";
import { CompanyDetailsUpdate } from "../../../types/company.types";
import Calendar from "../../ui/Calendar/Calendar";
import Selector from "../../ui/Selector/Selector";

interface DetailsEditProps {
  className?: string;
  register: UseFormRegister<CompanyDetailsUpdate>;
  setValue: UseFormSetValue<CompanyDetailsUpdate>;
  control: any; 
  type:string[];
}

const DetailsEdit = ({ className, register, setValue, control,type }: DetailsEditProps) => {
  return (
    <form className={cn(styles.details_main, className)}>
      <div className={`${styles.main_line} ${styles.main_gap}`}>
        <div className={styles.line}>
          <label className={styles.line_title}>Agreement number:</label>
          <Input type="text" className={styles.line_value} {...register("contract.no")} />
        </div>

        <div className={styles.line}>
          <label className={`${styles.line_title} ${styles.line_date}`}>Date:</label>
          <Controller
            name="contract.issue_date"
            control={control}
            render={({ field }) => <Calendar field={field} className={styles.line_value} />}
          />
        </div>
      </div>

      <div className={styles.line}>
        <label className={styles.line_title}>Business entity:</label>
        <Selector options={['1', '2']} {...register("businessEntity")} />
      </div>

      <div className={styles.line}>
        <label className={styles.line_title}>Company type:</label>
        <Selector options={formatSelectorType(type)} {...register("type")} multiple={true}/>
      </div>
    </form>
  );
};

export default DetailsEdit;

