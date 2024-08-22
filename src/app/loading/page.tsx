"use client";

import React from "react";
import dynamic from "next/dynamic";

const LoadingSpinner = dynamic(() => import("../components/LoadingSpinner"), {
  ssr: false,
});

const LoadingPage = () => {
  return <LoadingSpinner />;
};

export default LoadingPage;
