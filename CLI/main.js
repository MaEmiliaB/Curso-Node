const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const NOTAS_FILE = "NOTAS_FILE.json";
const notas = [];

function addNota(nota) {
    notas.push(nota)
    fs.writeFileSync(NOTAS_FILE, JSON.stringify(notas));
}

function main() {
    rl.question(
        "Qué queres hacer? 1. Agregar una nota, 2. Salir: ",
        (answer) => {
            switch (answer) {
                case "1":
                    rl.question("Ingresá el texto de tu nota: ",
                        (userAnswer) => {
                            addNota(userAnswer);
                            main();
                        })
                    break;
                case "2":
                    rl.close();
                    break;
                default:
                    console.log("Invalid option");
                    main();
                    break;
            }
        }
    );
}

main();