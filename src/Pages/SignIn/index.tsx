import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { CreateAcc, InputBox, SignInWrapper } from "./SignIn";
import { useNavigate } from "react-router-dom";
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
import { createClient } from "@supabase/supabase-js";

interface Users {
  user: string;
  password: string;
  email: string;
  number: string;
  name: string;
}

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [userData, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase.from("Users").select("*");
    console.log(data);
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(data || []);
    }
    setLoading(false);
    localStorage.setItem("carData", JSON.stringify(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length < 10 && inputValue.includes("@gmail.com")) {
      setError("Qiymat 10 ta belgidan oshmasligi kerak!");
    } else {
      setError(null);
    }

    setValue(inputValue);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (value.length === 0) {
      setError("Maydon bo'sh bo'lishi mumkin emas!");
    } else if (!error) {
      navigate("/");
    }
  };

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
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
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
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
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
};

export default SignIn;
