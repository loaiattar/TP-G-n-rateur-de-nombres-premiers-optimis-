import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 w-full">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  ),
});