import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Company } from "../types/company.types";
import { Contact } from "../types/contact.types";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://test-task-api.allfuneral.com/",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery,
  endpoints: (builder) => ({
    getAuth: builder.query<{ token: string }, string>({
      query: (username) => `/auth?user=${username}`,
      transformResponse: (response: any, meta): { token: string } => {
        const token = meta?.response?.headers.get("Authorization")?.replace("Bearer ", "");
        if (!token) {
          throw new Error("Токен не найден в заголовках");
        }
        localStorage.setItem("authToken", token);
        return { token };
      },
    }),
    getCompany: builder.query<Company,number>({
      query: (id) => `/companies/${id}`,
    }),
    updateCompany: builder.mutation<any, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/companies/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteCompany: builder.mutation<any, string>({
      query: (id) => ({
        url: `/companies/${id}`,
        method: "DELETE",
      }),
    }),
    uploadCompanyImage: builder.mutation<any, { id: string; file: File }>({
      query: ({ id, file }) => {
        const formData = new FormData();
        formData.append("image", file);
        return {
          url: `/companies/${id}/image`,
          method: "POST",
          body: formData,
        };
      },
    }),
    deleteCompanyImage: builder.mutation<any, { id: string; imageName: string }>({
      query: ({ id, imageName }) => ({
        url: `/companies/${id}/image/${imageName}`,
        method: "DELETE",
      }),
    }),
    getContact: builder.query<Contact, number>({
      query: (id) => `/contacts/${id}`,
    }),
    updateContact: builder.mutation<any, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/contacts/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useLazyGetAuthQuery,
  useGetCompanyQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
  useUploadCompanyImageMutation,
  useDeleteCompanyImageMutation,
  useGetContactQuery,
  useUpdateContactMutation,
} = companyApi;
