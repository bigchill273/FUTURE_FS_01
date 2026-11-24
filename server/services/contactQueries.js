const ContactMessage = require("../models/ContactMessage");

async function createContactMessage(message) {
  return ContactMessage.create(message);
}

module.exports = { createContactMessage };
