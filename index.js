
const display = document.getElementById('display');

function appendToDisplay(input){

        display.value += input;
}


function calculate (){

        try{
        display.value = eval(display.value);
        //eval() 會將括號中的值加總
        }catch(error){ 
            
            display.value = "Error"; 
    
        }


function clearDisplay(){


        display.value = "";

}
}