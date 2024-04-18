import inquirer from "inquirer"

const answer = await inquirer.prompt([{
    name : "sum1",
    type : "number",
    message : "Enter first number:"

}]);
const answer2 = await inquirer.prompt([{
    name: "sum2",
    type : "number",
    messsage : "Enter second number:"


}]);
let sum = answer.sum1 + answer2.sum2;
console.log(sum);





