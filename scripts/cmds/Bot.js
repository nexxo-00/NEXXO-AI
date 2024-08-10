module.exports = {
  config: {
    name: "dera",//command name 
    version: "1.0",
    author: "akash",
    countDown: 5,
    role: 0,
    shortDescription: "ignore this command",
    longDescription: "ignore this command",
    category: "no prefix",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event && event.body) {
      const body = event.body.toLowerCase();
      if (
        body === "bot" ||//you can edit this 
        body === "robot" ||
        body === "রোবট" ||
        body === "বট" ||
        body === "alive" ||
        body === "bots"
      ) {
        return message.reply(
          "কিরে মাংগের নাতি 😏",
          event.messageID,
          event.threadID
        );
      }
    }
  },
};
