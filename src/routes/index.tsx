import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("../pages/user/Home"));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/" />
                <Route
                    index
                    element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                    }
                />
            </Routes>
            
        </BrowserRouter>
    )

}

export default AppRoutes;
