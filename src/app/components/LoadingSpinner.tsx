"use client";
import React from "react";
import { grid } from "ldrs";

grid.register();

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <l-grid size="60" speed="1.5" color="white"></l-grid>
    </div>
  );
};

export default LoadingSpinner;
