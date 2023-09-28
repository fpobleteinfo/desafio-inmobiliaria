import propiedades_venta from "./en-venta.js"
import propiedades_alquiler from "./en-alquiler.js"

const mostrarPropiedades = 3; //el numero de cajas para mostrar en el index

// INDEX VENTA

const sectionEnVenta = document.getElementById("propiedadesVentaId");
let tablaHTMLVenta = `<div class="row">`;

for (let i = 0; i < mostrarPropiedades; i++) {
const ventas = propiedades_venta[i]; //vamos guardando el valor del for para usar en "ventas" y sus propiedades
  
tablaHTMLVenta += `
    <div class="col-md-4 mb-4">
      <div class="card">  
        <img
          src="${ventas.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">${ventas.nombre}</h5>
          <p class="card-text">
            ${ventas.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${ventas.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${ventas.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${ventas.bathroom} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${ventas.costoFormateado}</p>

          <p class="${ventas.smoke ? "text-success" : "text-danger" }">
            <i class="fas fa-smoking"></i> ${ventas.smoke ? "Permitido fumar" : "No se permite fumar" }
          </p>

          <p class="${ventas.pets ? "text-success" : "text-danger" }">
            <i class="fas fa-paw"></i> ${ventas.pets ? "Mascotas Permitidas" : "No se permiten mascotas" }
          </p>
        </div>
      </div>
    </div>`;
}

tablaHTMLVenta += `</div>`;
sectionEnVenta.innerHTML = tablaHTMLVenta;

// INDEX ALQUILER

const sectionEnAlquiler = document.getElementById("propiedadesAlquilerId");
let tablaHTMLAlquiler = `<div class="row">`;

for (let i = 0; i < mostrarPropiedades; i++) {
const alquiler = propiedades_alquiler[i]; //vamos guardando el valor del for para usar en "ventas" y sus propiedades
  
tablaHTMLAlquiler += `
    <div class="col-md-4 mb-4">
      <div class="card">  
        <img
          src="${alquiler.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">${alquiler.nombre}</h5>
          <p class="card-text">
            ${alquiler.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${alquiler.bathroom} Baños
          </p>
          <p><i class="fas fa-dollar-sign"> </i> ${alquiler.costoFormateado}</p>

          <p class="${alquiler.smoke ? "text-success" : "text-danger" }">
            <i class="fas fa-smoking"></i> ${alquiler.smoke ? "Permitido fumar" : "No se permite fumar" }
          </p>

          <p class="${alquiler.pets ? "text-success" : "text-danger" }">
            <i class="fas fa-paw"></i> ${alquiler.pets ? "Mascotas Permitidas" : "No se permiten mascotas" }
          </p>
        </div>
      </div>
    </div>`;
}

tablaHTMLAlquiler += `</div>`;
sectionEnAlquiler.innerHTML = tablaHTMLAlquiler;