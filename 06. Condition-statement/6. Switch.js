// break : it immediately exits the switch block or loop when it is encountered 
// continue : it skips the current iteration and continues with the next one

// example 1: 

var user = "super admin";

switch (user){
    case "super admin":
        console.log("You have full access");
        break;
    case "admin":
        console.log("You have full access but you can't delete anything");
        break;
    case "DEO": // DEO stands for Data Entry Operator
        console.log("You have access to enter and update data");
        break;
    case "user":
        console.log("You can access to view the records");
        break;
}

console.log("---------------------");
// example 2: day of the week

const day = 5;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}