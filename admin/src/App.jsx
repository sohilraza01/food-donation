import { useState, useEffect } from "react";
import "./index.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Mission from "./Components/Mission/Mission";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Pending from "./Components/Status/Pending";
import Previous from "./Components/Status/Previous";

function App() {
  const [donations, setDonations] = useState([]); // State for all donations
  
  // Fetch all donations from the backend
  const fetchDonations = async () => {
    try {
      const response = await fetch("http://localhost:8800/donations");
      if (!response.ok) {
        throw new Error("Failed to fetch donations");
      }
      const data = await response.json();
      setDonations(data); // Update donations state
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  useEffect(() => {
    fetchDonations(); // Fetch donations when the component mounts
  }, []);

  // Filter pending and completed donations
  const pendingDonations = donations.filter((d) => d.status === "Pending");
  const completedDonations = donations.filter((d) => d.status === "Completed");

  return (
    <Router>
      <Navbar /> {/* Navbar at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard pendingCount={pendingDonations.length} completedCount={completedDonations.length} />} 
        />
        <Route 
          path="/pending" 
          element={
            <Pending 
              pendingDonations={pendingDonations} 
              fetchDonations={fetchDonations} 
            />
          } 
        />
        <Route 
          path="/previous" 
          element={<Previous completedDonations={completedDonations} />} 
        />
      </Routes>
      <Footer /> {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
