

let mensajeUsuario;
let textarea;
let textoOriginal;

// Función para encriptar el texto según las reglas especificadas
function encriptar() {
    textarea = document.getElementById('textoUsuario');
    textoOriginal = textarea.value.toLowerCase(); // Obtener el texto y convertirlo a minúsculas
    limpiar();
    // Aplicar las transformaciones especificadas
    let textoEncriptado = textoOriginal
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Actualizar el contenido del mensaje de usuario con el texto encriptado
    mensajeUsuario = document.getElementById('mensaje');
    mensajeUsuario.textContent = textoEncriptado;
}

// Función para desencriptar el texto según las reglas especificadas
function desencriptar() {
    textarea = document.getElementById('textoUsuario');
    textoOriginal = textarea.value.toLowerCase();
    limpiar();
    // Revertir las transformaciones especificadas
    let textoDesencriptado = textoOriginal
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado en el mensaje de usuario
    mensajeUsuario = document.getElementById('mensaje');
    mensajeUsuario.textContent = textoDesencriptado;
}

function limpiar() {
    document.querySelector('h1').innerHTML = '';
    let imagen = document.getElementById('imagenMuneco');
    if (imagen) {
        imagen.classList.add('hidden');
    }
    let copiarBtn = document.getElementById('copiarBtn');
    if (copiarBtn) {
        copiarBtn.hidden = false;
    }

}

function copiarTexto() {
    let text = document.getElementById("mensaje").innerHTML;

    navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');

}