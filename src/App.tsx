import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightList from "./pages/FlightList";
import FlightDetail from "./pages/FlightDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightList />} />
        <Route path="/flights/:id" element={<FlightDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
