import React, { FC, useState, useEffect } from "react";
import { useAppDispatch } from "../store";
import {
  Box,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { grey, orange } from "@mui/material/colors";
import toast, { Toaster } from "react-hot-toast";

import { addItem, minusItem, removeItem } from "../store/cart/slice";
import { CartItem as CartItemType } from "../@types";
import { Form } from "./Form";

export const CartItem: FC<CartItemType> = function ({
  id,
  image,
  name,
  price,
  description,
  count,
}) {
  const dispatch = useAppDispatch();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [successOrder, setSuccessOrder] = useState<boolean>(false);
  const [errorOrder, setErrorOrder] = useState<boolean>(false);

  const handleClickPlus = (id: number) => {
    dispatch(addItem({ id } as CartItemType));
  };
  const handleClickMinus = (id: number) => {
    dispatch(minusItem(id));
  };
  const handleClickRemove = (id: number) => {
    if (window.confirm(`Are you sure you want to remove?`))
      dispatch(removeItem(id));
  };

  useEffect(() => {
    setSuccessOrder(false);
  }, [successOrder]);

  const toastStyles = {
    minWidth: "250px",
    fontSize: "18px",
    fontFamily: "monospace",
    padding: "12px",
  };

  if (successOrder) {
    toast.success("Вы успешно заказывали!", {
      duration: 4000,
      position: "top-right",
      style: toastStyles,
      icon: "✅",
    });
  }

  if (errorOrder) {
    toast.error("Error", {
      duration: 4000,
      position: "top-right",
      style: toastStyles,
      icon: "❌",
    });
  }

  return (
    <Box>
      <Card
        sx={{
          marginTop: 1.5,
          paddingX: 2,
          paddingY: 1.2,
          borderRadius: 10,
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image={image}
              alt={name}
            />
          </Grid2>
          <Grid2 size={9}>
            <CardContent
              sx={{
                flex: "1 0 auto",
                paddingBottom: 0,
                position: "relative",
              }}
            >
              <IconButton
                onClick={() => handleClickRemove(id)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: grey[400],
                }}
              >
                <ClearIcon />
              </IconButton>
              <Typography
                component="div"
                variant="h5"
                sx={{ color: grey[600], paddingBottom: 1 }}
              >
                {name}
              </Typography>
              <Typography
                component="p"
                sx={{ color: grey[500], paddingBottom: 1, fontSize: 14 }}
              >
                {description}
              </Typography>
              <Typography
                component="p"
                sx={{ color: grey[500], paddingBottom: 0.8, fontSize: 20 }}
              >
                {price * count} сумов
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "10px",
                }}
              >
                <IconButton
                  onClick={() => handleClickPlus(id)}
                  sx={{
                    borderRadius: "50%",
                    borderColor: grey[400],
                    borderStyle: "solid",
                    borderWidth: "1px",
                    color: grey[400],
                    padding: 0.3,
                  }}
                >
                  <AddIcon />
                </IconButton>
                <Typography
                  component="p"
                  sx={{ color: grey[400], fontSize: 20 }}
                >
                  {count}
                </Typography>
                <IconButton
                  disabled={count == 0}
                  onClick={() => handleClickMinus(id)}
                  sx={{
                    borderRadius: "50%",
                    borderColor: grey[400],
                    borderStyle: "solid",
                    borderWidth: "1px",
                    color: grey[400],
                    padding: 0.3,
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
              <Box
                component="div"
                sx={{ position: "absolute", bottom: 0, right: 1.5 }}
              >
                <Button
                  variant="outlined"
                  onClick={() => setOpenDialog(true)}
                  sx={{
                    color: orange[600],
                    bgcolor: "#fff",
                    borderColor: orange[600],
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                >
                  Заказать
                </Button>
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                  <DialogContent>
                    <Form
                      productId={id}
                      quantity={count}
                      onCloseForm={setOpenDialog}
                      getSuccessOrder={setSuccessOrder}
                      getErrorOrder={setErrorOrder}
                    />
                  </DialogContent>
                </Dialog>
              </Box>
            </CardContent>
          </Grid2>
        </Grid2>
      </Card>
      <Toaster />
    </Box>
  );
};
