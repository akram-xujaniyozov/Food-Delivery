import React, { FC } from "react";
import { Box, Input, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { grey } from "@mui/material/colors";

type SearchProps = {
  value: string;
  onClickSearch: () => void;
  onClearSearch: () => void;
  getSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export const Search: FC<SearchProps> = function ({
  value,
  onClickSearch,
  onClearSearch,
  getSearchInput,
}) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "white",
        minWidth: "27rem",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Input
        name="search"
        value={value}
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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          getSearchInput(event.target.value)
        }
      />
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          right: 50,
          top: 4,
          cursor: "pointer",
        }}
        onClick={onClearSearch}
      >
        <ClearIcon
          sx={{
            color: grey[400],
          }}
        />
      </IconButton>
      <IconButton size="medium" onClick={onClickSearch}>
        <SearchIcon sx={{ color: grey[400] }} />
      </IconButton>
    </Box>
  );
};
