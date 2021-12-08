const express = require("express");
const router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Eat cake. It's somebody's birthday somewhere :)",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "I can't believe I forgot to go to the gym today. That's 7 years in a row now.",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages, format: distanceInWords });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;