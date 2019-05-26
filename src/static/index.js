const socket = io("/");

socket.on("hello",()=>{
  console.log("Someone Joined");
});

socket.emit("helloGuys");
