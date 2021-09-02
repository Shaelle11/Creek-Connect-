import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/SignIn/SignIn";
import Chat from "./components/Chat/ChatView.jsx";

const App = () => (
  <Router>
    <Route path="/" exact Component={Join} />
    <Route path="/chat" Component={Chat} />
  </Router>
);

export default App;
