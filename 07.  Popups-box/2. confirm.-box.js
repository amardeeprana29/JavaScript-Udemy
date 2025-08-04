// confirm box : it displays a dialog box with a message and two buttons: OK and Cancel
// it is used to confirm an action or decision from the user

// example 1: 

let isDelete = confirm("Do you realy want to delete this item?");
if(isDelete){
    console.log("Item deleted successfully.");
} else {
    console.log("Item deletion cancelled.");
}

