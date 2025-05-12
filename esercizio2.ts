import inquirer from "inquirer";

(async () => {
  const { temperatura } = await inquirer.prompt([
    {
      name: "temperatura",
      type: "input",
      message: "Qual è la temperatura in gradi Celsius?",
      validate: (input) => !isNaN(parseFloat(input)) || "Inserisci un numero valido",
    }
  ]);
  
  const temp = parseFloat(temperatura);
  if (temp < 10) {
    console.log("Fa freddo");
  } else if (temp >= 10 && temp <= 30) {
    console.log("Temperatura normale");
  } else {
    console.log("Fa caldo");
  }
})();
