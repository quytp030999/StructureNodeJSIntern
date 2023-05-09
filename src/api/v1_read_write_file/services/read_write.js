const fs = require("fs");
const path = require("path");

// const readable = fs.createReadStream(path.join(__dirname, "./README.txt"), {
//   encoding: "utf8",
//   highWaterMark: 32 * 1024,
// });

// const writeable = fs.createWriteStream(path.join(__dirname, "./READMECOPY.txt"));

// readable.on("data", (chunk) => {
//   console.log("chunk:::", chunk.length);
//   writeable.write(chunk);
// });

const buffer = new Buffer.from(
  JSON.stringify({
    name: "abc",
    age: 12,
  }),
  "utf8"
);
console.log("buffer:::", JSON.parse(buffer.toString()));
