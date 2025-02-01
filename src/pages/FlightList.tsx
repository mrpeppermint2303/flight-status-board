import { useEffect, useState, useRef } from "react";
import { fetchFlights } from "../api/flightService";
import FlightTable from "../components/FlightTable";
import ErrorMessage from "../components/ErrorMessage";
import toast from "react-hot-toast";
import "../styles/FlightList.css";
import { Flight } from "../types";

const FlightList = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const initialLoadDone = useRef(false); 

  const loadFlights = async () => {
    try {
      setLoading(true);
      const data = await fetchFlights();
      setFlights(data);
      setError(null);
      toast.success("Flight data updated!");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      toast.error("Error fetching flight data!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialLoadDone.current) {
      loadFlights(); 
      initialLoadDone.current = true; 
    }

    const interval = setInterval(loadFlights, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container flight-list">
      <h1 className="text-center">Flight Status Board</h1>
      {loading && <p className="text-center">Loading flights...</p>}
      {error && <ErrorMessage message={error} />}
      <div className="table-wrapper">
        {!loading && !error && (
          <table className="flight-table">
            {/* Table Header Moved Here */}
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>Airline</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Departure Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <FlightTable flights={flights} />
          </table>
        )}
      </div>
    </div>
  );
};

export default FlightList;
