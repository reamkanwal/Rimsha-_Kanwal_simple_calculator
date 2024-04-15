#! /usr/bin/env node  

import inquirer from "inquirer";

const answers:{
    numberOne:number;
    numberTwo:number;
    operators:string;
} =await inquirer.prompt([
    {
        type:"number",
        name: "numberOne",
        message: "please enter your first number:"
    },
    {
        type:"number",
        name: "numberTwo",
        message: "please enter your second number:"
    },
    {
        type:"list",
        name: "operators",
        choices:["+","-","*","/","%"],
        message: "Select an operation or percentage:"
    },
])

// console.log(answers);

const {numberOne,numberTwo,operators}= answers;
if(numberOne && numberTwo && operators){
    let result: number = 0;
    if(operators=== "+"){
        result = numberOne+ numberTwo;
    }else     if(operators=== "-"){
        result = numberOne - numberTwo;
    }else     if(operators=== "*"){
        result = numberOne * numberTwo;
    }else     if(operators=== "/"){
        result = numberOne / numberTwo;
    }else     if(operators=== "%"){
        result = (numberOne*numberTwo) /100;
    }
    console.log("great! youe result is:", result);
}else {
    console.log("Oops! please enter valid number and choose operation.");
}