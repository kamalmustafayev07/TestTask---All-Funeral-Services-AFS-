import { makeAutoObservable } from "mobx";
import { companyApi } from "../services/companyApi";
import { store } from "./index";
import { Company, CompanyDetailsUpdate, ContactUpdate } from "../types/company.types";
import { Contact } from "../types/contact.types";

class CompanyStore {
  company: Company | null = null;
  contact: Contact | null = null;
  token: string | null = null;
  isLoading: boolean = false;
  isUpdating:boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("authToken", token);
  }

  setCompany(data: Company) {
    this.company = data;
  }

  setContact(data: Contact) {
    this.contact = data;
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  setUpdating(updating: boolean) {
    this.isUpdating = updating;
  }

  async authenticate() {
    try {
      const response = await fetch("https://test-task-api.allfuneral.com/auth?user=USERNAME");
      if (!response.ok) throw new Error("Ошибка авторизации");

      const token = response.headers.get("Authorization")?.replace("Bearer ", "");
      if (token) this.setToken(token);
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
    }
  }

  async fetchCompany(id: number) {
    this.setLoading(true);
    try {
      const result = await store.dispatch(companyApi.endpoints.getCompany.initiate(id)).unwrap();
      this.setCompany(result);
    } catch (error) {
      console.error("Ошибка при загрузке компании:", error);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchUpdateContact(id: number, data:ContactUpdate) {
    this.setUpdating(true);
    try {
      console.log("Обновляем контакт с данными:", data);
      await store.dispatch(companyApi.endpoints.updateContact.initiate({id,data})).unwrap();
    } catch (error) {
      console.error("Ошибка при загрузке компании:", error);
    } finally {
      this.setUpdating(false);
    }
  }


  async fetchUpdateCompanyDetails(id: number, data:CompanyDetailsUpdate) {
    this.setUpdating(true);
    try {
      console.log("Обновляем контакт с данными:", data);
      await store.dispatch(companyApi.endpoints.updateCompany.initiate({id,data})).unwrap();
    } catch (error) {
      console.error("Ошибка при загрузке компании:", error);
    } finally {
      this.setUpdating(false);
    }
  }

  async fetchContact(id: number) {
    this.setLoading(true);
    try {
      const result = await store.dispatch(companyApi.endpoints.getContact.initiate(id)).unwrap();
      this.setContact(result);
    } catch (error) {
      console.error("Ошибка при загрузке контакта:", error);
    } finally {
      this.setLoading(false);
    }
  }
}

export const companyStore = new CompanyStore();

