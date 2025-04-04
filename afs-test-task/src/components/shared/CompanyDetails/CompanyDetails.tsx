import { useState } from "react";
import { CheckIcon, EditIcon, XIcon } from "../../../assets/Icons";
import Button from "../../ui/Button/Button";
import styles from "./CompanyDetails.module.css";
import { CompanyDetailsUpdate, Contract } from "../../../types/company.types";
import { cn } from "../../../lib/utils";
import DetailsNormal from "../DetailsNormal/DetailsNormal";
import DetailsEdit from "../DetailsEdit/DetailsEdit";
import { useForm } from "react-hook-form";
import { companyStore } from "../../../store/companyStore";
interface CompanyDetailsProps {
  id:number;
  name:string;
  shortName:string;
  className?: string;
  businessEntity:string;
  contract:Contract;
  type:string[];
}

const CompanyDetails = ({ className,contract,type,businessEntity,id,name,shortName }: CompanyDetailsProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control, 
    watch,
    formState: { errors },
    reset,
  } = useForm<CompanyDetailsUpdate>({
    defaultValues: {
      name,
      shortName,
      businessEntity,
      contract,
      type
    },
    mode: "onSubmit",
  });
  
  
      const onSubmit = async (data: CompanyDetailsUpdate) => {
        try {
          console.log(data);
          await companyStore.fetchUpdateCompanyDetails(id, data);
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
    <section className={cn(`${styles.details}`, className)}>
       <div className={styles.details_header}>
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
      {!isEditing ? <DetailsNormal businessEntity={businessEntity} contract={contract} type={type}/>: <DetailsEdit
          register={register}
          setValue={setValue}
          control={control}
          type={type}
          watch={watch}
        /> }
    </section>
  );
};

export default CompanyDetails;

