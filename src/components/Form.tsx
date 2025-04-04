import React, { FC, useEffect } from "react";
import {
  TextField,
  Stack,
  Button,
  Select,
  MenuItem,
  TextareaAutosize,
  FormHelperText,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { grey, green } from "@mui/material/colors";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAddOrderMutation } from "../store/services";
import { Order } from "../@types";

enum PaymentEnum {
  CASH = "cash",
  CARD = "card",
}

type OrderFormValues = {
  address: string;
  phone: string;
  payment: PaymentEnum;
  commment?: string;
};

type FormProps = {
  productId: number;
  quantity: number;
  onCloseForm: React.Dispatch<React.SetStateAction<boolean>>;
  getSuccessOrder: React.Dispatch<React.SetStateAction<boolean>>;
  getErrorOrder: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Form: FC<FormProps> = function ({
  productId,
  quantity,
  onCloseForm,
  getSuccessOrder,
  getErrorOrder,
}) {
  const [addOrder, { error: orderError, isSuccess, isLoading }] =
    useAddOrderMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormValues>({
    defaultValues: {
      address: "",
      phone: "",
      payment: PaymentEnum.CASH,
      commment: "",
    },
  });

  const onSubmit: SubmitHandler<OrderFormValues> = (data) => {
    const orderObject: Order = {
      address: data.address,
      phone: data.phone,
      paymentType: data.payment,
      items: [{ productId, quantity }],
      comment: data.commment,
    };

    addOrder(orderObject)
      .unwrap()
      .then((payload) => {
        if (payload.items.length > 0) getSuccessOrder(true);
      })
      .catch((error) => {
        if (error) getErrorOrder(true);
      });
    onCloseForm(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography
        component="div"
        variant="h5"
        sx={{ color: grey[600], fontSize: 24, marginBottom: 1 }}
      >
        Передать заказ
      </Typography>
      <Stack spacing={2} width={400}>
        <TextField
          label="Address"
          type="text"
          {...register("address", {
            required: "Address is required",
          })}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <TextField
          label="Phone"
          type="tel"
          {...register("phone", {
            required: "Phone is required",
            pattern: /^(\+998)-(9[0-9])-\d{3}-\d{2}-\d{2}$/,
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          placeholder="+998-90-000-00-00"
        />
        <FormControl fullWidth>
          <InputLabel id="payment-label">Payment</InputLabel>
          <Select
            labelId="payment-label"
            label="Payment"
            defaultValue={""}
            {...register("payment", {
              required: "Payment is required",
            })}
          >
            <MenuItem value="cash">Cash</MenuItem>
            <MenuItem value="card">Card</MenuItem>
          </Select>
          <FormHelperText error={!!errors.payment}>
            {errors.payment?.message}
          </FormHelperText>
        </FormControl>
        <TextareaAutosize minRows={7} maxRows={30} {...register("commment")} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            color: green[500],
            bgcolor: "#fff",
            borderColor: green[500],
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: 12,
          }}
        >
          Отправить
        </Button>
      </Stack>
    </form>
  );
};
