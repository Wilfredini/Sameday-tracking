import { createContext } from "react";
import { STEPS } from "./Constants";

export const FormStepContext = createContext({
  step: STEPS.CONFIRM,
  setStep: () => {},
});
