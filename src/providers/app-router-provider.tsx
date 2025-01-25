import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultStaleTime: 5000,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}


const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
