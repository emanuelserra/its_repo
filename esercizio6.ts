import inquirer from "inquirer";

function calcolaAreaRettangolo(altezza: number, base: number): number {
    return altezza * base;
}

function èQuadrato(altezza: number, base: number): boolean {
    return altezza === base;
}

(async () => {
    const {altezza} = await inquirer.prompt([
        {
        name: "altezza",
        type: "input",
        message: "Qual è l'altezza del rettangolo?",
        validate: (input) => !isNaN(parseFloat(input)) && parseInt(input) > 0 
    }
    ]);
    const {base} = await inquirer.prompt([
    {
        name: "base",
        type: "input",
        message: "Qual è la base del rettangolo?",
        validate: (input) => !isNaN(parseFloat(input)) && parseInt(input) > 0 
    }
]);
const area= calcolaAreaRettangolo (parseInt(altezza), parseInt(base));
console.log("L'area del rettangolo è: " + area);

if (èQuadrato(parseInt(altezza), parseInt(base))) {
    console.log("Il rettangolo è un quadrato.");
} else { 
    console.log("Il rettangolo non è un quadrato.");
}
})();
