// Esperar a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const botonEncriptar = document.querySelector('.boton__encriptar');
    const botonDesencriptar = document.querySelector('.boton__desencriptar');
    const botonCopiar = document.querySelector('.boton__copiar');
    const botonLimpiar = document.querySelector('.boton__limpiar');
    const areaTextoEntrada = document.querySelector('.area__1__texto');
    const areaTextoSalida = document.querySelector('.area__2__texto');

    // Función para encriptar texto
    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar texto
    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Acción para encriptar el texto ingresado
    botonEncriptar.addEventListener('click', function() {
        const textoIngresado = areaTextoEntrada.value; 
        const textoEncriptado = encriptarTexto(textoIngresado); 
        areaTextoSalida.value = textoEncriptado; 
        
        // Cambiar el estilo del área de texto de salida
        areaTextoSalida.style.backgroundImage = 'none'; 
        areaTextoSalida.style.color = 'var(--color--primario)'; 
    });

    // Acción para desencriptar el texto ingresado
    botonDesencriptar.addEventListener('click', function() {
        const textoIngresado = areaTextoEntrada.value; 
        const textoDesencriptado = desencriptarTexto(textoIngresado); 
        areaTextoSalida.value = textoDesencriptado;
        
        // Cambiar el estilo del área de texto de salida
        areaTextoSalida.style.backgroundImage = 'none'; 
        areaTextoSalida.style.color = 'var(--color--primario)'; 
    });

    // Acción para copiar el texto de salida al portapapeles
    botonCopiar.addEventListener('click', function() {
        const textoParaCopiar = areaTextoSalida.value; 
        areaTextoSalida.select(); 
        document.execCommand('copy'); 

        // Cambiar el placeholder para mostrar mensaje de confirmación
        const mensajePlaceholder = areaTextoSalida.placeholder; 
        areaTextoSalida.placeholder = '¡Texto copiado al portapapeles!'; 
        areaTextoSalida.value = ''; 

        // Restaurar el placeholder original y el texto encriptado después de unos segundos
        setTimeout(function() {
            areaTextoSalida.placeholder = mensajePlaceholder;
            areaTextoSalida.value = textoParaCopiar; 
        }, 2000); // 2 segundos de retraso
    });

    // Acción para limpiar los campos de entrada y salida
    botonLimpiar.addEventListener('click', function() {
        areaTextoEntrada.value = ''; 
        areaTextoSalida.value = ''; 

        // Restaurar estilos iniciales del área de texto de salida
        areaTextoSalida.style.backgroundImage = ''; 
        areaTextoSalida.style.color = ''; 
    });
});
