import { Box, Container } from "@mui/system";
import React from "react";
import { CreateAcc, InputBox, SignInWrapper } from "./SignIn";
import {
  Button,
  Link,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = {};

function SignIn({}: Props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignInWrapper>
        <Typography variant="h1" fontSize={"29px"} marginBottom={"8px"}>
          Hi, Welcome Back!
        </Typography>

        <InputBox>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </InputBox>
        <CreateAcc>
          <Button variant="contained">Login</Button>
          <Typography>
            Already Have An Account?
            <Link
              sx={{
                cursor: "pointer",
              }}
            >
              Log in
            </Link>
          </Typography>
        </CreateAcc>
      </SignInWrapper>
    </Container>
  );
}

export default SignIn;
