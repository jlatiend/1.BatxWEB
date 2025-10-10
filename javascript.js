
// Archivo: javascript.js

// 1.  HTMLeko objektuak hartu behar dira (Identifikatzailea lortu)

//ID botoiak kointziditu behar du HTMLko botoiaren IDarekin
const aktibazioBotoia = document.getElementById('botoi'); 
const imagen = document.getElementById('miImagen');

// 2. DEFINIR LA ACCIÓN (Ekintza definitu)
function erakutsiOrain() {
    // Comprueba si la imagen está OCULTA (display es 'none' o vacío)
    if (imagen.style.display === 'none' || imagen.style.display === '') {
        // Si está oculta, la MUESTRA
        imagen.style.display = 'block';
        aktibazioBotoia.textContent = 'Ezkutatu irudia (Ocultar)';
    } else {
        // Si está visible, la OCULTA
        imagen.style.display = 'none';
        aktibazioBotoia.textContent = 'Sakatu irudia erakusteko! (Mostrar)';
    }
}

// 3. ASIGNAR EL ESCUCHADOR DE EVENTOS (Konektatu ekintza)
// Hau funtziaren kanpoan doa; orria kargatzearekin batera martxan hasteko.
aktibazioBotoia.addEventListener('click', erakutsiOrain);