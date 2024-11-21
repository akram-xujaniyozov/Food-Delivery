import React, { FC } from "react";
import { Box, Input, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

export const Search: FC = function () {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "white",
        minWidth: "27rem",
        borderRadius: "10px",
      }}
    >
      <Input
        sx={{
          minWidth: "25rem",
          fontSize: "18px",
          color: grey[600],
          paddingLeft: "15px",
          paddingY: "3px",
          borderRightColor: grey[300],
          borderRightWidth: "2px",
          borderRightStyle: "solid",
        }}
        disableUnderline={true}
        placeholder="Что вы хотите съесть сегодня..."
      />
      <IconButton size="medium">
        <SearchIcon sx={{ color: grey[400] }} />
      </IconButton>
    </Box>
  );
};
