"use client";

import { Container, Box } from "@mui/material";
import dynamic from "next/dynamic";
import QuoteCard from "../components/QuoteCard";
import Navbar from "../components/Navbar";
import { useQuote } from "../hooks/useQuote";

const LoadingSpinner = dynamic(() => import("../components/LoadingSpinner"), {
  ssr: false,
});

export default function Home() {
  const { quote, loading, error } = useQuote(
    "https://quote-of-the-day-api.vercel.app/api/inspirational"
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Set height to 100vh to ensure it covers the full viewport
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%", // Ensures the container takes up the full height
          }}
        >
          {error ? <div>{error}</div> : <QuoteCard quote={quote} />}
        </Container>
      </Box>
    </Box>
  );
}
