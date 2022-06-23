import fs from "fs";

const directory = __dirname;

// tradition style function
export function readdirPromise(directory: string) {
  return new Promise<string[]>(function (resolve, reject) {
    fs.readdir(directory, function (err, files) {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
}

// arrow style function
export const readFilePromise = (file: string) => {
  return new Promise<Buffer>((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

export function writeFilePromise(
  outputFile: string,
  data: string,
  option?: { flag: string }
) {
  return new Promise<void>(function (resolve, reject) {
    fs.writeFile(outputFile, data, { flag: "a" }, function (err) {
      if (err) {
        reject(err);
        return;
      }
    });
  });
}

// promise 
readdirPromise(directory).then((resolvedReaddir) => {
  resolvedReaddir.forEach((element) => {
    readFilePromise(element)
      .then((resolvedReadFile) => {
        const contentString = resolvedReadFile.toString();
        const lines = contentString.split("\n");
        const toFile = `File (${element}): ${lines[4]} \n`;
        writeFilePromise("output.txt", toFile, { flag: "a" }).catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
