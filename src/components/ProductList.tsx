import React, { FC } from "react";
import { Grid2 } from "@mui/material";
import { useGetProductsQuery } from "../store/services/products";

import { ProductCard } from "./ProductCard";

export const ProductList: FC = function () {
  const { data: products } = useGetProductsQuery();

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
