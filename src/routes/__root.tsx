import { useTheme } from "@mui/joy";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Nav } from "../components/nav";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  ),
  notFoundComponent: () => {
    const theme = useTheme();
    return (
      <div>
        <p>Page not found</p>
        <Link to={"/"} style={{ color: theme.palette.primary.plainColor }}>
          Go Back to home
        </Link>
      </div>
    );
  },
});
