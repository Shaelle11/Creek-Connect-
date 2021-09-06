const router = require("express").Router();
const Chat = require("../models/Chat");

//new chat

router.post("/", async (req, res) => {
  const newChat = new Chat({
    members: [req.body.senderId, req.body.receiverId],
  });
});

try {
  const savedChat = await newChat.save();
  res.status(200).json(savedChat);
} catch (err) {
  res.status(500).json(err);
}
//get chat of a user

module.exports = router;
