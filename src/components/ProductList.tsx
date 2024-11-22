import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Grid2 } from "@mui/material";
import { useGetProductsQuery } from "../store/services/products";
import { selectFilter } from "../store/filters/selector";

import { ProductCard } from "./ProductCard";

export const ProductList: FC = function () {
  const {
    categoryName,
    searchValue,
    sort: { sortProperty },
  } = useSelector(selectFilter);

  const category = categoryName !== "Все" ? `category=${categoryName}` : "";
  const search = searchValue ? `&name=${searchValue}` : "";
  const sortBy = sortProperty ? `&sortBy=${sortProperty}` : "";

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery(
    { category, search, sortBy },
    { skip: !true, refetchOnMountOrArgChange: true }
  );

  return (
    <Grid2 container spacing={3}>
      {products?.map((product) => (
        <Grid2 size={4} key={product.id}>
          <ProductCard {...product} />
        </Grid2>
      ))}
    </Grid2>
  );
};
