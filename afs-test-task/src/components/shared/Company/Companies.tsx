import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { cn, formatPhoneNumber } from "../../../lib/utils";
import Button from "../../ui/Button/Button";
import styles from "./Companies.module.css";
import { ChevronIcon, EditIcon, TrashIcon } from "../../../assets/Icons/index";
import CompanyContacts from "../CompanyContacts/CompanyContacts";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import { companyStore } from "../../../store/companyStore";

interface CompanyProps {
  className?: string;
}

const Company = observer(({ className }: CompanyProps) => {
  useEffect(() => {
    companyStore.fetchCompany(12);
    companyStore.fetchContact(16);
  }, []);

  const { isLoading, company, contact } = companyStore;

  return (
    <section className={cn(styles.companies, className)}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (!company || !contact) ? (
        <p>Компания не найдена</p>
      ) : (
        <section className={styles.companies_main}>
          <div className={styles.backButton_container}>
            <Button btnType="icon" className={styles.backButton}>
              <ChevronIcon width={20} height={20} />
            </Button>
          </div>
          <div className={styles.main_container}>
            <div className={styles.title_container}>
              <h2 className={styles.title}>{company.name}</h2>
              <div className={styles.title_editButtons}>
                <Button btnType="icon" className={styles.editButton}>
                  <EditIcon width={20} height={20} />
                </Button>
                <Button btnType="icon" className={styles.trashButton}>
                  <TrashIcon width={20} height={20} />
                </Button>
              </div>
            </div>
            <div className={styles.companies_cards}>
              <CompanyDetails
                id={+company.id}
                name={company.name}
                shortName={company.shortName}
                businessEntity={company.businessEntity}
                contract={company.contract}
                type={company.type}
              />
              <CompanyContacts id={+contact.id} firstname={contact.firstname} lastname={contact.lastname} email={contact.email} phone={formatPhoneNumber(contact.phone)} />
            </div>
          </div>
        </section>
      )}
    </section>
  );
});

export default Company;

