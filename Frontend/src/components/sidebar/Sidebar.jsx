import { FiX } from "react-icons/fi";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ isSidebarOpen, toggleSidebar, isLaptop }) => {
    return (
        <div className={`bg-gray-100 border-r border-gray-300 p-4 flex flex-col h-full ${isSidebarOpen || isLaptop ? 'block' : 'hidden'} ${isLaptop ? 'w-64' : 'fixed top-0 left-0 z-50'}`}>
            {/* Close Sidebar Icon */}
            {!isLaptop && (
                <div className="absolute top-4 right-4 sm:hidden">
                    <button onClick={toggleSidebar} className="text-black">
                        <FiX className="w-8 h-8" />
                    </button>
                </div>
            )}

            {/* Sidebar Content */}
            <SearchInput />
            <div className="mt-4 mb-2 bg-gray-300 h-px"></div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex-1">
                <Conversations />
            </div>
            <LogoutButton />
        </div>
    );
};

export default Sidebar;


