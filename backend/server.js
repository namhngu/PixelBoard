import {Server} from 'socket.io';

const SETTINGS = {
    MAX_PAINTS : 5,
    TIME_REFRESH : 60000
};

const io = new Server(3000, {
    cors: {
        origin: "http://127.0.0.1:8080",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
});

io.on('connection', client => {
    console.log("ioawhdoihasoi")
})

export {SETTINGS};
