import React from "react";
import { FormWrapperText } from "./formWrapperText";
import { TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import "dayjs/locale/cs";

export function TransportDetails() {
  return (
    <FormWrapperText tittle="Potvrzení Přepravy">
      <form>
        <div className="transportDetailsWrapper">
          <TextField
            type="text"
            id="clientRef"
            label="Standard"
            variant="standard"
          />
          <div className="pickerWrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "TimePicker"]}>
                <DatePicker label="Controlled picker" />
                <TimePicker label="Controlled picker" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <button>Pokračovat</button>
      </form>
    </FormWrapperText>
  );
}
export default TransportDetails;
