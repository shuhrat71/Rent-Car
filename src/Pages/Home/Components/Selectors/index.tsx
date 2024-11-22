import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Container } from "@mui/system";

export default function BasicSelect() {
  const [gearType, setgearType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setgearType(event.target.value as string);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ minWidth: 120, maxWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Turi</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gearType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Automatic</MenuItem>
            <MenuItem value={20}>Mechanic</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gearType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Automatic</MenuItem>
            <MenuItem value={20}>Mechanic</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gearType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Automatic</MenuItem>
            <MenuItem value={20}>Mechanic</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gearType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Automatic</MenuItem>
            <MenuItem value={20}>Mechanic</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gearType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Automatic</MenuItem>
            <MenuItem value={20}>Mechanic</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gearType}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Automatic</MenuItem>
            <MenuItem value={20}>Mechanic</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
}
