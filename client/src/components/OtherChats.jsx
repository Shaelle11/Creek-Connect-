const OtherChats = ({ lastChat, chat }) => {
  const isFirstChatByUSER =
    !lastChat || lastChat.sender.username !== chat.sender.username;

  return (
    <div className="chat-row">
      {isFirstChatByUSER && (
        <div
          className="chat-avatar"
          style={{ backgroundImage: `url(${chat?.sender?.avatar})` }}
        />
      )}
      {chat?.attachments?.length > 0 ? (
        <img
          src={chat.attachments[0].file}
          alt="chat-attachment"
          className="chat-image"
          style={{ marginLeft: isFirstChatByUSER ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "right",
            backgroundColor: "",
            marginLeft: isFirstChatByUSER ? "4px" : "48px",
          }}
        >
          {chat.text}
        </div>
      )}
    </div>
  );
};

export default OtherChats;
