


// import { useEffect } from "react";
// import useConversation from "../../zustand/useConversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import { TiMessages } from "react-icons/ti";
// import { useAuthContext } from "../../context/AuthContext";

// const MessageContainer = ({ isSidebarOpen, isLaptop }) => {
//     const { selectedConversation, setSelectedConversation } = useConversation();

//     useEffect(() => {
//         return () => setSelectedConversation(null);
//     }, [setSelectedConversation]);

//     return (
//         <div className={`flex flex-col bg-blue-100 overflow-hidden h-full ${isSidebarOpen && !isLaptop ? 'ml-64 sm:ml-0' : ''}`}>
//             {!selectedConversation ? (
//                 <NoChatSelected />
//             ) : (
//                 <>
//                     <div className="bg-slate-500 px-4 py-2 mb-2">
//                         <span className="text-gray-200">To:</span>{" "}
//                         <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
//                     </div>
//                     <Messages />
//                     <MessageInput />
//                 </>
//             )}
//         </div>
//     );
// };

// export default MessageContainer;

// const NoChatSelected = () => {
//     const { authUser } = useAuthContext();
//     return (
//         <div className="flex flex-col items-center justify-center h-full">
//             <div className="text-gray-700 text-center px-4 flex flex-col items-center">
//                 <p className="text-lg md:text-xl font-semibold">Welcome, {authUser.fullName}!</p>
//                 <p className="text-base md:text-lg mt-2">Select a chat to start messaging.</p>
//                 <TiMessages className="text-5xl md:text-7xl text-gray-500 mt-4" />
//             </div>
//         </div>
//     );
// };


import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = ({ isSidebarOpen, isLaptop }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className={`flex flex-col bg-blue-100 overflow-hidden h-full`}>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="text-gray-200">To:</span>{" "}
                        <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-gray-700 text-center px-4 flex flex-col items-center">
                <p className="text-lg md:text-xl font-semibold">Welcome, {authUser.fullName}!</p>
                <p className="text-base md:text-lg mt-2">Select a chat to start messaging.</p>
                <TiMessages className="text-5xl md:text-7xl text-gray-500 mt-4" />
            </div>
        </div>
    );
};
