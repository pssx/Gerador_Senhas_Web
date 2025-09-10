let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let inputBox = document.getElementById("inputBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copy = document.getElementById("copy");


// Mostrando input slider valor 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
    inputBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%()&*";

// Função gerar senha
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";


    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }


    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copy.addEventListener('click', () => {
    if (inputBox.value != "" || inputBox.value.length >= 1) {
        navigator.clipboard.writeText(inputBox.value);
        copy.innerText = "Copiado";
        copy.title = "Senha Copiada";

        setTimeout(() => {
            copy.innerHTML = "Copiar Senha";
            copy.title = "";
        }, 3000)
    }
});