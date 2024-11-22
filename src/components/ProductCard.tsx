import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Product } from "../@types";
import { grey, orange } from "@mui/material/colors";

export const ProductCard: FC<Product> = function ({
  name,
  price,
  category,
  image,
}) {
  return (
    <Card sx={{ padding: ".5rem", paddingTop: "1rem" }}>
      <CardMedia
        component={"img"}
        sx={{ height: 200, objectFit: "contain", objectPosition: "center" }}
        image={image}
        title={name}
      />
      <CardContent sx={{ padding: "12px" }}>
        <Typography variant="h6" sx={{ color: grey[600] }}>
          {name}
        </Typography>
        <Typography component="p" sx={{ color: grey[600] }}>
          {price} сумов
        </Typography>
        <Typography component="p" sx={{ color: grey[600] }}>
          {category}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          size="medium"
          sx={{
            color: orange[600],
            bgcolor: "#fff",
            borderColor: orange[600],
            borderRadius: "12px",
          }}
        >
          в корзину
        </Button>
      </CardActions>
    </Card>
  );
};
