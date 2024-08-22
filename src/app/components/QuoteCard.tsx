"use client";

import { Typography, Box, Paper, IconButton } from "@mui/material";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useState } from "react";
import ShareMenu from "./ShareMenu";

interface QuoteCardProps {
  quote: string;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
          {quote}
        </Typography>
      </Box>
      <IconButton
        onClick={handleMenuClick}
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          zIndex: 1,
        }}
        aria-label="more options"
      >
        <ReplyOutlinedIcon />
      </IconButton>
      <ShareMenu anchorEl={anchorEl} open={open} onClose={handleMenuClose} />
    </Paper>
  );
}
