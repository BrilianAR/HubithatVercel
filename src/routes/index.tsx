import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Product from "../pages/user/Product";
import About from "../pages/user/About";
import DetailProduct from "../pages/user/DetailProduct";
import Booking from "../pages/user/Booking";
import Partnership from "../pages/user/Partnership";
import Contact from "../pages/user/Contact";

const Home = lazy(() => import("../pages/user/Home"));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/"
                    index
                    element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                    }
                />
                <Route path="/product"
                    index
                    element={
                    <MainLayout>
                        <Product />
                    </MainLayout>
                    }
                />
                <Route path="/about-us"
                    index
                    element={
                    <MainLayout>
                        <About />
                    </MainLayout>
                    }
                />
                <Route path="/details-product"
                    index
                    element={
                    <MainLayout>
                        <DetailProduct />
                    </MainLayout>
                    }
                />
                <Route path="/booking"
                    index
                    element={
                    <MainLayout>
                        <Booking />
                    </MainLayout>
                    }
                />
                <Route path="/partnership"
                    index
                    element={
                    <MainLayout>
                        <Partnership />
                    </MainLayout>
                    }
                />
                <Route path="/contact"
                    index
                    element={
                    <MainLayout>
                        <Contact />
                    </MainLayout>
                    }
                />
            </Routes>
            
        </BrowserRouter>
    )

}

export default AppRoutes;
