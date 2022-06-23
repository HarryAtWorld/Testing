import fs from "fs";

const directory = __dirname;

fs.readdir(directory, function (error, files) {
  if (error) {
    console.log("[ERROR]: ");
    console.log(error);
    return;
  }
  for (let file of files) {
    fs.readFile(file, function (error, data) {
      if (error) {
        console.log("[ERROR]: ");
        console.log(error);
        return;
      }
      console.log(`Writing file: ${file} ......`);

      // convert buffer to string
      const dataString = data.toString();

      // split data by line and save as a string array
      const lines = dataString.split("\n");

      const toFile = `File (${file}): Content is (${lines[1]}) \n`;

      fs.writeFile("output.txt", toFile, { flag: "a" }, function (err) {
        console.log(err);
      });
    });
  }
});

console.log("DONE")