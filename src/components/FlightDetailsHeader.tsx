import React from "react";

interface FlightDetailsHeaderProps {
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
}

const FlightDetailsHeader: React.FC<FlightDetailsHeaderProps> = ({
  flightNumber,
  airline,
  origin,
  destination,
  departureTime,
}) => (
  <div>
    <h1>Flight Details</h1>
    <p><strong>Flight Number:</strong><b> {flightNumber}</b></p>
    <p><strong>Airline:</strong> {airline}</p>
    <p><strong>Origin:</strong> {origin}</p>
    <p><strong>Destination:</strong> {destination}</p>
    <p><strong>Departure Time:</strong> {departureTime ? new Date(departureTime).toLocaleString() : "No departure time available"}</p>
  </div>
);

export default FlightDetailsHeader;
