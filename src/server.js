import express from "express";
import {join} from "path";
import socket from "socket.io";
import logger from "morgan"

const PORT = 4000;
const app = express();

app.set('view engine', 'pug');
app.set('views',join(__dirname,"views"));
app.use(express.static(join(__dirname,"static")));
app.use(logger("dev"));

app.get('/',(req, res)=>{
  res.render('home');
})

const handleListening = () => console.log(`Server start at port : ${PORT}`);


const server = app.listen(PORT, handleListening);
const io = socket.listen(server);


io.on("connection",socket=>{
  //setTimeout(()=>socket.broadcast.emit("hello"),5000);
  socket.on('helloGuys',()=>console.log("hello guys"));
})
