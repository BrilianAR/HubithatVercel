import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import ucingImage from "../../assets/ucing.png";

const Home = () => {
    return (
        <>
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
        <ContainerScroll
        titleComponent={
            <>
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                PORTAL ARSITEK MODERN <br />
                <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
                Platform arsitektur untuk klien, desainer, kontraktor, dan pemangku kepentingan - dirancang untuk semua orang yang terlibat dalam perencanaan.
                </span>
              </h1>
            </>
          }
        >
        <img
          src={ucingImage}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        </ContainerScroll>
        </>
    );
};

export default Home;
