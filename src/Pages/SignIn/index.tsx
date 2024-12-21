import { createClient } from "@supabase/supabase-js";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { CreateAcc, InputBox, SignInWrapper } from "./SignIn";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface Users {
  user: string;
  password: string;
  email: string;
  number: string;
  name: string;
}

interface SignInProps {
  onLoginSuccess?: (isLoggedIn: boolean) => void; // Example prop
}

const SignIn: React.FC<SignInProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [userData, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const FetchData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("car data").select("*");
      if (error) {
        console.error("Error fetching data:");
      } else {
        setData(data || []);
        localStorage.setItem("carData", JSON.stringify(data));
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setError("Emailni kiriting!");
      return;
    }
    if (!inputValue.includes("@gmail.com")) {
      setError("Faqat Gmail manzillariga ruxsat berilgan!");
      return;
    }
    if (inputValue.length > 50) {
      setError("Qiymat 50 ta belgidan oshmasligi kerak!");
      return;
    }
    {
      setError(null);
    }
    setValue(inputValue);
  };

  const handleSubmit = async () => {
    const notifyError = () =>
      toast.error("Ma'lumot yuborishda xatolik yuz berdi!");
    const notifyDuplicate = () =>
      toast.error("Bu email allaqachon ro'yxatdan o'tgan!");

    if (value.trim() === "") {
      notifyError();
      return;
    }

    try {
      // Check if the email already exists in the database
      const { data: existingUser, error: checkError } = await supabase
        .from("Users")
        .select("*")
        .eq("email", value)
        .single();

      if (checkError) {
        console.error("Error checking existing email:", checkError);
        notifyError();
        return;
      }

      if (existingUser) {
        console.log("Bu email allaqachon ro'yxatdan o'tgan!");
        notifyDuplicate();
        return;
      }

      const { data, error: insertError } = await supabase
        .from("Users")
        .insert([{ email: value }]);

      if (insertError) {
        console.error("Error inserting data:", insertError);
        notifyError();
      } else {
        console.log("Email muvaffaqiyatli ro'yxatga olindi:", data);
        FetchData();
        setValue("");
        navigate("/");
      }
    } catch (err) {
      console.error("Kutilmagan xatolik yuz berdi:", err);
      alert("Kutilmagan xatolik yuz berdi!");
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
      maxWidth="xl"
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Divider>
            <Chip label="or" size="small" />
          </Divider>
        </InputBox>
        <CreateAcc>
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
          <ToastContainer />
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
