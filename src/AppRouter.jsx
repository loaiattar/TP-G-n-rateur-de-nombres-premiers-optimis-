import React from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
});

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
