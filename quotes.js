let names = ["galileo","archimedes","erasmus","socrates","rené descartes","sir isaac newton"]
let texts = ["eppur si muove","eureka!","in regione caecorum rex est luscus",
    "I know nothing except the fact of my ignorance","cogito, ergo sum",
    "if I have seen further it is by standing on the shoulders of giants"
]
let formattedTexts = texts.map((text) => {
    if (text.endsWith("!")) {
        return text.replace(text.charAt(0),text.charAt(0).toUpperCase())
    } else {
        return text.replace(text.charAt(0),text.charAt(0).toUpperCase()).concat("",".")
    }
})
let formattedNames = names.map((name) => {
    name.replace(name.charAt(0),name.charAt(0).toUpperCase())
    let splitNames = name.split(" ")
    let capNames = splitNames.map((splitName) => splitName.replace(splitName.charAt(0),splitName.charAt(0).toUpperCase()))
    return capNames.join(" ")
})

let date = new Date()
let selector = date.getDate()%6
console.log("\""+formattedTexts[selector]+"\" -- "+formattedNames[selector])