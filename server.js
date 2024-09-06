const { default: axios } = require("axios");
const express = require("express");
const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
  const cachevalue = await client.get("todos");
  if (cachevalue) return res.json(JSON.parse(cachevalue));

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 30);
  return res.json(data);
});

app.listen(9000);
