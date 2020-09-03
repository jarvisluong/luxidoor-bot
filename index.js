const Mee6LevelsApi = require("mee6-levels-api");

const guildId = process.env.SERVER_ID;
// const userId = "258258856189231104"; // or a User object with the id property

Mee6LevelsApi.getLeaderboardPage(guildId).then((leaderboard) => {
  // do something with leaderboard
  console.log(JSON.stringify(leaderboard, null, 2));
});

Mee6LevelsApi.getRoleRewards(guildId).then((rewards) => {
  // do something with rewards
  for (const reward of rewards)
    console.log(`${reward.role.name} - Given at level ${reward.level}`);
});

// Mee6LevelsApi.getUserXp(guildId, userId).then(user => {
//     // do something with user info
//     console.log(`${user.tag} is at level ${user.level} and rank ${user.rank}.`);
// });
