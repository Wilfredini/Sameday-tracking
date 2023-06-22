import { FormWrapperText } from "./formWrapperText";
import { TextField } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContext } from "react";
import { FormStepContext } from "./FormStepContext";
import { STEPS } from "./Constants";

type Formvalues = {
  transportName: string;

  formCounter: {
    quantity: string;
    weight: string;
    packing: string;
    types: string;
    dims: string;
  }[];
};

export function ConfirmationForm() {
  const form = useForm<Formvalues>({
    defaultValues: {
      transportName: "",
      formCounter: [
        { quantity: "", weight: "", packing: "", types: "", dims: "" },
      ],
    },
  });

  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "formCounter",
    control,
  });

  const { step, setStep } = useContext(FormStepContext);
  console.log(step);

  const onSubmit = (data: Formvalues) => {
    console.log("Form submitted", data);
    setStep(STEPS.TRANSPORT);
  };

  return (
    <FormWrapperText tittle="Detaily Zásilky">
      <form
        className="shadowBox p-5 rounded my-4 confirmForm"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="row ">
          <div>
            <div className="textfield">
              <TextField
                className="input"
                type="text"
                id="transportName"
                label="Název Přepravy"
                variant="standard"
                {...register("transportName", {
                  required: {
                    message: "Zadejte název přepravy",
                    value: true,
                  },
                })}
              />
              <p className="error">{errors.transportName?.message}</p>
            </div>
          </div>
          {fields.map((field, index) => {
            return (
              <div className="packWrapper" key={field.id}>
                <h3 className="packNumber mt-2 mb-3">
                  Balení číslo {index + 1}
                </h3>
                <div className="inputWrapper">
                  <div className="textfield">
                    <TextField
                      className="input"
                      type="text"
                      id="quantity"
                      label="Množství"
                      variant="standard"
                      {...register(`formCounter.${index}.quantity` as const, {
                        required: {
                          value: true,
                          message: "Zadejte množství",
                        },
                      })}
                    />
                    <p className="error">
                      {errors.formCounter?.[index]?.quantity?.message}
                    </p>
                  </div>
                  <div className="textfield">
                    <TextField
                      className="input"
                      type="text"
                      id="weight"
                      label="Váha(kg)"
                      variant="standard"
                      {...register(`formCounter.${index}.weight` as const, {
                        required: {
                          message: "Zadejte váhu",
                          value: true,
                        },
                      })}
                    />
                    <p className="error">
                      {errors.formCounter?.[index]?.weight?.message}
                    </p>
                  </div>
                </div>
                <div className="inputWrapper">
                  <div className="textfield">
                    <TextField
                      className="input"
                      type="text"
                      id="packing"
                      label="Balení"
                      variant="standard"
                      {...register(`formCounter.${index}.packing` as const, {
                        required: {
                          message: "Zadejte typ balení",
                          value: true,
                        },
                      })}
                    />
                    <p className="error">
                      {errors.formCounter?.[index]?.packing?.message}
                    </p>
                  </div>
                  <div className="textfield">
                    <TextField
                      className="input"
                      type="text"
                      id="types"
                      label="Typ Zboží"
                      variant="standard"
                      {...register(`formCounter.${index}.types` as const, {
                        required: {
                          message: "Zadejte typ zboží",
                          value: true,
                        },
                      })}
                    />
                    <p className="error">
                      {errors.formCounter?.[index]?.types?.message}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="textfield">
                    <TextField
                      className="input"
                      type="text"
                      id="dims"
                      label="Rozměry"
                      variant="standard"
                      {...register(`formCounter.${index}.dims` as const, {
                        required: {
                          message: "Zadejte rozměry",
                          value: true,
                        },
                      })}
                    />
                    <p className="error">
                      {errors.formCounter?.[index]?.dims?.message}
                    </p>
                  </div>
                </div>
                <div className="buttonWrapper my-3">
                  {index > 0 && (
                    <button
                      className="btn btn-danger text-white m-2"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Odebrat balení
                    </button>
                  )}
                  {index === fields.length - 1 && (
                    <button
                      className="btn btn-success text-white m-2"
                      type="button"
                      onClick={() =>
                        append({
                          quantity: "",
                          weight: "",
                          packing: "",
                          types: "",
                          dims: "",
                        })
                      }
                    >
                      Přidat
                    </button>
                  )}
                  {index === fields.length - 1 && (
                    <button className="btn btn-primary m-2" type="submit">
                      Pokračovat
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </form>
      <DevTool control={control} />
    </FormWrapperText>
  );
}
