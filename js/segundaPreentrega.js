const Productos = [
    {
      id: 1,
      nombre: "Cactus",
      precio: 1300,
      },
    {
      id: 2,
      nombre: "Guantes",
      precio: 1400,
      },
    {
      id: 3,
      nombre: "Lentes",
      precio: 1500,
      },
    {
      id: 4,
      nombre: "Aromáticas",
      precio: 1000,
      },
    {
      id: 5,
      nombre: "Flores",
      precio: 2500,
      },
    {
      id: 6,
      nombre: "Semillas",
      precio: 900,
      },
    {
      id: 7,
      nombre: "Sutratos",
      precio: 3000,
      },
  ];
  
  console.log(Productos);
  
  let seleccionDeFiltro = prompt(
    "Bienvenido! Que tipo de filtro queres aplicar? \nPor favor ingresa la letra que se encuentra a la izquierda de la opción deseada: \n P Precio mínimo \n N Nombre \n C Cancelar"
  );
  while (seleccionDeFiltro != "C") {
    switch (seleccionDeFiltro) {
      case "P":
        let filtroNumerico = parseInt(prompt("Ingrese el precio mínimo:"));
        const filtroPrecio = Productos.filter(
          (item) => item.precio > filtroNumerico
        );
        filtroPrecio.forEach((item) => {
          let resultadoPrecio = `
              Nombre: ${item.nombre}
              Precio: ${item.precio}
              `;
          alert(resultadoPrecio);
        });
        break;
      case "N":
        let filtroNombre = prompt("Ingrese el nombre del producto:");
        const filtroNombreEncontrado = Productos.filter((item) =>
          item.nombre.includes(filtroNombre)
        );
        filtroNombreEncontrado.forEach((item) => {
          let resultadoNombre = `
              Nombre: ${item.nombre}
              Precio: ${item.precio}
              `;
          alert(resultadoNombre);
        });
        break;
  
      case "C":
        alert("Gracias por tu visita");
        break;
  
      default:
        alert("Opción no encontrada");
        break;
    }
    seleccionDeFiltro = prompt(
      "Bienvenido! Que tipo de filtro queres aplicar? \nPor favor ingresa la letra que se encuentra a la izquierda de la opción deseada: \n P Precio mínimo \n N Nombre \n C Cancelar"
    );
  }