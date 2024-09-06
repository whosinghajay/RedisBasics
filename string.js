const client = require("./client.js");

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

async function init3() {
  await client.expire("message:4", 10);
}
init3();
