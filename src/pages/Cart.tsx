import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { grey } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

import { CartItem as CartItemType } from "../@types";
import { selectCart } from "../store/cart/selector";
import { CartItem } from "../components/";
import { clearItems } from "../store/cart/slice";

export const CartPage: FC = function () {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: CartItemType) => sum + item.count,
    0
  );

  const handleClickClear = () => {
    if (window.confirm(`Are you sure you want to remove?`))
      dispatch(clearItems());
  };

  return (
    <Box component="div" sx={{ width: "60%", marginX: "auto" }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Link to="/">
          <IconButton
            sx={{
              borderRadius: "50%",
              borderColor: grey[400],
              borderStyle: "solid",
              borderWidth: "1px",
              color: grey[400],
              padding: 1,
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <Box component="div">
          <Button
            onClick={handleClickClear}
            sx={{
              color: grey[400],
              textTransform: "capitalize",
              fontSize: "18px",
              borderRadius: "15px",
            }}
          >
            Очистить корзину
            <DeleteOutlineIcon />
          </Button>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        {items.length > 0 && (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ color: grey[500], marginY: 1 }}
            >
              Количество заказа: {totalCount}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: grey[500], marginY: 1 }}
            >
              Сумма заказа: {totalPrice} сумов
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
