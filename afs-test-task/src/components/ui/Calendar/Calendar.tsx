import { ControllerRenderProps } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "../../../lib/utils";
import styles from "./Calendar.module.css";

interface CalendarProps {
  className?: string;
  field: ControllerRenderProps<any, any>; 
}

const Calendar: React.FC<CalendarProps> = ({ className, field }) => {
  return (
    <div className={cn(styles.calendarWrapper, className)}>
      <DatePicker
        selected={field.value ? new Date(field.value) : null}
        onChange={(date) => field.onChange(date)}
        dateFormat="dd.MM.yyyy"
        className={styles.input}
      />
    </div>
  );
};

export default Calendar;


