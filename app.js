const entrada = document.getElementById("inputColor");
const boton = document.getElementById("btnVisualizar");
const selector = document.getElementById("colorSeleccion");
const resultado = document.getElementById("resultado");
boton.addEventListener("click",() => {

    selector.textContent = entrada.value;
    resultado.style.backgroundColor = entrada.value;
})