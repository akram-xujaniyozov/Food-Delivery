import React, { FC, useState } from "react";
import { grey, teal, deepOrange } from "@mui/material/colors";
import { Popover, Button, List, ListItem, Typography } from "@mui/material";

export const Sort: FC = function () {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
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
        <List>
          <ListItem onClick={handleClose}>
            <Typography component="p">The content of the Popover</Typography>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};
