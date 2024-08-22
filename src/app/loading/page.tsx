"use client";
import React from "react";
import { grid } from "ldrs";

grid.register();

export default function LoadingPage() {
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
      {/* Make sure to include the script for l-grid component or use a similar client-side spinner */}
      <l-grid size="60" speed="1.5" color="white"></l-grid>
    </div>
  );
}
