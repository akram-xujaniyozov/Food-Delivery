import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { Product } from "../@types";
import { useAppDispatch } from "../store";
import { addItem } from "../store/cart/slice";
import { selectCartItemById } from "../store/cart/selector";

export const ProductCard: FC<Product> = function ({
  id,
  name,
  price,
  category,
  image,
  description,
}) {
  const dispatch = useAppDispatch();
  const countItem = useSelector(selectCartItemById(id));
  const addedCount = countItem ? countItem.count : 0;

  const handleClick = () => {
    dispatch(
      addItem({ id, name, price, category, image, description, count: 0 })
    );
  };

  return (
    <Card sx={{ padding: ".5rem", paddingTop: "1rem", borderRadius: "15px" }}>
      <CardMedia
        component={"img"}
        sx={{ height: 200, objectFit: "contain", objectPosition: "center" }}
        image={image}
        title={name}
      />
      <CardContent sx={{ padding: "10px", paddingTop: "5px" }}>
        <Typography variant="h6" sx={{ color: grey[600] }}>
          {name}
        </Typography>
        <Typography component="p" sx={{ color: grey[600], marginY: "3px" }}>
          {price} сумов
        </Typography>
        <Typography component="p" sx={{ color: grey[600] }}>
          {category}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={handleClick}
          variant="contained"
          size="medium"
          sx={{
            color: orange[600],
            bgcolor: "#fff",
            borderColor: orange[600],
            borderRadius: 12,
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          в корзину
          <Chip
            size="small"
            label={addedCount}
            variant="outlined"
            sx={{
              bgcolor: orange[600],
              color: "#fff",
              fontSize: "14px",
              width: "25px",
              border: "none",
            }}
          />
        </Button>
      </CardActions>
    </Card>
  );
};
