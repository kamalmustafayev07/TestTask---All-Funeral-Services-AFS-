import { mainmenuButtons } from "../../../data/mainmenuButtons";
import { cn } from "../../../lib/utils";
import Button from "../../ui/Button/Button";
import styles from "./MainMenu.module.css";
import { SettingsIcon, SignOutIcon } from "../../../assets/Icons/index";
import OakTree from "../../../assets/Logo/OakTree";
import { Link } from "react-router-dom"; // Импортируем Link для маршрутизации

interface MainMenuProps {
  className?: string;
}

const MainMenu = ({ className }: MainMenuProps) => {
  return (
    <nav className={cn(`${styles.mainmenu}`, className)}>
      <a className={styles.mainmenu_logo} href="/">
        <OakTree className={styles.logo} />
      </a>
      <div className={styles.mainmenu_main}>
        <ul className={styles.main_upperBtns}>
          {mainmenuButtons.map((item) => (
            <li key={item.id}>
              <Link to={`/${item.link}`}>
                <Button btnType="icon" className={styles.mainmenuButton}>
                  <item.icon className={styles.icon} />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.main_bottomBtns}>
          <Button btnType="icon" className={styles.mainmenuButton}>
            <SettingsIcon className={styles.icon} />
          </Button>
          <Button btnType="icon" className={styles.mainmenuButton}>
            <SignOutIcon className={styles.icon} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;

