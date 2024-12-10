/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));
interface FormModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CouncelorModal({ open, handleClose }: FormModalProps) {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  return (
    <div>
      <Grid container spacing={3}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: 24,
              maxWidth: "60%",
              width: "80rem",
              height: "60rem",
              padding: "1rem",
              overflowY: "auto",
              maxHeight: "70%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "fantasy",
                fontStyle: "oblique",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              Find a Councelor
            </Typography>
            <FormGrid item md={6}>
              <FormLabel htmlFor="first-name" required>
                First name
              </FormLabel>
              <OutlinedInput
                id="first-name"
                name="first-name"
                type="name"
                placeholder="John"
                autoComplete="first name"
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  marginBottom: "1rem",
                }}
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="address1" required>
                Contact Information
              </FormLabel>
              <OutlinedInput
                id="address1"
                name="address1"
                type="address1"
                placeholder="Enter your contact information"
                autoComplete="shipping address-line1"
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  marginBottom: "1rem",
                }}
              />
            </FormGrid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormGrid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div>
                    <div
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        marginBottom: "1rem",
                      }}
                    >
                      <DatePicker
                        label="When would you like to visit?"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </div>
                  </div>
                </LocalizationProvider>
              </FormGrid>

              <FormGrid
                item
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "2rem",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div>
                    <TimeField
                      label="Choose appointment time"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        marginBottom: "1rem",
                      }}
                    />
                  </div>
                </LocalizationProvider>
              </FormGrid>
            </Grid>
            <FormGrid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="saveAddress" value="yes" />}
                label="By submitting this form, you agree to the Mongolia International University privacy notice."
              />
            </FormGrid>
            <Button
              className="bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]"
              style={{ marginTop: "1rem" }}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}
