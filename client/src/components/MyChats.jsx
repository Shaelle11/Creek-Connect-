const MyChats = ({ chat }) => {
  if (chat?.attachments?.length > 0) {
    return (
      <img
        src={char.attachments[0].file}
        alt="chat-attachment"
        className="chat-image"
        style={{ float: "right" }}
      />
    );
  }
  return;
  <div
    className="chat-style"
    style={{
      float: "right",
      marginRight: "18px",
      color: "white",
      backgroundColor: "",
    }}
  >
    {chat.text}
  </div>;
};

export default MyChats;
