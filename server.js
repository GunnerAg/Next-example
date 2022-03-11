const axios = require("axios");
const express = require("express");
const res = require("express/lib/response");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
const urlAPI = process.env.urlAPI || "http://141.95.108.196:4000";

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post('/user/personalData', (req, res)=> {
    console.log("Mandanga style", req.body)
    const data = req.body
    // Aquí llamada al otro api
    axios
      .post(`${urlAPI}/user/personalData`, data)
      .then((response) => console.log("responseAPI", response));
      res.json({ok: 'ok'}).status(200);
  })

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})