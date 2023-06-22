import { useState } from "react";

import { FormStepContext } from "./FormStepContext";
import { getCurrentForm } from "./useMultistepForm";
import { STEPS } from "./Constants";

function MultistepForm() {
  const [step, setStep] = useState(STEPS.CONFIRM);

  return (
    <div>
      <FormStepContext.Provider value={{ step, setStep }}>
        <h1>{step}</h1>
        {getCurrentForm(step)}
      </FormStepContext.Provider>
    </div>
  );
}

export default MultistepForm;
