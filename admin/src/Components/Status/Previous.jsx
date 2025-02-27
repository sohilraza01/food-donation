import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Status.css";

const Previous = ({ completedDonations }) => {
  return (
    <div className="status">
      <Sidebar />
      <div className="completed">
        <h2>Completed Donations</h2>
        {completedDonations.length > 0 ? (
          <table className="completed-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Donor Name</th>
                <th>Food Type</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {completedDonations.map((donation, index) => (
                <tr key={donation._id}>
                  <td>{index + 1}</td>
                  <td>{donation.donorName}</td>
                  <td>{donation.foodType}</td>
                  <td>{donation.quantity}</td>
                  <td>{donation.status}</td>
                  <td>{donation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No completed donations available.</p>
        )}
      </div>
    </div>
  );
};

export default Previous;
