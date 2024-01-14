"use client";
import { useState } from "react";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TbMenu2 } from "react-icons/tb";
import { alpha, Link, styled } from "@mui/material";

const pages = [
  {
    label: "Users",
    href: "/users",
  },
];

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.primary,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.primary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const path = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Logo = (
    <NextLink className="cursor:pointer" href="/">
      <Image alt="logo" src="/assets/blog-logo.png" width={50} height={50} />
    </NextLink>
  );

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ maxWidth: 1500, paddingX: 4, gap: 2 }}>
        <Box sx={{ py: 1 }}>{Logo}</Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <TbMenu2 />
          </IconButton>

          <StyledMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",

              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              color: "black",
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <Link href={page.href} key={page.label}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              </Link>
            ))}
          </StyledMenu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <NextLink href={page.href} key={page.label}>
              <Link
                component="button"
                onClick={handleCloseNavMenu}
                sx={{
                  px: 2,
                  height: 66,
                  bgcolor: page.href === path ? "primary.dark" : "inherit",
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                  ":hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                {page.label}
              </Link>
            </NextLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
