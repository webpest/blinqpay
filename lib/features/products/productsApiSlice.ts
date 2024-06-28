import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "@/lib/types";

export const productsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  reducerPath: "productsApi",
  tagTypes: ["Product", "Category"],
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => `/products`,
      providesTags: ["Product"],
    }),
    getCategories: build.query<string[], void>({
      query: () => `/products/categories`,
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApiSlice;
