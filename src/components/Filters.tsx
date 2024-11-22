import React, { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useGetCategoriesQuery } from "../store/services";
import { useAppDispatch } from "../store";
import { selectFilter } from "../store/filters/selector";
import { setCategoryId } from "../store/filters/slice";
import { Categories } from "./Categories";
import { Sort } from "./Sort";

export const Filters: FC = function () {
  const dispatch = useAppDispatch();
  const { categoryName } = useSelector(selectFilter);
  const { data: categories, isLoading } = useGetCategoriesQuery();

  const handleChange = useCallback((currentCategory: string) => {
    dispatch(setCategoryId(currentCategory));
  }, []);

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
      <Categories
        categories={categories}
        onChangeCategory={handleChange}
        categoryName={categoryName}
      />
      {!isLoading && categories && <Sort />}
    </Box>
  );
};
