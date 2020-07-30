const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const Delimiter = require("@serialport/parser-delimiter");

const port = new SerialPort("/dev/ttyUSB1", { baudRate: 115200 });

//const parser = new Readline();
//port.pipe(parser);
const parser = port.pipe(new Delimiter({ delimiter: "\r" }));

parser.on("data", line => console.log(`> ${line}`));
//port.write('ROBOT POWER ON\n')
//> ROBOT ONLINE

async function printPort() {
  let result = await SerialPort.list();

  console.log(result);
}

//printPort();
setInterval(() => port.write("MS,0,01\r"), 100);
