import { socket } from "./server";
console.log("hi");
const b_1= document.querySelector(".b_1");
const b_2= document.querySelector(".b_2");
const b_3= document.querySelector(".b_3");
const b_4= document.querySelector(".b_4");
b_1.addEventListener("click",function(){
    console.log("hi");
    socket.emit("play");
});
b_2.addEventListener("click",function(){
    console.log("hi");
    socket.emit("play_1");
});
b_3.addEventListener("click",function(){
    console.log("hi");
    socket.emit("play_2");
});
b_4.addEventListener("click",function(){
    console.log("hi");
    socket.emit("play_3");
});