import inquirer from "inquirer";
// Asking Question from user through Inquirer
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perfom operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// condition statements If-Else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid input");
}
