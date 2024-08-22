"use client";

import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { inspirationalQuotes } from "../hooks/inspirationalQuotes";
import QuoteCard from "../components/QuoteCard";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const LoadingSpinner = dynamic(() => import("../components/LoadingSpinner"), {
  ssr: false,
});

export default function Home() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date();

    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const quoteIndex = dayOfYear % inspirationalQuotes.length;

    setQuote(inspirationalQuotes[quoteIndex]);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [quote]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
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
    </Box>
  );
}
