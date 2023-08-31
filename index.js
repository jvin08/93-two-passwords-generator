
// letters 52, numbers 10
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];


let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let numbersChecked = false;
let symbolsChecked = false;

let generatorButton = document.getElementById("generator-btn");
const quantitySlider = document.getElementById("quantitySlider");

let lengthValue = document.getElementById("input-quantity");
quantitySlider.oninput = function() {
    lengthValue.textContent = this.value;
  }

passwordGenerator();

generatorButton.addEventListener("click",  passwordGenerator)

//filtering characters 
function filterCharacters(){
    let tempCharacters;
    if(numbersChecked === false && symbolsChecked === false){
        tempCharacters = []
        tempCharacters = [...characters].slice(0,52);
        
    }else if(numbersChecked === true && symbolsChecked === false){
        tempCharacters = []
        tempCharacters = [...characters].slice(0,62);
    }else if(numbersChecked === false && symbolsChecked === true){
        tempCharacters = []
        tempCharacters = [...characters].slice(0,52).concat([...characters].slice(62))    
    }else{
        tempCharacters = [...characters]
    }
    return tempCharacters;
}

function passwordGenerator(){
    let tempCharacters = filterCharacters();
    passwordOne.textContent = "";
    passwordTwo.textContent = "";

    for (let i = 0; i < quantitySlider.value; i++) {
        let randomIndexOne = Math.floor(Math.random() * tempCharacters.length)
        let randomIndexTwo = Math.floor(Math.random() * tempCharacters.length)
        passwordOne.textContent += tempCharacters[randomIndexOne];
        passwordTwo.textContent += tempCharacters[randomIndexTwo];
    }
}

function copyText(id) {
    // Get the text element by its ID
    const textElement = document.getElementById(id);

    // Create a new ClipboardItem with the text content
    const clipboardItem = new ClipboardItem({ "text/plain": new Blob([textElement.textContent], { type: "text/plain" }) });

    // Write the ClipboardItem to the clipboard
    navigator.clipboard.write([clipboardItem])
      .then(() => {
        // Provide user feedback (optional)
        alert("Copied to clipboard: " + textElement.textContent);
      })
      .catch(err => {
        // Handle any errors
        console.error('Failed to copy text: ', err);
      });
  }

  function checkNumbers(){
    numbersChecked = !numbersChecked
    // console.log(numbersChecked)
  }

  function checkSymbols(){
    symbolsChecked = !symbolsChecked;
    // console.log(symbolsChecked)
  }




