import { ChatEngine, ChatFeed } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed.jsx";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="4f675bd0-809d-4146-bfdd-d277ba70c3ea"
      userName="Shaelle11"
      userSecret="Ella@2003"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
