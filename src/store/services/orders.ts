import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order } from "../../@types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://6105ea5b54b7e9ee.mokky.dev" }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    addOrder: builder.mutation<Order, Partial<Order>>({
      query: (order) => ({
        url: "/orders",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const { useAddOrderMutation } = orderApi;
