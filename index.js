const shell = require('shelljs');
var jsonfile = require('jsonfile');

var file = __dirname + '/commands.json';
var object = jsonfile.readFileSync(file);
var command = "";

console.log("")
console.log("")

// 2º argumento - alias do comando no arquivo .json
if (object[process.argv[2]]) {
    console.log(">>> Iniciado");
    console.log(">>> Processando..");

    // Seta o comando
    command += object[process.argv[2]];
    var cArg = 3; // Inicia como 3º argumento do shell

    do {
        // Percorre nos argumentos vindos do shell
        command += process.argv[cArg] ? " " + process.argv[cArg] : "";
        cArg++;
    } while (process.argv[cArg]);

    shell.exec(command);
    
    console.log(">>> Pronto !")
} else {
    console.log("Comando inválido. Tente novamente");
}
console.log("")
console.log("")