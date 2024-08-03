const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Server is UP" });
});

app.post("/enviar", (request, response) => {
  const { nome, idade } = request.body();

  return response.json({ nome, idade });
});

app.listen(3333);
