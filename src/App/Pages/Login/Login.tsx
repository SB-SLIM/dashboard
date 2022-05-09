import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { signup } from "../../Redux/Auth/auth.thunk";
import _ from "lodash";
import validator from "validator";

export interface FormLogin {
  email: string;
  password: string;
}

function Login() {
  const defaultValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormLogin> = (data) => {
    dispatch(signup(data));
    navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [isSubmitSuccessful]);

  const registerOptions = {
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
  console.log("🚀 ~ file: Login.tsx ~ line 65 ~ Login ~ errors", errors);

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
            {...register("password", registerOptions.password)}
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
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
