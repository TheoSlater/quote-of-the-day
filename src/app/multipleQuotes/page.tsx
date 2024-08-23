"use client";

import { Container, Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import QuoteCard from "../components/QuoteCard";
import Navbar from "../components/Navbar";
import { useQuote } from "../hooks/useQuote";

const LoadingSpinner = dynamic(() => import("../components/LoadingSpinner"), {
  ssr: false,
});

export default function MultipleQuotes() {
  const {
    quote: quote1,
    loading: loading1,
    error: error1,
  } = useQuote("https://quote-of-the-day-api.vercel.app/api/inspirational");
  const {
    quote: quote2,
    loading: loading2,
    error: error2,
  } = useQuote("https://quote-of-the-day-api.vercel.app/api/standard");

  if (loading1 || loading2) {
    return <LoadingSpinner />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
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
            height: "100%",
          }}
        >
          <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
            {error1 ? <div>{error1}</div> : <QuoteCard quote={quote1} />}
            {error2 ? <div>{error2}</div> : <QuoteCard quote={quote2} />}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
