import React, { FC } from "react";
import { Grid2 } from "@mui/material";
import { Filters, ProductList } from "../components/";

export const HomePage: FC = function () {
  return (
    <Grid2 container spacing={3} sx={{ maxWidth: "80%", marginX: "auto" }}>
      <Grid2 size={12}>
        <Filters />
      </Grid2>
      <Grid2 size={12}>
        <ProductList />
      </Grid2>
    </Grid2>
  );
};
