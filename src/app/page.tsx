"use client";

import { Container, Box } from "@mui/material";
import dynamic from "next/dynamic";
import QuoteCard from "./components/QuoteCard";
import Navbar from "./components/Navbar";
import { useQuote } from "./hooks/useQuote";

const LoadingSpinner = dynamic(() => import("./components/LoadingSpinner"), {
  ssr: false,
});

export default function Home() {
  const { quote, loading, error } = useQuote(
    "https://quote-of-the-day-api.vercel.app/api/standard"
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // Full height of the viewport
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: 1, // Fills the remaining height after the Navbar
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "0 16px", // Prevents horizontal overflow
          boxSizing: "border-box",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100vh - 64px)", // Adjust height to account for the Navbar
          }}
        >
          {error ? <div>{error}</div> : <QuoteCard quote={quote} />}
        </Container>
      </Box>
    </Box>
  );
}
