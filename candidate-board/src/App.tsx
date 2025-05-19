import "./css/App.css";
import AddCandidates from "./pages/addCandidate";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addCandidates" element={<AddCandidates />} />
      </Routes>
    </>
  );
}

export default App;
