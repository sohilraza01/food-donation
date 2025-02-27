import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Dashboard.css';

const Dashboard = ({ pendingCount, completedCount }) => {
  const [donorCount, setDonorCount] = useState(0);
  const [ngoCount, setNgoCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch("http://localhost:8800/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();
        setDonorCount(data.donorCount);
        setNgoCount(data.ngoCount);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="sidebar-link">
      <Sidebar />
      <div className="sidebar-main">
        <div className="sidebar-admin">
          <p className="count">Donor <span>{donorCount}</span></p>
        </div>
        <div className="sidebar-agent">
          <p className="count">NGO <span>{ngoCount}</span></p>
        </div>
        <div className="sidebar-not-complete">
          <p className="count">Donation not completed yet <span>{pendingCount}</span></p>
        </div>
        <div className="sidebar-completed">
          <p className="count">Completed <span>{completedCount}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
