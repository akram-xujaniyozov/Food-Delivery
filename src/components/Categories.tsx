import React, { FC } from "react";
import { useGetCategoriesQuery } from "../store/services";
import { Stack, ListItem, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

export const Categories: FC = function () {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <Stack direction="row" spacing={1}>
      {categories?.map((cateObj) => (
        <ListItem key={cateObj.id}>
          <Button
            variant="contained"
            sx={{
              bgcolor: grey[200],
              color: grey[600],
              borderRadius: "15px",
              fontSize: "12px",
            }}
          >
            {cateObj.category}
          </Button>
        </ListItem>
      ))}
    </Stack>
  );
};
