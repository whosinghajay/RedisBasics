const client = require("./client.js");

const init = async () => {
  await client.hset("bike:2", {
    model: "Deimos",
    brand: "Ergonom",
    type: "Enduro bikes",
    price: 4972,
  });
};

init();

const init2 = async () => {
  const res5 = await client.hmget("bike:2", ["model", "price"]);
  console.log(res5);
};

init2();
