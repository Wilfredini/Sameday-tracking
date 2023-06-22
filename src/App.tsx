import { Navi } from "./components/Navbar";
import { ConfirmationForm } from "./components/ConfirmationForm";
import { TransportDetails } from "./components/TransportDetails";
import Tracker from "./components/Tracker";
import "./App.scss";
import MultistepForm from "./components/MultistepForm";

const App = () => {
  return (
    <div>
      <Navi />
      <Tracker />
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <MultistepForm />
      </div>
    </div>
  );
};
export default App;
