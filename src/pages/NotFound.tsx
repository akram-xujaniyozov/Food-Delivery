import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

export const NotFound: FC = function () {
  return (
    <Box
      component="div"
      sx={{
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "32px", textAlign: "center" }}>
        <span>🙂</span>
        <br />
        Ничего не найдено
      </Typography>
      <Typography component="p" sx={{ fontSize: "22px" }}>
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </Typography>
    </Box>
  );
};
