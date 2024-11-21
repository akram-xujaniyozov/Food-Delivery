import React, { FC } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export const Logo: FC = () => {
  return (
    <FastfoodIcon
      sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "#000" }}
    />
  );
};
