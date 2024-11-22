import React, { FC, memo } from "react";
import { Stack, ListItem, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Category } from "../@types";

type CategoriesProps = {
  categories: Category[] | undefined;
  categoryName: string;
  onChangeCategory: (name: string) => void;
};

export const Categories: FC<CategoriesProps> = memo(function ({
  categories,
  categoryName,
  onChangeCategory,
}) {
  return (
    <Stack direction="row" spacing={1}>
      {categories?.map((categoryObj) => (
        <ListItem key={categoryObj.id}>
          <Button
            variant="contained"
            sx={{
              bgcolor:
                categoryObj.category === categoryName ? grey[800] : grey[200],
              color:
                categoryObj.category === categoryName ? grey[200] : grey[600],
              borderRadius: "15px",
              fontSize: "12px",
            }}
            onClick={() => onChangeCategory(categoryObj.category)}
          >
            {categoryObj.category}
          </Button>
        </ListItem>
      ))}
    </Stack>
  );
});
