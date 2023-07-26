import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import MapComponent from "./MapComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
