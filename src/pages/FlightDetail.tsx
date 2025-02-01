import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchFlightDetail } from "../api/flightService";
import { Flight } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import FlightDetailContent from "../components/FlightDetailContent";
import toast from "react-hot-toast";
import "../styles/FlightDetail.css";

const FlightDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const initialLoadDone = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFlight = async () => {
      try {
        setLoading(true);
        if (!id) throw new Error("Invalid flight ID");
        const data = await fetchFlightDetail(id);
        setFlight(data);
        setError(null);

        if (!initialLoadDone.current) {
          toast.success("Flight details loaded!");
          initialLoadDone.current = true;
        }
      } catch (err) {
        if (!initialLoadDone.current) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
          toast.error("Flight details not found!");
          initialLoadDone.current = true;
        }
      } finally {
        setLoading(false);
      }
    };

    loadFlight();
  }, [id]);

  if (loading) return <p className="text-center">Loading flight details...</p>;
  if (error) return (
    <div>
      <ErrorMessage message={error} />
      <div className="text-center">
        <button 
          onClick={() => navigate("/")} 
          className="btn btn-primary"
        >
          Go Back to Flight List
        </button>
      </div>
    </div>
  );

  return (
    <div className="container flight-detail">
      {flight && <FlightDetailContent flight={flight} />}
    </div>
  );
};

export default FlightDetail;
