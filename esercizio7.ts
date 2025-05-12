import inquirer from "inquirer";

(async () => {
    const { nome } = await inquirer.prompt([
        {
            name: "nome",
            type: "input",
            message: "Qual è il tuo nome?",
            validate: (input) => input.trim() !== ""
        }
    ]);

    const { eta } = await inquirer.prompt([
        {
            name: "eta",
            type: "input",
            message: "Qual è la tua età?",
            validate: (input) => !isNaN(parseFloat(input)) && parseInt(input) > 0
        }
    ]);

    if (parseInt(eta) < 18) {
        console.log("Sei minorenne.");
    } else {
        console.log("Sei maggiorenne.");
    }

    console.log(`Ciao ${nome}, hai ${eta} anni.`);

    const { numMax } = await inquirer.prompt([
        {
            name: "numMax",
            type: "input",
            message: "Qual è il numero massimo?",
            validate: (input) => !isNaN(parseFloat(input)) && parseInt(input) > 0
        }
    ]);

    const max = parseInt(numMax);
    for (let i = 1; i <= max; i++) {
        console.log(i);
    }

    if (max > 10) {
        const pari = max % 2 === 0;
        console.log("Il numero massimo è " + (pari ? "pari." : "dispari."));
    }
})();
