import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg text-gray-600 mb-6">Explore our features and solutions to enhance your experience.</p>
            <div className="space-x-4">
                <Link to="/features">
                    <Button>Explore Features</Button>
                </Link>
                <Link to="/pricing">
                    <Button variant="outline">View Pricing</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
