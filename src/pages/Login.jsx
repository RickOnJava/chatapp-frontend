import { useFileHandler, useInputValidation } from "6pp";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { server } from "../constants/config";
import { userExists } from "../redux/reducers/auth";
import { usernameValidator } from "../utils/validators";
import styles from "../components/styles/App.module.css";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging In...");

    setIsLoading(true);
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          username: username.value,
          password: password.value,
        },
        config
      );

      dispatch(userExists(data.user));
      toast.success(data.message, {
        id: toastId,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Creating Your Account...");

    setIsLoading(true);
    const formData = new FormData();
    formData.append("avatar", avatar.file);
    formData.append("name", name.value);
    formData.append("bio", bio.value);
    formData.append("username", username.value);
    formData.append("password", password.value);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/new`,
        formData,
        config
      );

      dispatch(userExists(data.user));
      toast.success(data.message, {
        id: toastId,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
    className={styles.backgroundDiv}
    style={{
      padding: isLogin?"none":"7rem 0 7rem",
    }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width:"100rem",    // i extra add this
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)",           
            border: "5px solid rgb(255, 255, 255)",
            boxShadow: "rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px",
            borderRadius: "40px",
          }}
        >
          {isLogin ? (
            <>
             
              <span className={styles.login}>Login</span>
              <div className={styles.typeEffectDiv}><Typewriter
              words={['Hello, Users', 'Welcome to Synchronous', 'Enjoy your stay!']}
              loop={0}
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              /></div>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                {/* <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                /> */}

                {/* <input 
                type="text"
                placeholder="Username"
                value={username.value} 
                onChange={username.changeHandler} 
                required 
                className={styles.username}
                />
                <input 
                type="password"
                placeholder="Password"
                value={password.value} 
                onChange={password.changeHandler} 
                required 
                className={styles.password}
                /> */}

                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={username.value}
                    onChange={username.changeHandler}
                    required
                  />
                  <label >
                    Enter The Username
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    value={password.value}
                    onChange={password.changeHandler}
                    required
                  />
                  <label >
                    Enter The Password
                  </label>
                </div>

                {/* <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                /> */}

                <button className={styles.loginButton} type="submit" disabled={isLoading}>
                  Login
                </button>

                {/* <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                >
                  Login
                </Button> */}

                <Typography textAlign={"center"} m={"1rem"} color={"rgb(170, 170, 170)"}>
                  OR
                </Typography>

                {/* <Button
                  disabled={isLoading}
                  variant="text"
                  onClick={toggleLogin}
                  fullWidth
                >
                  Sign Up Instead
                </Button> */}
                <button className={styles.signup} onClick={toggleLogin} disabled={isLoading}>
                  Sign Up Free
                </button>
              </form>
            </>
          ) : (
            <>
              <span className={styles.login}>Sign Up</span>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignup}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"} >
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  {avatar.error && (
                    <Typography
                      m={"1rem"}
                      width={"fit-content"}
                      display={"block"}
                      color="error"
                      variant="caption"
                    >
                      {avatar.error}
                    </Typography>
                  )}

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>

                {/* <TextField
                  required
                  fullWidth
                  label="Enter Your Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                /> */}
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={name.value}
                    onChange={name.changeHandler}
                    required
                  />
                  <label >
                    Enter Your Name
                  </label>
                </div>

                {/* <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                /> */}
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={bio.value}
                    onChange={bio.changeHandler}
                    required
                  />
                  <label >
                    Enter a Bio
                  </label>
                </div>

                {/* <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                /> */}
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={username.value}
                    onChange={username.changeHandler}
                    required
                  />
                  <label >
                    Enter The Username
                  </label>
                </div>

                {username.error && (
                  <Typography color="error" variant="caption">
                    {/* {username.error} */} 
                  </Typography>
                )}

                {/* <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                /> */}
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    value={password.value}
                    onChange={password.changeHandler}
                    required
                  />
                  <label >
                    Create a new Password
                  </label>
                </div>

                {/* <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                >
                  Sign Up
                </Button> */}

                <button className={styles.loginButton} type="submit" disabled={isLoading}>
                  Sign Up
                </button>

                <Typography textAlign={"center"} m={"1rem"} color={"rgb(170, 170, 170)"}>
                  OR
                </Typography>

                {/* <Button
                  disabled={isLoading}
                  variant="text"
                  onClick={toggleLogin}
                  fullWidth
                >
                  Login Instead
                </Button> */}
                <button className={styles.signup} onClick={toggleLogin} disabled={isLoading}>
                  Login Instead
                </button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};
export default Login;
