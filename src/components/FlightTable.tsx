import "../styles/FlightTable.css";

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

interface FlightTableProps {
  flights: Flight[];
}

const FlightTable: React.FC<FlightTableProps> = ({ flights }) => {
  return (
    <tbody>
      {flights.map((flight: Flight) => {
        let statusClass: string = "";
        switch (flight.status.toLowerCase()) {
          case "on time":
            statusClass = "status-on-time";
            break;
          case "boarding":
            statusClass = "status-boarding";
            break;
          case "delayed":
            statusClass = "status-delayed";
            break;
          case "departed":
            statusClass = "status-departed";
            break;
        }

        return (
          <tr 
            key={flight.id} 
            className="clickable-row"
            onClick={() => window.location.href = `/flights/${flight.id}`} 
          >
            <td>{flight.flightNumber}</td>
            <td>{flight.airline}</td>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{new Date(flight.departureTime).toLocaleString()}</td>
            <td className={`status-text ${statusClass}`}><b>{flight.status}</b></td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default FlightTable;
