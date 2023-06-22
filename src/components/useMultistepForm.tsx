import { ConfirmationForm } from "./ConfirmationForm";
import Delivered from "./Delivered";
import FlightSchedule from "./FlightSchedule";
import GoodsRetrieved from "./GoodsRetrieved";
import PickedUp from "./PickedUp";
import TransportDetails from "./TransportDetails";

export const getCurrentForm = (step: any) => {
  switch (step) {
    case "CONFIRM_STEP":
      return <ConfirmationForm />;
    case "TRANSPORT_STEP":
      return <TransportDetails />;
    case "PICKED_STEP":
      return <PickedUp />;
    case "FLIGHT_STEP":
      return <FlightSchedule />;
    case "RETRIEVED_STEP":
      return <GoodsRetrieved />;
    case "DELIVERED_STEP":
      return <Delivered />;
  }
};
