#! /usr/bin/env node

import inquirer from "inquirer";

const answers:{
    "No1":number, 
    "No2":number,
    "operator":string
} = await inquirer.prompt( [{
    type: "number",
    name: "No1",
    message:"Write your first No1: "
},
{
    type: "number",
    name: "No2",
    message:"Write your first No2: "
},
{
   type: "list",
   name: "operator",
message: "select you operator",
choices: ["+", "-","*", "/"]

}
])
const{No1,No2,operator} =answers 
if(No1 && No2 && operator){
let result : Number = 0;
if(operator=== "+"){
 result = No1 + No2
}else if(operator=== "-"){
    result = No1 - No2
    } else if(operator=== "*"){
        result = No1 * No2
       } else if(operator=== "/"){
        result = No1 / No2
        
       }console.log("Your result is:" + result)
}else{
    console.log("Please select a valid operator")
}


