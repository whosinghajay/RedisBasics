const client = require("./client");

async function init() {
  const result = await client.get("message:3");
  console.log("Result->", result);
}

init();

async function init2() {
  await client.set("message:4", "Hey Hello");
  console.log("Result of init 2 funciton is: ", await client.get("message:4"));
}

init2();
