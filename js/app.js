// Variables 
const resultado = document.querySelector('#resultado');
const año = document.querySelector('year');
const max = new Date().getFullYear();
const min = max -10;ç


// Objetos



// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    llenarSelect();
})


// Funciones

function mostrarAutos () {
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHtml = document.createElement('p');

        autoHtml.textContent = `
            ${marca} ${modelo} - ${year}  - ${puertas} puertas - Trasmision = ${transmision} - Precio: ${precio} - Color: ${color} 
        `;

        resultado.appendChild(autoHtml)
    });
}

// Llenar el campo año 

function llenarSelect () {
    
    for ( let i = max; i >min; i-- ) {
        const option = document.querySelector('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}