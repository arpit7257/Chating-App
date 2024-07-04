import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const isSelected = selectedConversation?._id === conversation._id;

  const handleConversationClick = () => {
    setSelectedConversation(conversation);
  };

  return (
    <div
      className={`flex items-center gap-2 rounded p-2 cursor-pointer ${isSelected ? "bg-gray-200" : "hover:bg-gray-100"}`}
      onClick={handleConversationClick}
    >
      <div
        className={`w-12 h-12 rounded-full overflow-hidden ${isSelected ? "bg-blue-500" : isOnline ? "bg-green-500" : "bg-gray-300"}`}
      >
        <img
          src={conversation.profilePic}
          alt='user avatar'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex items-center justify-between'>
          <p className={`font-bold ${isSelected ? "text-blue-500" : "text-gray-700"}`}>{conversation.fullName}</p>
          <span className='text-xl'>{emoji}</span>
        </div>
      </div>

      {!lastIdx && <div className='my-1 bg-gray-300 h-px'></div>}
    </div>
  );
};

export default Conversation;
