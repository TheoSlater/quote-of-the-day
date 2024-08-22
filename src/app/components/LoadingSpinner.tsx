// components/LoadingSpinner.tsx
"use client"; // Ensure this file runs only on the client

import React, { useEffect } from "react";
import { grid } from "ldrs";

// Register the grid component only in the client side
if (typeof window !== "undefined") {
  grid.register();
}

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <l-grid size="60" speed="1.5" color="white"></l-grid>
    </div>
  );
};

export default LoadingSpinner;
