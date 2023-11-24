console.log("test");
const b_1=document.querySelector(".b_1");
const b_2=document.querySelector(".b_2");

b_1.addEventListener("click",function(){
    const win=window.open();
    win.location.href="button.html";
});
b_2.addEventListener("click",function(){
    const win=window.open();
    win.location.href="video.html";
})