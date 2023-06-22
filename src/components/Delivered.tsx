import { FormWrapperText } from "./formWrapperText";
import { Switch, TextField } from "@mui/material";
import { TimePicker, DatePicker, Form } from "antd";
import dayjs from "dayjs";
dayjs().format(); // Output: 2022-08-17T09:31:09+01:00
dayjs().format("MM"); // Output: 08
dayjs().format("DD"); // Output: 17
dayjs().format("YY"); // Output: 22
dayjs().format("MMMM"); // August
import "dayjs/locale/cs";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { Checkbox } from "antd";
import { useContext, useState } from "react";
import { FormStepContext } from "./FormStepContext";
import { STEPS } from "./Constants";

export function Delivered() {
  const { register, handleSubmit, control } = useForm<{
    clientRef: string;
    confirmDate: string;
    confirmTime: string;
    contact: boolean;
    booking: boolean;
    exCustoms: boolean;
    customsView: boolean;
    sendUpdate: boolean;
  }>();

  const { setStep } = useContext(FormStepContext);

  const goBack = () => {
    setStep(STEPS.RETRIEVED);
  };

  const [checked, setChecked] = useState(false);

  return (
    <FormWrapperText tittle="Potvrzení Přepravy">
      <div className="transportForm">
        <Form
          onFinish={handleSubmit((data) => {
            console.log("Data submited", data);
            setStep(STEPS.RETRIEVED);
          })}
          className="formBox shadowBox p-5 rounded my-4 w-100"
        >
          <div className="transportDetailsWrapper">
            <div className="textfield">
              <TextField
                id="clientRef"
                className="input my-3"
                label="Reference klienta"
                variant="standard"
                {...register("clientRef")}
              />
            </div>
          </div>
          <div className="d-flex justify-content-evenly align-items-center my-3">
            <div className="datePickerWrapper">
              <span className="description my-1">Datum potvrzení</span>
              <Controller
                control={control}
                name="confirmDate"
                render={({ field }) => {
                  return (
                    <DatePicker
                      className="datePicker"
                      ref={field.ref}
                      onBlur={field.onBlur}
                      placeholder={field.value}
                      value={field.value ? dayjs(field.value, "HH:mm") : null}
                      onChange={(date) => {
                        field.onChange(
                          date ? date.format("YYYY-MM-DD").toString() : null
                        );
                      }}
                    />
                  );
                }}
              />
            </div>
            <div className="timePickerWrapper">
              <span className="description my-1">Čas potvrzení</span>

              <Controller
                control={control}
                name="confirmTime"
                render={({ field }) => {
                  return (
                    <TimePicker
                      className="timePicker"
                      onSelect={(date) => {
                        field.onChange(
                          date ? dayjs(date).format("HH:mm").toString() : null
                        );
                      }}
                    />
                  );
                }}
              />
            </div>
          </div>
          <div className="checkBoxWrapper my-4">
            <Controller
              control={control}
              name="contact"
              render={({ field }) => {
                return (
                  <Checkbox
                    className="checkBox mx-2"
                    onChange={(date) => {
                      field.onChange(date ? "Odesílatel kontaktován" : null);
                    }}
                  >
                    Odesílatel kontaktován
                  </Checkbox>
                );
              }}
            />
            <Controller
              control={control}
              name="booking"
              render={({ field }) => {
                return (
                  <Checkbox
                    className=" checkBox mx-2"
                    onChange={(date) => {
                      field.onChange(
                        date ? "Prostor u aerolinky zaknihován" : null
                      );
                    }}
                  >
                    Prostor u aerolinky zaknihován
                  </Checkbox>
                );
              }}
            />
            <Controller
              control={control}
              name="exCustoms"
              render={({ field }) => {
                return (
                  <Checkbox
                    className=" checkBox mx-2"
                    onChange={(date) => {
                      field.onChange(date ? "Exportní clení hotovo" : null);
                    }}
                  >
                    Exportní clení
                  </Checkbox>
                );
              }}
            />
            <Controller
              control={control}
              name="customsView"
              render={({ field }) => {
                return (
                  <Checkbox
                    className=" checkBox mx-2"
                    onChange={(date) => {
                      return field.onChange(
                        date ? "Clení zobrazeno" : "Bez clení"
                      );
                    }}
                  >
                    Zobrazení celního procesu
                  </Checkbox>
                );
              }}
            />
          </div>
          <div className="updateSection">
            <span className={checked === true ? "active" : "deactive"}>
              {checked === true ? " Update aktivován" : "Update neaktivní"}
            </span>
            <Controller
              control={control}
              name="sendUpdate"
              render={({ field }) => {
                return (
                  <Switch
                    id="sendUpdate"
                    checked={checked}
                    onChange={(e) => {
                      return field.onChange(
                        e.target.checked
                          ? " Update aktivován"
                          : "Update neaktivní",
                        setChecked(!checked)
                      );
                    }}
                  />
                );
              }}
            />
          </div>
          <button
            className="btn btn-primary m-2"
            type="button"
            onClick={goBack}
          >
            Zpět
          </button>
          <button className="btn btn-primary m-2" type="submit">
            Dokončit
          </button>
        </Form>
        <DevTool control={control} />
      </div>
    </FormWrapperText>
  );
}
export default Delivered;
