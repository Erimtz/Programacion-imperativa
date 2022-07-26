const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/
/*ej: “id: 2, precio $ 75000, está Disponible, 4 ambientes,
 máximo 3 personas, acepta mascotas, propietarios: dueña: Laura Gutierrez”*/

 let inmobiliaria = {
// A
    departamentos,
// B
   listarDepartamentos: function (arrayDepartamentos) {
    for (let i = 0; i < arrayDepartamentos.length; i++) {
        const depto = arrayDepartamentos[i];
        console.log('id: ' + depto.id + 'precio: ' + depto.precioAlquiler + depto.disponible ? "Disponible" : "Alquilado" + depto.cantidadHabitacion + "ambientes" +
        "maximo" + depto.cantidadPersonas + depto.aceptaMascotas ? "acepta mascotas" : "No acepta mascotas");
       
    }
    },
// C
   departamentosDisponibles: function() {
       let deptosDisponibles = []

       for (let i = 0; i < this.departamentos.length; i++) {
           const depto = this.departamentos[i];

        if (this.departamentos[i].disponible === true) {
            deptosDisponibles.push(this.departamentos[i])
        }    
      }
       return deptosDisponibles
   },
// D
    buscarPorId: function (id){

        for (let i = 0; i < this.departamentos.length; i++) {

         if (this.departamentos[i].id === id) {
             return this.departamentos[i];
         }    
       }
    },
// E
  buscarPorPrecio: function () {
   let arrayDeptos = []
   let disponibles = this.departamentosDisponibles()
    for (let i = 0; i < this.disponibles.length; i++) {
      let depto = disponibles[i]
       if (depto.precioAlquiler<=unPrecio) {
          arrayDeptos.push(depto)
       }
    }
    return arrayDeptos
  }
// F
  
// G
   alquilarDepto(departamento){
       departamento.disponible = false

   },
 }

/******************************/
/* Ejecución de las consignas */
/******************************/
//console.table([{ alumno: nombre, tema: tema }]);

// invocar el metodo ---> nombreObjeto.nombreMetodo
console.log(v, "\n" + oo + "   B. listarDepartamentos");
inmobiliaria.listarDepartamentos(departamentos);
console.log(o);

/*console.log(v, oo + "   C. departamentosDisponibles");
inmobiliaria.listarDepartamentos(inmobiliaria.listarDepartamentos());
console.log(o);
//console.log(inmobiliaria.listarDepartamentos()); *Se pueden imprimir de las dos formas*/


console.log(v, oo + " D. buscarPorId");
console.log(inmobiliaria.buscarPorId(1));
console.log(o);

//console.log(v, oo + "  E. buscarPorPrecio"),
// Ejecución aquí
//console.log(o);

//console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
//console.log(o);

//console.log(v, oo + " G. simplificarPropietarios");
//console.log();
//console.log(o);


 /* buscarxId: function (id){
        let deptoEncontrado = ''

        for (let i = 0; i < this.departamentos.length; i++) {

         if (this.departamentos[i].id === id) {
             deptoEncontrado = this.departamentos[i];
         }    
       }
        return deptoEncontrado;
    },
   /*

-----------------------------------------------------

/*alquilarDepto(id){
    let depto = this.buscarPorId(id)

    depto.disponible = false;
    return depto;
}

console.log(inmobiliaria.buscarPorId(1));
console.log('AlquilarDepto')
console.log(inmobiliaria.alquilarDepto(1));*/



/*cambiarPropietario(id){
    let depto = this.buscarPorId(id)

    depto.propietarios = 'Martin';
    return depto;
}

console.log(inmobiliaria.buscarPorId(1));
console.log('cambiarPropietario')
console.log(inmobiliaria.cambiarPropietario(1));*/
 