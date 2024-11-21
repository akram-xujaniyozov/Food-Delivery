import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Header } from "../components";

const DashBoard: FC = function () {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Header />
      <Box
        component="main"
        maxWidth="xl"
        sx={{
          margin: "0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};

export default DashBoard;
