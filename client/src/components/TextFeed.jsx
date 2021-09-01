import react from "react";
import NavBar from "./NavBar";
import ChatForm from "./ChatForm";
import MyChats from "./OtherChats";
import OtherChats from "./OtherChats";

const TextFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (chat, isMyChat) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === chat.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyChat ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  console.log(chat, userName, messages);

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return (keys.map = (key, index) => {
      const chat = messages[key];
      const lastChatKey = index === 0 ? null : keys[index - 1];
      const isMyChat = userName === chat.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="chat-block">
            {isMyChat ? (
              <MyChats chat={chat} />
            ) : (
              <OtherChats chat={chat} lastChat={chat[lastChatKey]} />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyChat ? "18px" : "0px",
              marginLeft: isMyChat ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(chat, isMyChat)}
          </div>
        </div>
      );
    });
  };

  renderMessages();
  if (!chat) return "Loading...";
  return (
    <div className="Chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        /<ChatForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default TextFeed;
