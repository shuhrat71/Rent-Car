import { Box, Container } from "@mui/system";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { InputBox, SignInWrapper } from "./SignUp";
import { Button, Link, TextField, Typography } from "@mui/material";
import { CreateAcc } from "../LogIn/LogIn";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ROUTE_PATHS } from "../../routes/paths";

type Props = {};

function SignUp({}: Props) {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const navigate = useNavigate();

  const FetchData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("Users").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
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

  const handleSubmit = async () => {
    const notifyError = (msg: string) => toast.error(msg);
    const notifySuccess = (msg: string) => toast.success(msg);

    // Inputlar bo'shligini tekshirish
    if (!name.trim() || !email.trim() || !password.trim() || !number.trim()) {
      notifyError("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    // Email duplikatini tekshirish
    try {
      const { data: existingUsers, error: fetchError } = await supabase
        .from("Users")
        .select("email")
        .eq("email", email);

      if (fetchError) {
        console.error("Error checking existing email:", fetchError);
        notifyError("Ma'lumotlarni tekshirishda xatolik yuz berdi!");
        return;
      }

      if (existingUsers && existingUsers.length > 0) {
        notifyError("Bu email allaqachon ro'yxatdan o'tgan!");
        return;
      }

      // Foydalanuvchini qo'shish
      const { data: newUser, error: insertError } = await supabase
        .from("Users")
        .insert([{ email, name, password, number }]);

      if (insertError) {
        console.error("Error inserting data:", insertError);
        notifyError("Foydalanuvchini qo'shishda xatolik yuz berdi!");
        return;
      }

      notifySuccess("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      FetchData();
      navigate(ROUTE_PATHS.HOME);

      // Inputlarni tozalash
      setEmail("");
      setName("");
      setPassword("");
      setNumber("");
    } catch (err) {
      console.error("Unexpected error:", err);
      notifyError("Kutilmagan xatolik yuz berdi!");
    }
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
          Create an account
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          Create an account to enjoy all the services without any ads for free!
        </Typography>
        <InputBox>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          Already Have An Account?
          <Link
            sx={{
              cursor: "pointer",
            }}
          >
            Log in
          </Link>
        </InputBox>
        <CreateAcc>
          <Button variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>
        </CreateAcc>
        <ToastContainer />
      </SignInWrapper>
    </Container>
  );
}

export default SignUp;
