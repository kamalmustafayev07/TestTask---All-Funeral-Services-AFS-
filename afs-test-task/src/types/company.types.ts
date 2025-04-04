// Интерфейс для фото компании
export interface Photo {
    name: string;
    filepath: string;
    thumbpath: string;
    createdAt: string;
  }
  
  // Интерфейс для контракта
export interface Contract {
    no: string;
    issue_date: string;
  }
  
  // Основной интерфейс для компании
export interface Company {
    id: string;
    contactId: string;
    name: string;
    shortName: string;
    businessEntity: string;
    contract: Contract;
    type: string[];
    status: "active" | "inactive"; 
    createdAt: string;
    updatedAt: string;
    photos: Photo[];
  }
  

export interface ContactUpdate{
    firstname:string;
    lastname:string;
    phone:string;
    email:string;
}

export interface CompanyDetailsUpdate{
  name:string;
  shortName:string;
  businessEntity:string;
  contract:Contract;
  type:string[];
}