const express = require("express");
const { createContactMessage } = require("../services/contactQueries");

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  const { name, email, message } = req.body || {};
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanMessage = typeof message === "string" ? message.trim() : "";

  if (
    cleanName.length < 2 ||
    cleanName.length > 100 ||
    !emailPattern.test(cleanEmail) ||
    cleanMessage.length < 10 ||
    cleanMessage.length > 5000
  ) {
    return res.status(400).json({
      message: "Enter a valid name, email address, and message.",
    });
  }

  const savedMessage = await createContactMessage({
    name: cleanName,
    email: cleanEmail,
    message: cleanMessage,
  });

  return res.status(201).json({
    message: "Message received.",
    id: savedMessage.id,
  });
});

module.exports = router;