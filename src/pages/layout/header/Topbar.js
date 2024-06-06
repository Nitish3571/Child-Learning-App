import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Drawer } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { NavbarData } from "../../../data/NavbarData";

function Topbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = React.useState(false);
  const [placement] = React.useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" style={{backgroundColor:'chocolate' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center" }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={showDrawer}
                color="inherit"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => navigate("/")}
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                LOGO
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
              {NavbarData.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => navigate(item.pathname)}
                  sx={{ my: 2, color: "white", display: "block"  , fontSize:"16px" , fontFamily:'cursive' , marginX:'10px'}}
                >
                  {item.title}
                </Button>
              ))}
              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {ProfileData.map((item) => (
                    <MenuItem key={item.id} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={() => navigate(item.pathname)}>
                        {item.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
            </Box>
          </Toolbar>
        </Container>
        <Drawer
          title={
            <Link to={"/"}>
              <Typography variant="h6" noWrap component="a" onClick={onClose}>
                LOGO
              </Typography>
            </Link>
          }
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          width={220}
        >
          {NavbarData.map((item) => (
            <MenuItem key={item.id} onClick={onClose}>
              <Typography textAlign="center" style={{fontFamily:'cursive'}} onClick={() => navigate(item.pathname)} >
                {item.title}
              </Typography>
            </MenuItem>
          ))}
        </Drawer>
      </AppBar>
    </>
  );
}

export default Topbar;