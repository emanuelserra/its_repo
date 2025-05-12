import inquirer from 'inquirer';

(async () => {
    const { giorno }= await inquirer.prompt([
        { 
            name: "giorno",
            type: "input",
            message: "Qual è il giorno della settimana? (1-7)",
            validate: (input) => !isNaN(parseFloat(input)) && parseInt(input) >= 1 && parseInt(input) <= 7

        } 
    ]);
        const gg = parseInt(giorno);
        switch (gg) {
            case 1:
                console.log("Lunedì");
                break;
            case 2:
                console.log("Martedì");
                break;
            case 3:
                console.log("Mercoledì");
                break;
            case 4:
                console.log("Giovedì");
                break;
            case 5:
                console.log("Venerdì");
                break;
            case 6:
                console.log("Sabato");
                break;
            case 7:
                console.log("Domenica");
                break;
        }
    })();

