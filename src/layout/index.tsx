import { AppBar, Box, CssBaseline, Link, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Link as RouteLink } from "react-router-dom";

const navItems = ["Google Maps", "mapbox"];

function Layout() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link
                  component={RouteLink}
                  to={item.toLocaleLowerCase().replace(" ", "-")}
                  key={item}
                  sx={{ color: "#fff", pr: 5 }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
