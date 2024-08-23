"use client";

import { Typography, Box, Paper, IconButton, Stack } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import RepeatIcon from "@mui/icons-material/Repeat"; // Import Repeat icon
import { useState } from "react";
import ShareMenu from "./ShareMenu";

interface QuoteCardProps {
  initialQuote: string;
  quotes: string[];
}

export default function RepeateQuoteCard({
  initialQuote,
  quotes,
}: QuoteCardProps) {
  const [currentQuote, setCurrentQuote] = useState<string>(initialQuote);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRepeatClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  };

  return (
    <Paper
      sx={{
        p: 4,
        position: "relative",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" align="center">
          {currentQuote}
        </Typography>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          zIndex: 1,
        }}
      >
        <IconButton onClick={handleRepeatClick} aria-label="repeat quote">
          <RepeatIcon />
        </IconButton>
        <IconButton onClick={handleMenuClick} aria-label="more options">
          <MoreVertOutlinedIcon />
        </IconButton>
      </Stack>
      <ShareMenu anchorEl={anchorEl} open={open} onClose={handleMenuClose} />
    </Paper>
  );
}
