import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../@types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://6105ea5b54b7e9ee.mokky.dev" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<
      Product[],
      { category: string; search: string; sortBy: string }
    >({
      query: ({ category, search, sortBy }) =>
        `/products?${category}${search}${sortBy}`,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
