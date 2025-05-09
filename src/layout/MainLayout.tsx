import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { SnackbarProvider } from '../context/SnackbarContext';

const MainLayout = ({ children }: { children: ReactNode }) => {
  

  return (
    // <SnackbarProvider>
    <div className="flex flex-col min-h-screen ">
      {/* Conditionally render Navbar */}
      <Navbar />
      
      <main className="flex-grow">{children}</main>
      
      {/* Conditionally render Footer */}
      <Footer />
    </div>
    // {/* </SnackbarProvider> */}
  );
};

export default MainLayout;
