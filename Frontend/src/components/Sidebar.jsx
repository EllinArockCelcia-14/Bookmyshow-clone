// src/components/Sidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", action: () => navigate("/") },
    { label: "Notifications" },
    { label: "Your Orders", locked: true },
    { label: "Stream Library", locked: true },
    { label: "Play Credit Card" },
    { label: "Help & Support" },
    { label: "Accounts & Settings", locked: true },
    { label: "Rewards" },
    { label: "BookAChange" },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 2000,
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(true)}
      >
        <span style={{ fontSize: "28px" }}>&#9776;</span>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100%",
            width: "300px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            padding: "20px",
            zIndex: 1500,
            overflowY: "auto",
          }}
        >
          {/* Close Button */}
          <div style={{ textAlign: "right" }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "24px",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>

          <h2>Hey!</h2>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src="/assets/Images/Gift.jpeg" alt="gift " width={40} />
              <button
                onClick={() => {
                  navigate("/signin");
                  setIsOpen(false);
                }}
                style={{
                  backgroundColor: "#e50914",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Login / Register
              </button>
            </div>
            <p style={{ fontSize: "14px", marginTop: "5px", color: "#555" }}>
              Unlock special offers & great benefits
            </p>
          </div>

          {/* Menu Items */}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "12px 0",
                  color: item.locked ? "#aaa" : "#000",
                  cursor: item.locked ? "not-allowed" : "pointer",
                  borderBottom: "1px solid #eee",
                }}
                onClick={() => {
                  if (!item.locked && item.action) {
                    item.action();
                    setIsOpen(false);
                  }
                }}
              >
                {item.label}
                {item.locked && <span style={{ marginLeft: "5px" }}>🔒</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
