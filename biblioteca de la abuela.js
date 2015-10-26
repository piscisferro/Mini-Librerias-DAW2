// Funcion Random entre un minimo y un maximo
function randomRange(min, max) {
    
    var resultado = (Math.random() * (max - min)) + min;
    
	/* Si queremos numeros enteros
	
	var resultado = Math.round((Math.random() * (max - min)) + min);
	
	*/
	
    return resultado;
    
}


// Funcion que borra el elemento objeto que se pasa como parametro
function borrar(elemento) {
    
    elemento.parentNode.removeChild(elemento);
    
}


// Funcion para mover un elemento a la izquierda o derecha
// Si ponemos distancia negativa nos moveremos hacia la izquierda
// Si ponemos distancia positiva nos moveremos hacia la derecha
function moverHorizontal(elementoId, distancia) {
 
    var elemento = document.getElementById(elementoId);
    
    elemento.style.left = (elemento.offsetLeft + distancia) + "px";
    
}


// Funcion para mover un elemento hacia arriba o hacia abajo
// Si ponemos distancia negativa nos moveremos hacia arriba
// Si ponemos distancia positiva nos moveremos hacia abajo
function moverVertical(elementoId, distancia) {
 
    var elemento = document.getElementById(elementoId);
    
    elemento.style.top = (elemento.offsetTop + distancia) + "px";
    
}