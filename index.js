#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278,
    SAR: 3.75,
    OMR: 0.38,
    KWD: 0.31,
    BDT: 109.60,
    AFN: 71.23,
    NAD: 17.50,
    ZAR: 18.00,
    LKR: 200,
    NPR: 137.50,
    CNY: 6.10,
    MYR: 4.50,
    THB: 35.50,
    IDR: 15000,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR", "OMR", "KWD", "BDT", "AFN", "NAD", "ZAR", "LKR", "NPR", "CNY", "MYR", "THB", "IDR"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR", "OMR", "KWD", "BDT", "AFN", "NAD", "ZAR", "LKR", "NPR", "CNY", "MYR", "THB", "IDR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
