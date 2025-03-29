const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require('cors');

const PORT = 4000;


app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());

app.get('/api', (req,res)=>{
  console.log(req,res);
})

http.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}`)
})

// const { Server } = require("socket.io");


// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });

// io.on("connection", (socket) => {
//     console.log("A user connected");

//     socket.on("message", (data) => {
//         console.log("Message received:", data);
//         io.emit("message", data); // Send message to all clients
//     });

//     socket.on("disconnect", () => {
//         console.log("A user disconnected");
//     });
// });

// app.get("/", (req, res) => {
//     res.send("Server is running...");
// });

// server.listen(3000, () => console.log("Server running on port 3000"));
