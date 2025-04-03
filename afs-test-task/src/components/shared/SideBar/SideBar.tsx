import { cn } from "../../../lib/utils";
import Button from "../../ui/Button/Button";
import {CompanyIcon,ContractorIcon,AccountIcon} from "../../../assets/Icons/index";
import styles from "./SideBar.module.css";

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  return (
    <aside className={cn(`${styles.sidebar}`, className)}>
        <div className={styles.sidebar_title}>
            <h2 className={styles.title_header}>Oak Tree Cemetery</h2>
            <p className={styles.title_description}>Process Manager</p>
        </div>
        <ul className={styles.sidebar_buttons}>
            <Button><CompanyIcon className={styles.icon} width={16} height={16}/><span>Organizations</span></Button>
            <Button btnType="outline"><ContractorIcon className={styles.icon} width={16} height={16}/><span>Contractors</span></Button>
            <Button btnType="outline"><AccountIcon className={styles.icon} width={16} height={16}/><span>Clients</span></Button>
        </ul>
    </aside>
  );
};

export default SideBar;
