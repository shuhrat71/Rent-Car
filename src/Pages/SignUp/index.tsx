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
        localStorage.setItem("Users", JSON.stringify(data));
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
    if (email.trim() === "") {
      notifyError();
      return;
    }
    if (email === "") {
      setError("Faqat Telefon raqamga ruxsat berilgan!");
      return;
    }
    if (!email.endsWith("gmail.com")) {
      setError("Faqat Gmail manzillariga ruxsat berilgan!");
    }
    try {
      const { data: existingUser, error: checkError } = await supabase
        .from("Users")
        .insert([
          { email: email, name: name, password: password, number: number },
        ]);

      if (checkError) {
        console.error("Error checking existing email:", checkError);
        notifyError();
        return;
      }

      if (existingUser) {
        console.log("Bu email allaqachon ro'yxatdan o'tgan!");
        notifyDuplicate();
        return;
      } else {
        navigate(ROUTE_PATHS.HOME);
        FetchData();
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
            error={!!error}
            helperText={error}
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
