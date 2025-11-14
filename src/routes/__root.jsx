import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <h1>Root Layout</h1>
      <hr />
      <Outlet />
    </div>
  ),
});

import { Outlet } from "@tanstack/react-router";
