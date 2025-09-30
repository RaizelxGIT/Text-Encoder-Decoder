let resultElement = document.getElementById("result")
function encodeText() {
let userInput = prompt("input your text here.").toUpperCase().trim()
     if(userInput !== ""){
       userInput = userInput.replaceAll("A", "r");
       userInput = userInput.replaceAll("B", "s");
       userInput = userInput.replaceAll("C", "t");
       userInput = userInput.replaceAll("D", "u");
       userInput = userInput.replaceAll("E", "v");
       userInput = userInput.replaceAll("F", "w");
       userInput = userInput.replaceAll("G", "x");
       userInput = userInput.replaceAll("H", "y");
       userInput = userInput.replaceAll("I", "z");
       userInput = userInput.replaceAll("J", "a");
       userInput = userInput.replaceAll("K", "b");
       userInput = userInput.replaceAll("L", "c");
       userInput = userInput.replaceAll("M", "d");
       userInput = userInput.replaceAll("N", "e");
       userInput = userInput.replaceAll("O", "f");
       userInput = userInput.replaceAll("P", "g");
       userInput = userInput.replaceAll("Q", "h");
       userInput = userInput.replaceAll("R", "i");
       userInput = userInput.replaceAll("S", "j");
       userInput = userInput.replaceAll("T", "k");
       userInput = userInput.replaceAll("U", "l");
       userInput = userInput.replaceAll("V", "m");
       userInput = userInput.replaceAll("W", "n");
       userInput = userInput.replaceAll("X", "o");
       userInput = userInput.replaceAll("Y", "p");
       userInput = userInput.replaceAll("Z", "q");
       userInput = userInput.replaceAll("1", "q");
          resultElement.textContent = userInput
    } else {
            resultElement.textContent = "Please type in a word or sentence."
}; 
}

function decodeText() {
let userInput = prompt("input your text here.").toUpperCase().trim()
if(userInput !== ""){
   userInput = userInput.replaceAll("A", "j");
   userInput = userInput.replaceAll("B", "k");
   userInput = userInput.replaceAll("C", "l");
   userInput = userInput.replaceAll("D", "m");
   userInput = userInput.replaceAll("E", "n");
   userInput = userInput.replaceAll("F", "o");
   userInput = userInput.replaceAll("G", "p");
   userInput = userInput.replaceAll("H", "q");
   userInput = userInput.replaceAll("I", "r");
   userInput = userInput.replaceAll("J", "s");
   userInput = userInput.replaceAll("K", "t");
   userInput = userInput.replaceAll("L", "u");
   userInput = userInput.replaceAll("M", "v");
   userInput = userInput.replaceAll("N", "w");
   userInput = userInput.replaceAll("O", "x");
   userInput = userInput.replaceAll("P", "y");
   userInput = userInput.replaceAll("Q", "z");
   userInput = userInput.replaceAll("R", "a");
   userInput = userInput.replaceAll("S", "b");
   userInput = userInput.replaceAll("T", "c");
   userInput = userInput.replaceAll("U", "d");
   userInput = userInput.replaceAll("V", "e");
   userInput = userInput.replaceAll("W", "f");
   userInput = userInput.replaceAll("X", "g");
   userInput = userInput.replaceAll("Y", "h");
   userInput = userInput.replaceAll("Z", "i");
   userInput = userInput.substring(0, 1).toUpperCase() + userInput.substring(1);
   resultElement.textContent = userInput
}else{
   resultElement.textContent = "Please type in a word or sentence."
}
}
function clearText(){
if(true){
resultElement.textContent = ""
} else {
resultElement.textContent = ""
}
}
function copyText() {
   const text = resultElement.textContent;
   if (text) {
       navigator.clipboard.writeText(text)
           .then(() => {
               alert("Copied to clipboard!");
           })
           .catch(err => {
               alert("Failed to copy text: " + err);
           });
   } else {
       alert("Nothing to copy.");
   }
}
