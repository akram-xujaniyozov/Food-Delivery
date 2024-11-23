import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { grey } from "@mui/material/colors";

import cartEmptyImage from "../assets/cartEmpty.png";

export const CartEmpty: FC = function () {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{ fontFamily: "monospace", color: grey[600], marginBottom: 1 }}
      >
        Корзина пустая <span>😕</span>
      </Typography>
      <Typography
        component="p"
        sx={{ fontFamily: "monospace", color: grey[600] }}
      >
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </Typography>
      <img src={cartEmptyImage} alt="Empty cart" />
      <Box
        sx={{
          marginTop: 2,
          bgcolor: grey[500],
          paddingRight: "15px",
          borderRadius: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: grey[200] }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography component="p" sx={{ color: grey[200] }}>
            Вернуться назад
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
