//1. deitu identifikadorea
const aktibazioBotoia = document.getElementById('1botoi')
const imagen = document.getElementById('miImagen');
//2. Ekintza: Argazkia atera
function erakutsiOrain(){
     imagen.style.display = 'block';
     aktibazioBotoia.addEventListener ('click', erakutsiOrain)
}