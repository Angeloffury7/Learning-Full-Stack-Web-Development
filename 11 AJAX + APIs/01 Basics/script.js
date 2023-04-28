//THIS IS A JSON STRING (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`
const obj = JSON.parse(data);

const dog = {breed: "lab", color: "black", isAlive: true, owner: undefined}
const converted = JSON.stringify(dog);