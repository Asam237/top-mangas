const yaml = require("js-yaml");
const fs = require("fs");

const args = process.argv.slice(2);

switch (args[0]) {
  case "watch":
    watch();
    break;
  default:
    convert();
}

const a = require("../utils/");

function watch() {
  fs.watch("../assets/data/manga.yaml", function (event, filename) {
    require("child_process").fork("../utils/yaml-convert.js");
  });
}

function convert() {
  try {
    const json = yaml.load(
      fs.readFileSync("../assets/data/manga.yaml", "utf8")
    );
    fs.writeFileSync("../assets/data/manga.json", JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
}
