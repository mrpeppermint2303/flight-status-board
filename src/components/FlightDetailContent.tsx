import React from "react";
import { Link } from "react-router-dom";
import FlightDetailsHeader from "./FlightDetailsHeader";
import FlightStatus from "./FlightStatus";

interface FlightDetailContentProps {
  flight: any;
}

const FlightDetailContent: React.FC<FlightDetailContentProps> = ({ flight }) => (
  <div className="flight-detail-content">
    <FlightDetailsHeader
      flightNumber={flight.flightNumber}
      airline={flight.airline}
      origin={flight.origin}
      destination={flight.destination}
      departureTime={flight.departureTime}
    />
    <FlightStatus status={flight.status} />
    <Link to="/" className="btn btn-primary">Back to Flights</Link>
  </div>
);

export default FlightDetailContent;
