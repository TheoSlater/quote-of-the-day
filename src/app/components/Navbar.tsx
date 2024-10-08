// components/Navbar.tsx
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import InspirationalIcon from "@mui/icons-material/Star";
import GridOnIcon from "@mui/icons-material/GridOn";
import ChairIcon from "@mui/icons-material/Chair"; // TODO: Find a better icon

const drawerWidth = 240;

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon
              sx={{
                transition: "transform 0.3s",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.dark,
          },
        }}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem disablePadding sx={{ width: "100%" }}>
            <Link
              href="/"
              passHref
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton component="a" sx={{ width: "100%" }}>
                <QuoteIcon sx={{ mr: 2 }} />
                <ListItemText primary="Quote of the Day" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ width: "100%" }}>
            <Link
              href="/inspirationalQuote"
              passHref
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton component="a" sx={{ width: "100%" }}>
                <InspirationalIcon sx={{ mr: 2 }} />
                <ListItemText primary="Inspirational Quotes" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ width: "100%" }}>
            <Link
              href="/comfortingQuotes"
              passHref
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton component="a" sx={{ width: "100%" }}>
                <ChairIcon sx={{ mr: 2 }} />
                <ListItemText primary="Comforting Quotes" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{ width: "100%" }}>
            <Link
              href="/multipleQuotes"
              passHref
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton component="a" sx={{ width: "100%" }}>
                <GridOnIcon sx={{ mr: 2 }} />
                <ListItemText primary="Multiple Quotes" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Main>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
