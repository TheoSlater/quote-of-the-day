// Home.tsx

"use client";

import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { quotes } from "./hooks/quotes"; // Adjust the path based on your directory structure
import QuoteCard from "./components/QuoteCard"; // Import the QuoteCard component

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const today = new Date();

    // Get the day of the year (ensuring correct arithmetic)
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Ensure the index is within the range of available quotes
    const quoteIndex = dayOfYear % quotes.length;

    setQuote(quotes[quoteIndex]);
  }, []); // No need to add quotes as a dependency since it's static

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <QuoteCard quote={quote} />
      </Box>
    </Container>
  );
}
