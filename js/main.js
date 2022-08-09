console.log(document.querySelector('title').textContent)

/*----------------------- PUNTO 3 -----------------------*/

let integrantes = [
    // Datos del primer integrante
    {
        primerNombre: document.querySelector('#integrante1_primer_nombre').textContent,
        segundoNombre: document.querySelector('#integrante1_segundo_nombre').textContent,
        primerApellido: document.querySelector('#integrante1_primer_apellido').textContent,
        segundoApellido: document.querySelector('#integrante1_segundo_apellido').textContent
    },

    // Datos del segundo integrante
    {
        primerNombre: document.querySelector('#integrante2_primer_nombre').textContent,
        segundoNombre: document.querySelector('#integrante2_segundo_nombre').textContent,
        primerApellido: document.querySelector('#integrante2_primer_apellido').textContent,
        segundoApellido: document.querySelector('#integrante2_segundo_apellido').textContent
    }
]

let integrante1 = integrantes[0]
let integrante2 = integrantes[1]

let coincidenciasNombres='Hay coincidencias en los nombres de los integrantes.'
let coincidenciasApellidos="'Hay coincidencias en los apellidos de los integrantes.'"




let nombresCompletos = 
` 
    -----
    Integrante 1: ${integrante1.primerNombre} ${integrante1.segundoNombre} ${integrante1.primerApellido} ${integrante1.segundoApellido}
    Integrante 2: ${integrante2.primerNombre} ${integrante2.segundoNombre} ${integrante2.primerApellido} ${integrante2.segundoApellido}
    -----
`

console.log(nombresCompletos.replace(/  /g," "))




/*----------------------- PUNTO 4 -----------------------*/

let color=''


/* La funcion nombresIguales busca coincidencias en los nombres de los integrantes, de ser así, lo informa tanto por
consola como por pantalla y le pide al usuario que ingrese un color para pintar aquellos nombres que coincidan. */



function nombresIguales() {
    if (integrante1.primerNombre === integrante2.primerNombre) {
        console.warn(coincidenciasNombres)
        color = prompt('Hay coincidencias en los nombres. Por favor, ingrese un color:')
        document.querySelector('#integrante1_primer_nombre').style.color = color
        document.querySelector('#integrante2_primer_nombre').style.color = color
    }

    else if(integrante1.primerNombre === integrante2.segundoNombre) {
        console.warn(coincidenciasNombres)
        color = prompt('Hay coincidencias en los nombres. Por favor, ingrese un color:')
        document.querySelector('#integrante1_primer_nombre').style.color = color
        document.querySelector('#integrante2_segundo_nombre').style.color = color
    }

    else if (integrante1.segundoNombre === integrante2.primerNombre) {
        console.warn(coincidenciasNombres)
        color = prompt('Hay coincidencias en los nombres. Por favor, ingrese un color:')
        document.querySelector('#integrante1_segundo_nombre').style.color = color
        document.querySelector('#integrante2_primer_nombre').style.color = color
    }

    else if (integrante1.segundoNombre === integrante2.segundoNombre && integrante1.segundoNombre.length > 0) {
        console.warn(coincidenciasNombres)
        color = prompt('Hay coincidencias en los nombres. Por favor, ingrese un color:')
        document.querySelector('#integrante1_segundo_nombre').style.color = color
        document.querySelector('#integrante2_segundo_nombre').style.color = color
    }
    else {
        console.warn('No hubo coincidencias en los nombres')
    }
}
nombresIguales();



/* La funcion apellidosIguales tiene la misma funcion que nombresIguales, pero en lugar de buscar coincidencias en 
los nombres, las busca en los apellidos*/
function apellidosIguales() {
    pregunta = prompt ('¿Queres comparar los apellidos? Ingrese SI o NO')

    if (pregunta === 'Si' || pregunta === 'si' || pregunta === 'SI') {
        if (integrante1.primerApellido === integrante2.primerApellido) {
            console.warn(coincidenciasApellidos)
            color = prompt('Hay coincidencias en los apellidos. Por favor, ingrese un color:')
            document.querySelector('#integrante1_primer_apellido').style.color = color
            document.querySelector('#integrante2_primer_apellido').style.color = color
        }
    
        else if(integrante1.primerApellido === integrante2.segundoApellido) {
            console.warn(coincidenciasApellidos)
            color = prompt('Hay coincidencias en los apellidos. Por favor, ingrese un color:')
            document.querySelector('#integrante1_primer_apellido').style.color = color
            document.querySelector('#integrante2_segundo_apellido').style.color = color
        }
    
        else if (integrante1.segundoApellido === integrante2.primerApellido) {
            console.warn(coincidenciasApellidos)
            color = prompt('Hay coincidencias en los apellidos. Por favor, ingrese un color:')
            document.querySelector('#integrante1_segundo_apellido').style.color = color
            document.querySelector('#integrante2_primer_apellido').style.color = color
        }
    
        else if (integrante1.segundoApellido === integrante2.segundoApellido && integrante1.segundoApellido.length > 0) {
            console.warn(coincidenciasApellidos)
            color = prompt('Hay coincidencias en los apellidos. Por favor, ingrese un color:')
            document.querySelector('#integrante1_segundo_apellido').style.color = color
            document.querySelector('#integrante2_segundo_apellido').style.color = color
        }
        else {
            console.warn('No hubo coincidencias en los apellidos')
        }
    }
    else {
    }
}
apellidosIguales()