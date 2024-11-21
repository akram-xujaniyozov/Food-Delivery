import React, { FC } from "react";
import { Categories } from "./Categories";
import { Sort } from "./Sort";
import { Box } from "@mui/material";

export const Filters: FC = function () {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "15px",
      }}
    >
      <Categories />
      <Sort />
    </Box>
  );
};
