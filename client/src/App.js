import React from "react";

import SignIn from "./components/SignIn/SignIn";
import ChatView from "./components/Chat/ChatView";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact Component={SignIn} />
      <Route path="/chat" Component={ChatView} />
    </Router>
  );
}

export default App;
