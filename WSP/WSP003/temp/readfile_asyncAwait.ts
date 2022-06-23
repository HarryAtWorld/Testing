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

async function readdirFunction(dir: string) {
  const files = await readdirPromise(dir);
  files.forEach(async (file) => {
    try {
      const content = await readFilePromise(file);
      const lines = content.toString().split("\n");
      const toFile = `File (${file}): ${lines[0]} \n`;
      await writeFilePromise("output.txt", toFile, { flag: "a" });
    } catch (e) {
      console.log(e);
    }
  });
}

readdirFunction(directory);
