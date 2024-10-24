import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-10">
      </header>
      <main className="flex-grow">
        <Outlet />
        <Toaster
          toastOptions={{
            style: {
              color: "#4893f4"
            },
          }}
          position="top-center"
        />
      </main>
      <footer className="z-10">
      </footer>
    </div>
  );
};

export default RootLayout;
