const fs = require('fs')
const  pdfParse = require('pdf-parse')

const { pathInput, pathOutput } = require('./conf/config.js')

pdfParse(fs.readFileSync(pathInput)).then(data => fs.writeFileSync(pathOutput, data.text))