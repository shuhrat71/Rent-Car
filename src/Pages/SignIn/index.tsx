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

interface SignInProps {
  onLoginSuccess?: (isLoggedIn: boolean) => void; // Example prop
}

const SignIn: React.FC<SignInProps> = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [userData, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const FetchData = async () => {
    const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Supabase-dan ma'lumotlarni olish
    const FetchData = async () => {
      const { data, error } = await supabase.from("car data").select("*");
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
      FetchData();
    }, []);

    // Input qiymatini o'zgartirish
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      // Validatsiya
      if (inputValue.trim() === "") {
        setError("Emailni kiriting!");
      } else if (!inputValue.includes("@gmail.com")) {
        setError("Faqat Gmail manzillariga ruxsat berilgan!");
      } else if (inputValue.length > 50) {
        setError("Qiymat 50 ta belgidan oshmasligi kerak!");
      } else {
        setError(null);
      }

      setValue(inputValue);
    };

    // Supabase-ga ma'lumot yuborish
    const handleSubmit = async () => {
      if (error || value.trim() === "") {
        alert("Iltimos, barcha xatolarni to'g'rilang va qayta urinib ko'ring!");
        return;
      }

      try {
        const { data, error } = await supabase
          .from("Users")
          .insert([{ email: value }]); // Supabase-ga kiritilayotgan ma'lumot

        if (error) {
          console.error("Error inserting data:", error);
          alert("Ma'lumot yuborishda xatolik yuz berdi!");
        } else {
          console.log("Data inserted:", data);
          alert("Ma'lumot muvaffaqiyatli yuborildi!");
          FetchData(); // Yangi ma'lumotlarni yuklash
          setValue(""); // Inputni tozalash
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        alert("Kutilmagan xatolik yuz berdi!");
      }

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
  };
};
export default SignIn;
