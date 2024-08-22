// pages/loading/page.tsx
"use client"; // Ensure this file runs only on the client

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the LoadingSpinner component with { ssr: false }
const LoadingSpinner = dynamic(() => import("../components/LoadingSpinner"), {
  ssr: false,
});

const LoadingPage = () => {
  return <LoadingSpinner />;
};

export default LoadingPage;
