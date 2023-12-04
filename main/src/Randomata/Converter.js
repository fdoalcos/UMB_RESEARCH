const r = require("./randomata.js");

function Converter(prog) {
  let domain = ["0", "1"]
  try {
    return r.toNfa(prog, domain) 
  } catch (err) {
    return err
    console.log("this is the nfa", r.toNfa(prog, domain))
    console.log("This is error 1", err[2])
    console.log("THIS IS THE ERROR", err)
    console.log("THIS IS THE RESULT OF THE ERROR", r.toNfa(prog, domain))
    return r.toNfa(prog, domain) 
  }
}

module.exports = Converter;