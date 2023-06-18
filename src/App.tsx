import "./App.scss";

import React from "react";
import { ConfirmationForm } from "./components/ConfirmationForm";
import { TransportDetails } from "./components/TransportDetails";

const App = () => {
  return (
    <div>
      <ConfirmationForm />
      <TransportDetails />
    </div>
  );
};
export default App;
