const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    bathroom: 4,
    costo: 7999,
    smoke: false,
    pets: true,
    get costoFormateado() {
        return this.costo.toLocaleString('es-CL', {
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }    
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    bathroom: 2,
    costo: 10990,
    smoke: false,
    pets: true,
    get costoFormateado() {
        return this.costo.toLocaleString('es-CL', {
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }    
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 13,
    bathroom: 13,
    costo: 120000,
    smoke: true,
    pets: true,
    get costoFormateado() {
        return this.costo.toLocaleString('es-CL', {
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }    
  },
  {
    nombre: "Castillo La Monja",
    src: "https://images.unsplash.com/photo-1472502516535-eeee381bb45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    descripcion:
      "Vive como en la epoca medieval en un castillo de 'encanto'...",
    ubicacion: "666 Church St, San Francisco, CA",
    habitaciones: 5,
    bathroom: 4,
    costo: 66600,
    smoke: true,
    pets: true,
    get costoFormateado() {
        return this.costo.toLocaleString('es-CL', {
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }       
  },
  {
    nombre: "Villa Futurista Melon Lusk",
    src: "https://images.unsplash.com/photo-1512364615838-8088a04a778b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    descripcion:
      "Reside en la comodidad del futuro. Vigilancia 24/7. 3.000 camaras.",
    ubicacion: "123 X Ave, Dubai.",
    habitaciones: 3,
    bathroom: 2,
    costo: 9999,
    smoke: false,
    pets: true,
    get costoFormateado() {
        return this.costo.toLocaleString('es-CL', {
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }       
  },
];

export default propiedades_venta;

const tablaContainer = document.getElementById("propiedadesVentaId");

let tablaHTML = `<div class="row">`;
for (const ventas of propiedades_venta) {
  tablaHTML += `
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
    <p><i class="fas fa-dollar-sign"></i>${ventas.costoFormateado}</p>

    <p class="${ventas.smoke ? "text-success" : "text-danger" }">
      <i class="fas fa-smoking"></i> ${ventas.smoke ? "Permitido fumar" : "No se permite fumar" }
    </p>
    
    <p class="${ventas.pets ? "text-success" : "text-danger" }">
      <i class="fas fa-paw"></i>     ${ventas.pets ? "Mascotas Permitidas" : "No se permiten mascotas" }
    </p>
    </div>
    </div>
  </div>`;
}

tablaHTML += `</div>`;

tablaContainer.innerHTML = tablaHTML;
