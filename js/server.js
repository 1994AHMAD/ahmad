import { io } from "socket.io-client";

// export const socket = io("https://back-3vao.onrender.com");


export const socket = io(import.meta.env.VITE_SOCKET_URL);