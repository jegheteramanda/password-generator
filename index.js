let firstWord = document.getElementById("first-word")
let secondWord = document.getElementById("second-word")
let passwordBtn = document.getElementById("password-btn")


/*function generatePassword(){
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    let passwordLength = 15;
    for(let i = 0; i < passwordLength; i++){
        let firstPassword = Math.floor(Math.random() * 90)
        let randomChar = characters[firstPassword] 
    firstWord.textContent += randomChar 
    }
    
    for(let i = 0; i < passwordLength; i++){
        let secondPassword = Math.floor(Math.random() * 90)
        let randomChar = characters[secondPassword] 
        secondWord.textContent += randomChar
    }*/
    
     
    passwordBtn.addEventListener("click", generatePassword);
    
    function generatePassword(){
        firstPassword = ""
        secondPassword = ""
        firstWord.textContent = ""
        secondWord.textContent = ""
        const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    let passwordLength = 15;
    for(let i = 0; i < passwordLength; i++){
        let firstPassword = Math.floor(Math.random() * 90)
        let randomChar = characters[firstPassword] 
    firstWord.textContent += randomChar 
    }
    
    for(let i = 0; i < passwordLength; i++){
        let secondPassword = Math.floor(Math.random() * 90)
        let randomChar = characters[secondPassword] 
        secondWord.textContent += randomChar
    }
    

}
