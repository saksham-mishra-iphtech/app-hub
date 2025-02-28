import { Routes, Route } from "react-router-dom"; 
import { Authpage } from "./components/Authpage";
import Dashboard from "./components/Dashboard";
import Demo1 from "./components/Demo1";
import Demo2 from "./components/Demo2";

function App() {
  return (
    <Routes>  
      <Route path="/" element={<Authpage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/1" element={<Demo1 />} />
      <Route path="/dashboard/2" element={<Demo2 />} />
    </Routes>
  );
}

export default App;
