const fs = require("fs");

// fs.writeFile("messsage.txt", "Hello from NODEJS", (error) => {
//   if (error) throw error;
//   console.log("The file has been saved!");
// });

fs.readFile("./message.txt", 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
