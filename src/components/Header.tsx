import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { grey, orange, yellow } from "@mui/material/colors";

import { useAppDispatch } from "../store";
import { setSearchValue } from "../store/filters/slice";

import { Logo, Search } from "../ui";

export const Header: FC = function () {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleClick = () => {
    dispatch(setSearchValue(searchInput));
  };

  const handleClear = () => {
    dispatch(setSearchValue(""));
    setSearchInput("");
  };

  return (
    <AppBar
      position="static"
      sx={{
        paddingY: "18px",
        paddingX: "5px",
        bgcolor: yellow[600],
        boxShadow: "none",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecorationLine: "none", cursor: "pointer" }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Logo />
            <Typography variant="h5" sx={{ color: grey[900] }}>
              Доставка Еды
            </Typography>
          </Box>
        </Link>
        <Box component="div">
          <Search
            value={searchInput}
            getSearchInput={setSearchInput}
            onClickSearch={handleClick}
            onClearSearch={handleClear}
          />
        </Box>
        <Link to="cart">
          <Button
            variant="contained"
            startIcon={
              <AddShoppingCartIcon
                sx={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              />
            }
            sx={{
              bgcolor: orange[400],
              width: "6rem",
              borderRadius: "20px",
            }}
          >
            <Chip
              size="small"
              label={3}
              variant="outlined"
              sx={{
                bgcolor: "#fff",
                color: grey[500],
                fontSize: "14px",
              }}
            />
          </Button>
        </Link>
      </Container>
    </AppBar>
  );
};
