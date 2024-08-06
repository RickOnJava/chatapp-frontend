import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";
import styles from "../components/styles/App.module.css";
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>

      <div className={styles.container}>
        Welcome to the
        <span
          style={{ color: "#1808be", marginLeft: "10px", fontWeight: "bolder" }}
        >
          Synchronous
        </span>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        A Real Time Chat App
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "7rem" }}>
      <Player
        autoplay
        loop
        // src="https://lottie.host/a27e67d8-a41c-4ee3-b7d5-96f0df9d2b30/Kk6ZUnSlLr.json" // Replace with your Lottie JSON file URL
        src="https://lottie.host/d19984d1-4eaa-4c43-9286-e374fb1fe0a0/7QAk5WUwWb.json" // Replace with your Lottie JSON file URL
        style={{ height: '250px', width: '250px' }}
      >
      </Player>
    </div>
    </Box>
  );
};

export default AppLayout()(Home);
