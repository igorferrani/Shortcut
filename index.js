const shell = require('shelljs');
var jsonfile = require('jsonfile');

var file = 'commands.json';
var object = jsonfile.readFileSync(file);

console.log("")
console.log("")

// 2º argumento - alias do comando no arquivo .json
if (object[process.argv[2]]) {
    console.log(">>> Iniciado")
    console.log(">>> Processando..")
    shell.exec(object[process.argv[2]]);
    console.log(">>> Pronto !")
} else {
    console.log("Comando inválido. Tente novamente");
}
console.log("")
console.log("")