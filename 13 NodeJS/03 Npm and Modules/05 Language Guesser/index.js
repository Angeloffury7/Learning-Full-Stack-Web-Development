//These lines make 'require' available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from "franc";
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);

if(langCode === "und") {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY AGAIN".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is ${language.name}`.green);
}
