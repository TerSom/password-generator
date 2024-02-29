let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatorPassword(len){
 const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
 const upperAlphabet = "abcdefghijklmnopqrstuvwxyz"
 const numeric = "0123456789"
 const symbol = "!@#$%^&*()_+-={}[]';:/?.,<>~"

 const data = lowerAlphabet + upperAlphabet + numeric + symbol
 let generator = '';
 for (let index = 0; index < len; index++ ) {
 generator += data [~~(Math.random() * data.length)];}
 return generator

};


function getPassword() {
    const newPassword = generatorPassword(passwordLength.value)
    password.value = newPassword
    alert("password di buat")
}


function savePassword(){
    get
} 