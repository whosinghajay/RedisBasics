const client = require("./client.js");

const init = async () => {
  await client.lpush("messages", "Hey");
  await client.lpush("messages", "There");
  await client.lpush("messages", "How're");
  await client.lpush("messages", "You");

  const result = await client.rpop("messages");
  console.log(result);
};

init();

const init2 = async () => {
  await client.rpush("messages", "Hey");
  await client.rpush("messages", "There");
  await client.rpush("messages", "How're");
  await client.rpush("messages", "You");

  const result = await client.rpop("messages");
  console.log(result);
};

init2();
