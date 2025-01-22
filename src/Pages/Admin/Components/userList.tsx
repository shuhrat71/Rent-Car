import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createClient } from "@supabase/supabase-js";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Box } from "@mui/material";
import Header from "../../Header";
import { red } from "@mui/material/colors";

const supabaseUrl = "https://wdybqcunwsmveabxiekf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWJxY3Vud3NtdmVhYnhpZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODkyNzYsImV4cCI6MjA0ODk2NTI3Nn0.Fyo48A9AP7-VcERAFEvq2TdZF2Ug2Kr1FwDAgpnp90o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function UserList() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("Users").select("*");

        if (error) {
          console.error("Error fetching data:", error.message);
        } else {
          setRows(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="xl">
      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <DataGrid
          sx={{ 
            maxWidth: "1300px",
            width: "100%",
            height: "80vh",
          }}
          rows={rows}
          columns={
            rows.length > 0
              ? Object.keys(rows[0])
                  .filter(
                    (key) =>
                      key !== "chevrolet_Logo" &&
                      key !== "img" &&
                      key !== "id" &&
                      key !== "number"
                  )
                  .map((key) => ({
                    field: key,
                    headerName: key,
                  }))
              : []
          }
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 99,
              },
            },
          }}
          checkboxSelection
        />
      )}
    </Container>
  );
}
