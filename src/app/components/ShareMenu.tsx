import { Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCallback } from "react";

interface ShareMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

const StyledMenu = styled(Menu)(({ theme }) => ({
  width: "200px",
}));

export default function ShareMenu({ anchorEl, open, onClose }: ShareMenuProps) {
  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: (document.querySelector("h4") as HTMLElement)?.innerText || "",
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("Page link copied to clipboard!");
        })
        .catch((error) => console.error("Failed to copy:", error));
    }
    onClose();
  }, [onClose]);

  return (
    <StyledMenu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MenuItem onClick={handleShare}>Share</MenuItem>
    </StyledMenu>
  );
}
