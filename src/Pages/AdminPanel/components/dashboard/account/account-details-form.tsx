"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

const states = [
  { value: "alabama", label: "Alabama" },
  { value: "new-york", label: "New York" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "los-angeles", label: "Los Angeles" },
] as const;

export function AccountDetailsForm(): React.JSX.Element {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Box display="flex" flexWrap="wrap" gap={3}>
            <Box flex={1} minWidth="300px">
              <FormControl fullWidth required>
                <InputLabel>First name</InputLabel>
                <OutlinedInput
                  defaultValue="Sofia"
                  label="First name"
                  name="firstName"
                />
              </FormControl>
            </Box>
            <Box flex={1} minWidth="300px">
              <FormControl fullWidth required>
                <InputLabel>Last name</InputLabel>
                <OutlinedInput
                  defaultValue="Rivers"
                  label="Last name"
                  name="lastName"
                />
              </FormControl>
            </Box>
            <Box flex={1} minWidth="300px">
              <FormControl fullWidth required>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput
                  defaultValue="sofia@devias.io"
                  label="Email address"
                  name="email"
                />
              </FormControl>
            </Box>
            <Box flex={1} minWidth="300px">
              <FormControl fullWidth>
                <InputLabel>Phone number</InputLabel>
                <OutlinedInput label="Phone number" name="phone" type="tel" />
              </FormControl>
            </Box>
            <Box flex={1} minWidth="300px">
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  defaultValue="New York"
                  label="State"
                  name="state"
                  variant="outlined"
                >
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box flex={1} minWidth="300px">
              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <OutlinedInput label="City" />
              </FormControl>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
