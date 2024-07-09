import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLaptop, setIsLaptop] = useState(window.matchMedia("(min-width: 800px)").matches);

    useEffect(() => {
        const handleResize = () => {
            setIsLaptop(window.matchMedia("(min-width: 800px)").matches);
            setIsSidebarOpen(window.matchMedia("(min-width: 800px)").matches);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}
            <div className={`fixed z-50 h-full bg-gray-100 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isLaptop ? 'static w-64 translate-x-0' : 'w-64'}`}>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isLaptop={isLaptop} />
            </div>

            {/* Main Content */}
            <div className={`flex-1 bg-white overflow-hidden relative ${isLaptop ? 'ml-64' : ''}`}>
                {/* Mobile Menu Icon */}
                {!isLaptop && (
                    <div className="sm:hidden absolute top-4 left-4">
                        <button onClick={toggleSidebar} className="text-black">
                            <FiMenu className="w-8 h-8" />
                        </button>
                    </div>
                )}

                {/* Message Container */}
                <MessageContainer isSidebarOpen={isSidebarOpen} isLaptop={isLaptop} />
            </div>
        </div>
    );
};

export default Home;
