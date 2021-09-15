import React, { useState, useEffect } from "react";
import firebase from "firebase";
import LeftSide from "../../animations/Chat-Interface/LeftSide";

const Chat = ({ user = null, db = null }) => {
  const [message, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(500)
        .onSnapShot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setMessages(data);
        });

      return unsubscribe;
    }
  }, [db]);
  db.collection("messages").add({
    text: newMessage,
    createdAt: firebase.firestore.dieldValue.serviceTimestamp(),
    uid,
    displayName,
    photoURL,
  });

  const handleOnChange = (e) => {
    e.preventdefault();

    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
    }
  };
  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={messages.id}>
            <LeftSide {...message} />
          </li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={newMessage}
          placeholder="Type message here..."
        />
        <button type="submit" disabled={!newMessage}>
          Send
        </button>
      </form>
    </>
  );
};

export default Chat;
