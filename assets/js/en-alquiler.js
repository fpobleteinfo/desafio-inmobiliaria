const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      bathroom: 2,
      costo: 2000,
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
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      bathroom: 3,
      costo: 2500,
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
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      bathroom: 2,
      costo: 2200,
      smoke: false,
      pets: false,
      get costoFormateado() {
          return this.costo.toLocaleString('es-CL', {
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
          });
      }    
    },
    {
      nombre: "Apart Hotel Capsula",
      src: "https://images.unsplash.com/photo-1573551461515-4c44d140a829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80",
      descripcion:
        "Vive la experiencia de capsula en Japon como siempre lo soñaste.",
      ubicacion: "345 Asukasa, Tokyo, Japon",
      habitaciones: 2,
      bathroom: 2,
      costo: 2500,
      smoke: false,
      pets: false,
      get costoFormateado() {
          return this.costo.toLocaleString('es-CL', {
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
          });
      }       
    },
    {
      nombre: "Hotel Casino Laguna Verde Green Land",
      src: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      descripcion:
        "Disfruta la increible vista a la Laguna Verde mientras juegas BlackJack.",
      ubicacion: "333 Elvis Avenue, Las Vengas, NV",
      habitaciones: 3,
      bathroom: 2,
      costo: 9999,
      smoke: true,
      pets: false,
      get costoFormateado() {
          return this.costo.toLocaleString('es-CL', {
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
          });
      }       
    },
  ];

  export default propiedades_alquiler;
  
  const tablaContainer = document.getElementById("propiedadesAlquilerId");
  
  let tablaHTML = `<div class="row">`;
  for (const alquiler of propiedades_alquiler) {
    tablaHTML += `
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
      <p><i class="fas fa-dollar-sign"></i>${alquiler.costoFormateado}</p>
  
      <p class="${alquiler.smoke ? "text-success" : "text-danger" }">
        <i class="fas fa-smoking"></i> ${alquiler.smoke ? "Permitido fumar" : "No se permite fumar" }
      </p>
      
      <p class="${alquiler.pets ? "text-success" : "text-danger" }">
        <i class="fas fa-paw"></i>${alquiler.pets ? "Mascotas Permitidas" : "No se permiten mascotas" }
      </p>
      </div>
      </div>
    </div>`;
  }
  
  tablaHTML += `</div>`;
  
  tablaContainer.innerHTML = tablaHTML;