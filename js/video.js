import {socket}from "./server";
const firstVideoInput = document.getElementById("firstVideo");
const first_1VideoInput = document.getElementById("firstVideo1");
const first_2VideoInput = document.getElementById("firstVideo2");
const first_3VideoInput = document.getElementById("firstVideo3");
const first_4VideoInput = document.getElementById("firstVideo4");
const videoPlayer = document.getElementById("videoPlayer");
const playFirstButton = document.getElementById("play");
console.log("test");

playFirstButton.addEventListener("click", () => {
    // Get the selected video file
    
    const file = firstVideoInput.files[0];
  
    // Set the source of the video player to the selected file
    videoPlayer.src = URL.createObjectURL(file);
    videoPlayer.requestFullscreen();
    videoPlayer.currentTime = 0;
    videoPlayer.style.display = "";
    videoPlayer.play();
    videoPlayer.addEventListener("ended", () => {
      console.log("aaa");
    //   document.exitFullscreen();
    videoPlayer.currentTime = 0;
     videoPlayer.play();
    //   videoPlayer.style.display = "none";
    });
  });

  socket.on("play", () => {
    console.log("this coming from the backend");
    const file = first_1VideoInput.files[0];
  
    // Set the source of the video player to the selected file
    videoPlayer.src = URL.createObjectURL(file);
    videoPlayer.requestFullscreen();
    videoPlayer.currentTime = 0;
    // videoPlayer.style.display = "";
    videoPlayer.play();
  
    videoPlayer.addEventListener("ended", () => {
      videoPlayer.pause();
  
      // videoPlayer.style.display = "none";
      const file = firstVideoInput.files[0];
      videoPlayer.src = URL.createObjectURL(file);
      videoPlayer.requestFullscreen();
      videoPlayer.currentTime = 0;
      // videoPlayer.style.display = "";
      videoPlayer.play();
      videoPlayer.addEventListener("ended", () => {
        videoPlayer.requestFullscreen();
        videoPlayer.currentTime = 0;
        videoPlayer.play();
      });
    });
  });
  socket.on("play_1", () => {
    console.log("this coming from the backend");
    const file = first_2VideoInput.files[0];
  
    // Set the source of the video player to the selected file
    videoPlayer.src = URL.createObjectURL(file);
    videoPlayer.requestFullscreen();
    videoPlayer.currentTime = 0;
    // videoPlayer.style.display = "";
    videoPlayer.play();
  
    videoPlayer.addEventListener("ended", () => {
      videoPlayer.pause();
  
      // videoPlayer.style.display = "none";
      const file = firstVideoInput.files[0];
      videoPlayer.src = URL.createObjectURL(file);
      videoPlayer.requestFullscreen();
      videoPlayer.currentTime = 0;
      // videoPlayer.style.display = "";
      videoPlayer.play();
      videoPlayer.addEventListener("ended", () => {
        videoPlayer.requestFullscreen();
        videoPlayer.currentTime = 0;
        videoPlayer.play();
      });
    });
  });
  socket.on("play_2", () => {
    console.log("this coming from the backend");
    const file = first_3VideoInput.files[0];
  
    // Set the source of the video player to the selected file
    videoPlayer.src = URL.createObjectURL(file);
    videoPlayer.requestFullscreen();
    videoPlayer.currentTime = 0;
    // videoPlayer.style.display = "";
    videoPlayer.play();
  
    videoPlayer.addEventListener("ended", () => {
      videoPlayer.pause();
  
      // videoPlayer.style.display = "none";
      const file = firstVideoInput.files[0];
      videoPlayer.src = URL.createObjectURL(file);
      videoPlayer.requestFullscreen();
      videoPlayer.currentTime = 0;
      // videoPlayer.style.display = "";
      videoPlayer.play();
      videoPlayer.addEventListener("ended", () => {
        videoPlayer.requestFullscreen();
        videoPlayer.currentTime = 0;
        videoPlayer.play();
      });
    });
  });
  socket.on("play_3", () => {
    console.log("this coming from the backend");
    const file = first_4VideoInput.files[0];
  
    // Set the source of the video player to the selected file
    videoPlayer.src = URL.createObjectURL(file);
    videoPlayer.requestFullscreen();
    videoPlayer.currentTime = 0;
    // videoPlayer.style.display = "";
    videoPlayer.play();
  
    videoPlayer.addEventListener("ended", () => {
      videoPlayer.pause();
  
      // videoPlayer.style.display = "none";
      const file = firstVideoInput.files[0];
      videoPlayer.src = URL.createObjectURL(file);
      videoPlayer.requestFullscreen();
      videoPlayer.currentTime = 0;
      // videoPlayer.style.display = "";
      videoPlayer.play();
      videoPlayer.addEventListener("ended", () => {
        videoPlayer.requestFullscreen();
        videoPlayer.currentTime = 0;
        videoPlayer.play();
      });
    });
  });

  firstVideoInput.addEventListener("change", () => {
    firstVideoInput.style.display = "none";
  });
  first_1VideoInput.addEventListener("change", () => {
    first_1VideoInput.style.display = "none";
  });
  first_2VideoInput.addEventListener("change", () => {
    first_2VideoInput.style.display = "none";
  });
  first_3VideoInput.addEventListener("change", () => {
    first_3VideoInput.style.display = "none";
  });
  first_4VideoInput.addEventListener("change", () => {
    first_4VideoInput.style.display = "none";
  });