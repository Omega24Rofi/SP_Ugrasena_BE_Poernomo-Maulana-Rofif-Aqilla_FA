import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("FE is Connected");
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

app.get("/gmat", (req, res) => {
    res.send({
      title: "#VolareInSpatio",
    });
  });


// localhost:3000/gmat
server.listen(3000, () => {
  console.log("Server run on port 3000!");
});
