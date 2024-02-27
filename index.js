let btn = document.getElementById('btn');
let text = document.getElementById('text');

function generatePassword() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";
    let passwordLength = 18;
    let list;
    list += alphabet;
    list += upperAlphabet;
    list += numbers;
    list += symbols;
    list += passwordLength;
    let password = "";


    for (let x = 0; x < passwordLength; x++) {
        let index = Math.floor(Math.random() * list.length);
        password += list[index];
    }

    text.innerHTML = password;

}

btn.addEventListener('click', generatePassword);
