module.exports = {
  config: {
    name: "supportgc",
    version: "1.0",
    author: "Loid Butter",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the admin support group.",
    },
    category: "support",
    guide: {
      en: "\n\nTo use this command, simply type support.\n\n",
    },
  },

  // onStart is a function that will be executed when the command is executed
  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = "7789232844504185"; // ID of the support group

    const threadID = event.threadID;
    const userID = event.senderID;

    // Check if the user is already in the support group
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      // User is already in the support group
      api.sendMessage(
        "\n\nYou are already in the support group. If you didn't find it, please check your message requests or spam box.\n\n",
        threadID
      );
    } else {
      // Add user to the support group
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("\n\nFailed to add user to support group:\n\n", err);
          api.sendMessage("\n\nI can't add you because your id is not allowed message request or your account is private. please add me then try again...\n\n", threadID);
        } else {
          api.sendMessage(
            "\n\nYou have been added to the admin support group. If you didn't find the box in your inbox, please check your message requests or spam box.\n\n",
            threadID
          );
        }
      });
    }
  },
};
