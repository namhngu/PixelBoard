const io = require('socket.io')(3000, {
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

import {radixTree} from "./userData.mjs"

radixTree.add("12.39.198", "bruh");