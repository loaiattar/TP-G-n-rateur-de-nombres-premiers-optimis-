import { Route as rootRoute } from "./routes/__root"
import { Route as PrimesRoute } from "./routes/primes"
import { Route as IndexRoute } from "./routes"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/primes": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(PrimesRoute.options, {
  path: "/primes",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([IndexRoute, PrimesRoute])
