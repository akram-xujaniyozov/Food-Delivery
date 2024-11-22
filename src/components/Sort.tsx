import React, { FC, useState } from "react";
import {
  Popover,
  Button,
  List,
  ListItem,
  Typography,
  Box,
} from "@mui/material";

import { grey, deepOrange } from "@mui/material/colors";

import { useAppDispatch } from "../store";
import { setSort } from "../store/filters/slice";
import { SortPropertyEnum, SortBy } from "../@types";

export const sortList: Array<SortBy> = [
  {
    name: "уменьшение",
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
  {
    name: "увеличение",
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
];

export const Sort: FC = function () {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (obj: SortBy) => {
    dispatch(setSort(obj));
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  return (
    <Box component="div">
      <Button
        aria-describedby={id}
        variant="contained"
        sx={{
          bgcolor: deepOrange[400],
          color: grey[100],
          borderRadius: "10px",
          fontSize: "12px",
        }}
        onClick={handleOpen}
      >
        Сортировать по цене
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List sx={{ width: 185 }}>
          {sortList.map((obj, i) => (
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleClose(obj)}
              key={i}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: 16,
                  textTransform: "capitalize",
                }}
              >
                {obj.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Popover>
    </Box>
  );
};
