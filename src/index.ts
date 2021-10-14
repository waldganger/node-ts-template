import { appendFile } from "fs";

console.log("hello from ts again !");
appendFile("test.txt", "test", (err) => console.log(err));
