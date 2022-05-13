import "./login.scss";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import {
  googleAuthUser,
  loginUser,
  registerUser,
} from "../../Redux/Auth/auth.thunk";
import _ from "lodash";
import validator from "validator";
import { RootState } from "../../Redux/store";
import { ToastContainer } from "react-toastify";
import { setIsMember } from "../../Redux/Auth/auth.slice";
import GoogleIcon from "@mui/icons-material/Google";

export interface FormLogin {
  email: string;
  password: string;
  name?: string;
}

function Login() {
  const defaultValues: FormLogin = { email: "", password: "", name: "" };
  const { isLoading, isMember } = useSelector(
    (state: RootState) => state.userAuth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormLogin> = useCallback(
    async (data, event) => {
      event?.preventDefault();
      if (isMember) {
        await dispatch(loginUser(data));
        navigate("/dashboard", { replace: true });
        return;
      }
      await dispatch(registerUser(data));
      dispatch(setIsMember());
    },
    []
  );

  const handleGAuth = async () => {
    await dispatch(googleAuthUser());
    navigate("/dashboard", { replace: true });
  };
  // const handleClickGbtn = async () => {
  //   await dispatch(googleAuthUser());
  // };

  useEffect(() => {
    reset({ email: "", password: "", name: "" });

    clearErrors();
  }, [isSubmitSuccessful, isMember]);

  const registerOptions = {
    name: {
      minLength: 3,
      maxLength: 30,
    },
    email: {
      required: "Email is required",
      validate: {
        isEmail: (value: string) =>
          validator.isEmail(value) || "Is not a valid email",
      },
    },
    password: {
      required: "Password is required",
      validate: {
        isStrong: (value: string) =>
          validator.isStrongPassword(value) || "Is not Strong",
      },
    },
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          {!isMember && (
            <TextField
              id="name"
              {...register("name", registerOptions.name)}
              margin="normal"
              fullWidth
              label="Full name"
              autoComplete="name"
              autoFocus
              error={_.has(errors, "name")}
              helperText={errors.name?.message}
            />
          )}
          <TextField
            id="email"
            {...register("email", registerOptions.email)}
            margin="normal"
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={_.has(errors, "email")}
            helperText={errors.email?.message}
          />
          <TextField
            id="password"
            type="password"
            {...register("password", isMember ? {} : registerOptions.password)}
            margin="normal"
            fullWidth
            label="Password"
            autoComplete="current-password"
            error={_.has(errors, "password")}
            helperText={errors.password?.message}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isMember ? "Sign In" : "Register"}
          </Button>
          <ToastContainer />
          <Grid container>
            <Grid item xs>
              <Link variant="button" sx={{ cursor: "pointer" }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                variant="button"
                sx={{ cursor: "pointer" }}
                onClick={() => dispatch(setIsMember())}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <div className="sign-using__root flow mt-large">
            <div className="sign-using__header">
              <Typography variant="subtitle1">Or sign up using:</Typography>
            </div>
            <div className="sign-using__body">
              <IconButton className="btn__google" onClick={handleGAuth}>
                <GoogleIcon />
              </IconButton>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
