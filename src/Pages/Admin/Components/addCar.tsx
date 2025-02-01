import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { createClient } from "@supabase/supabase-js";
import { Form__wrapper } from ".";
const AddCard: React.FC = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [tachometer, setTachometer] = useState("");
  const [textcar, setTextcar] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleAddCard = async () => {
    if (!name || !textcar || !img || !gearbox || !tachometer || !number) {
      toast.error("Barcha maydonlarni to‘ldiring!");
      return;
    } else if (
      !img.startsWith("https://") ||
      !img.endsWith(".jpg") ||
      !img.endsWith(".png")
    ) {
      const notifyError = () => {
        toast.success("Muvofiqiyatli bajarildi!");
      };

      setLoading(true);

      const { data, error } = await supabase
        .from("car data")
        .insert([{ name, textcar, img, gearbox }]);
      // console.log(data);

      setLoading(false);

      if (error) {
        console.error("Karta qo‘shishda xato:", error.message);
        toast.error("Xatolik yuz berdi!");
      } else {
        toast.success("Karta muvaffaqiyatli qo‘shildi!");
        setName("");
        setTextcar("");
        notifyError();
        setImg("");
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ToastContainer />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddCard();
          }}
        >
          <Form__wrapper>
            <TextField
              label="Mashina nomi"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Yoqilg'i turi"
              variant="outlined"
              value={textcar}
              onChange={(e) => setTextcar(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Bosib o'tiladigan masofa"
              variant="outlined"
              value={tachometer}
              onChange={(e) => setTachometer(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Mashinaning uzatma turi"
              variant="outlined"
              value={gearbox}
              onChange={(e) => setGearbox(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Mashina rasmi"
              variant="outlined"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="O'rindiqlar soni"
              variant="outlined"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ height: 50 }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Qo‘shish"
              )}
            </Button>
          </Form__wrapper>
        </form>
      </Paper>
    </Box>
  );
};

export default AddCard;
