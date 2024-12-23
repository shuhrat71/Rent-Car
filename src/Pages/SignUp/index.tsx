import { Box, Container } from "@mui/system";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { InputBox, SignInWrapper } from "./SignUp";
import { Button, Link, TextField, Typography } from "@mui/material";
import { CreateAcc } from "../LogIn/LogIn";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

function SignUp({}: Props) {
  const [value, setValue] = useState<string>("");
  const [number, setNumber] = useState<number>();
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
      const { data, error } = await supabase.from("Users").select("*");
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
  const navigate = useNavigate();
  useEffect(() => {
    FetchData();
  }, []);
  const handleSubmit = async () => {
    const notifyError = () =>
      toast.error("Ma'lumot yuborishda xatolik yuz berdi!");
    const notifyDuplicate = () =>
      toast.error("Bu email allaqachon ro'yxatdan o'tgan!");

    if (value.trim() === "") {
      notifyError();
      return;
    }

    if (value.trim() === "") {
      setError("Emailni kiriting!");
      return;
    }
    if (value === "") {
      setError("Faqat Telefon raqamga ruxsat berilgan!");
      return;
    }
    try {
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
