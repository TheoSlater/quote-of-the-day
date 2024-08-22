// Home.tsx

"use client";

import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { inspirationalQuotes } from "../hooks/inspirationalQuotes";
import QuoteCard from "../components/QuoteCard";

export default function InspirationalQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const today = new Date();

    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const quoteIndex = dayOfYear % inspirationalQuotes.length;

    setQuote(inspirationalQuotes[quoteIndex]);
  }, []);

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
