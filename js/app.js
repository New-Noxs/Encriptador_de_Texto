let claves = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};
const patternErrorMessage = "Solo letras minusculas no mayusculas ni simbolos"

function validarTexto(){
    let input_text = document.getElementById("input-text").value;
    let pattern = /^[a-z]*$/;
    let res;
    if(!pattern.test(input_text)){
        res = false;
    }else{
        res = true;
    }
    return res;
}

function copiar() {
    let output = document.getElementById("output-text");
    output.select();
    document.execCommand("copy");
}


function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    let output = document.getElementById("output-text");
    output.style.visibility = 'visible';
    output.style.height = '70vh';
    let waitingImage = document.getElementById("waiting-image");
    waitingImage.hidden = true;

    let titleMessage = document.getElementById("message-title");
    titleMessage.hidden = true;

    let mainMessage = document.getElementById("main-message");
    mainMessage.hidden = true;
    let copyButton = document.getElementById("copy-button");
    if(validarTexto()){
        output.value = textoDesencriptado;
        copyButton.hidden = false;
    }else{
        output.value = patternErrorMessage;
    }
}

function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/[aeiou]/g, (match) => claves[match]);
    let output = document.getElementById("output-text");
    output.style.visibility = 'visible';
    let waitingImage = document.getElementById("waiting-image");
    waitingImage.hidden = true;
    let titleMessage = document.getElementById("message-title");
    titleMessage.hidden = true;
    let mainMessage = document.getElementById("main-message");
    mainMessage.hidden = true;
    let copyButton = document.getElementById("copy-button");
    output.style.height = '70vh';
    if(validarTexto()){
        output.value = textoEncriptado;
        copyButton.hidden = false;
    }else{
        alert(patternErrorMessage);
    }
}
