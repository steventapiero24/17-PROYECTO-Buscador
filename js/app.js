// Variables 
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max -10;


// Objetos
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}



// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    llenarSelect();

});



marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    
    filtrarautos();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarautos();

})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarautos();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarautos();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarautos();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarautos();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarautos();
    
    console.log(datosBusqueda)
})  


// Funciones

function mostrarAutos (autos) {

    limpiarHtml() // Limpia y Elimina el Html previo para que no se duplique

    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHtml = document.createElement('p');

        autoHtml.textContent = `
            ${marca} ${modelo} - ${year}  - ${puertas} puertas - Trasmision = ${transmision} - Precio: ${precio} - Color: ${color} 
        `;

        //imprimir el html

        resultado.appendChild(autoHtml)
    });
}

//limpiear el HTML

function limpiarHtml () {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarautos () {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }

    console.log (resultado)
}

function filtrarMarca (auto) {
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    } return auto; 
}


function filtrarYear (auto) {
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === year;
    } return auto; 
}
// filtrar por precio minimo

function filtrarMinimo (auto) {
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    } return auto; 
}
// filtrar por precio minimo

function filtrarMaximo (auto) {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    } return auto; 
}
// filtrar por precio minimo

function filtrarPuertas (auto) {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    } return auto; 
}
// filtrar por Transmision

function filtrarTransmision (auto) {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    } return auto; 
}
function filtrarColor (auto) {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color;
    } return auto; 
}


// Llenar el campo año 

function llenarSelect () {
    
    for ( let i = max; i >min; i-- ) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}



// Se llama cuando no hay resultado

function noResultado () {

    limpiarHtml();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent= 'No hay resultados, intenta con otros términos de búsqueda'
    resultado.appendChild(noResultado)
}

