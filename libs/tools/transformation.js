const fs = require("fs")
const originalPath =`${__dirname}/les_fleurs_du_mal.txt`
const destinationPath = `${__dirname}/../quotes.json`;
const file = fs.readFileSync(originalPath).toString()
let poems = file.split("\r\n\r\n").filter(
    (element) => (element.split("\r\n").length > 2)
)
console.log(poems)
poems = poems.map((element) => element.split("\r\n").join(""))
console.log(poems)
fs.writeFileSync(destinationPath, JSON.stringify(poems))
