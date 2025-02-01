import React from "react";

interface FlightStatusProps {
  status: string;
}

const FlightStatus: React.FC<FlightStatusProps> = ({ status }) => {
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "on time": return "status-on-time";
      case "boarding": return "status-boarding";
      case "delayed": return "status-delayed";
      case "departed": return "status-departed";
      default: return "";
    }
  };

  return (
    <p><strong>Status:</strong> <b><span className={getStatusClass(status)}>{status}</span></b></p>
  );
};

export default FlightStatus;
