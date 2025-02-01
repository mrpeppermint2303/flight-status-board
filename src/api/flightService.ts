import axios from "axios";
const API_BASE = "https://flight-status-mock.core.travelopia.cloud/flights";
export const fetchFlights = async () => {
  try {
    const response = await axios.get(API_BASE);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
    console.error(error.response?.data || error.message);
  }
  throw new Error("Failed to fetch flight data");
  }
};
export const fetchFlightDetail = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Flight details not found");
  }
};