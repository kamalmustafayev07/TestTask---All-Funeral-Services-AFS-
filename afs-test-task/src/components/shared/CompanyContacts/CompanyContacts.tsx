import { useState } from "react";
import { cn, formatPhoneNumber } from "../../../lib/utils";
import styles from "./CompanyContacts.module.css";
import Button from "../../ui/Button/Button";
import { CheckIcon, EditIcon, XIcon } from "../../../assets/Icons";
import ContactsNormal from "../ContactsNormal/ContactsNormal";
import ContactsEdit from "../ContactsEdit/ContactsEdit";
import { useForm } from "react-hook-form";
import { ContactUpdate } from "../../../types/company.types";
import { companyStore } from "../../../store/companyStore";

interface CompanyContactsProps {
  id: number;
  className?: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}

const CompanyContacts = ({
  className,
  id,
  lastname,
  firstname,
  phone,
  email,
}: CompanyContactsProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactUpdate>({
    defaultValues: {
      firstname,
      lastname,
      phone,
      email,
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactUpdate) => {
    const cleanData = {
      ...data,
      phone: data.phone.replace(/\D/g, ""),
    };
  

    try {
      console.log(data);
      await companyStore.fetchUpdateContact(id, cleanData);
      setIsEditing(false);
    } catch (err) {
      console.error("Update failed", err);
    }
  };
  

  const onCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <section className={cn(styles.contacts, className)}>
      <div className={styles.contacts_header}>
        <h3 className={styles.header_title}>Contacts</h3>
        {!isEditing ? (
          <Button
            btnType="outline"
            className={styles.header_editButton}
            onClick={() => setIsEditing(true)}
          >
            <EditIcon width={16} height={16} />
            <span>Edit</span>
          </Button>
        ) : (
          <div className={styles.buttons_edit}>
            <Button
              btnType="outline"
              className={styles.header_saveButton}
              onClick={handleSubmit(onSubmit)}
            >
              <CheckIcon width={16} height={16} />
              <span>Save Changes</span>
            </Button>
            <Button
              btnType="outline"
              className={styles.header_cancelButton}
              onClick={onCancel}
            >
              <XIcon width={16} height={16} />
              <span>Cancel</span>
            </Button>
          </div>
        )}
      </div>
      {!isEditing ? (
        <ContactsNormal
          lastname={lastname}
          firstname={firstname}
          email={email}
          phone={phone}
        />
      ) : (
        <ContactsEdit
          register={register}
          setValue={setValue}
          firstname={firstname}
          lastname={lastname}
        />
      )}
    </section>
  );
};

export default CompanyContacts;
