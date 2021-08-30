import react from "react";
import ChatForm from "./Chatform";
import MyChats from "./OtherChats";
import OtherChats from "./OtherChats";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  console.log(chat, userName, messages);

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return (keys.map = (key, index) => {
      const message = messages[key];
      const lastChatKey = index === 0 ? null : keys[index - 1];
      const isMyChat = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyChat ? <isMyChat /> : <OtherChats />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyChat ? "18px" : "0px",
              marginLeft: isMyChat,
            }}
          ></div>
        </div>
      );
    });
  };
  return;
  <div>ChatFeed</div>;
};

export default ChatFeed;
