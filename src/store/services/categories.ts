import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../../@types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://6105ea5b54b7e9ee.mokky.dev" }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => `/categories`,
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
