import React from "react";
import { Error as ErrorIcon } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Stack
        alignItems={"center"}
        spacing={"2rem"}
        justifyContent={"center"}
        height="100%"
      >
        {/* <ErrorIcon sx={{ fontSize: "10rem" }} />
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">Not Found</Typography> */}
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "7rem",
          }}
        > */}
          <Player
            autoplay
            loop
            src="https://lottie.host/2dae6793-9100-484c-9564-1bf016888f16/CkT3EJuT6V.json"
          ></Player>
        {/* </div> */}
        <Link to="/" style={{
          color: "#3a5bd2",
          textDecoration: "none",
          fontWeight: "bolder",
          fontSize: "1.2rem",
        }}>Go back to home</Link>
      </Stack>
    </Container>
  );
};

export default NotFound;
