import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Status.css";

const Pending = ({ fetchDonations }) => {
  const [pendingDonations, setPendingDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPendingDonations = async () => {
      try {
        const response = await fetch("http://localhost:8800/donations");
        if (!response.ok) {
          throw new Error("Failed to fetch pending donations");
        }

        const data = await response.json();
        const pending = data.filter((donation) => donation.status === "Pending");
        setPendingDonations(pending);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingDonations();
  }, [fetchDonations]); // Re-fetch when parent triggers fetchDonations

  const handleCompleteDonation = async (donationId) => {
    try {
      const response = await fetch(`http://localhost:8800/donations/${donationId}/complete`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to complete the donation");
      }

      // Trigger re-fetch of donations
      fetchDonations();
    } catch (error) {
      console.error("Error completing donation:", error);
    }
  };

  return (
    <div className="status">
      <Sidebar />
      <div className="pending">
        <h2>Pending Donations</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : pendingDonations.length > 0 ? (
          <table className="pending-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Donor Name</th>
                <th>Food Type</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingDonations.map((donation, index) => (
                <tr key={donation._id}>
                  <td>{index + 1}</td>
                  <td>{donation.donorName}</td>
                  <td>{donation.foodType}</td>
                  <td>{donation.quantity}</td>
                  <td>{donation.status}</td>
                  <td>{donation.date}</td>
                  <td>
                    <button onClick={() => handleCompleteDonation(donation._id)} className="complete-btn">Complete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No pending donations available.</p>
        )}
      </div>
    </div>
  );
};

export default Pending;
