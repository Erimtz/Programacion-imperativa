//OBJETOS LITERALES
let arrayPersonas = [
    {
      dni: 475668738,
      nombre: "Martin",
      edad: 28,
      estaVacunado: true,
      depositado: 0,
      saludar: function () {
        console.log("Hola clase!");
      }
    },
    {
      dni: 20202020,
      nombre: "Pepe",
      edad: 23,
      estaVacunado: false,
      depositado: 0,
      saludar: function () {
        console.log("Hola clase soy pepe!");
      },
    },
    {
      dni: 123123123,
      nombre: "Cosme Fulanito",
      edad: 23,
      estaVacunado: false,
      depositado: 0,
      saludar: function () {
        console.log("Hola clase soy Cosme Fulanito!");
      },
    },
  ]
  //che acá escribi el objeto empresa pto 1
  let empresa = {
      nombre: 'SuperDesarrolladores',
      empleados: arrayPersonas,
      
      listarEmpleados: function(){
          for (let i = 0; i < this.empleados.length; i++) {
              const empleado = this.empleados[i]; // elemento en iteracion
              console.log('Nombre: ' + empleado.nombre + ' Edad: ' + empleado.edad ); 
          }
      },
      buscarPorDni: function(dni){
          //buscar por dni
          for (let i = 0; i < this.empleados.length; i++) {
              if (dni === this.empleados[i].dni) {
                  return this.empleados[i];
              }
          }
          return "Disculpe, empleado no encontrado!";
      },
      depositar(dni ,montoADepositar){
          //INVOCO A UN METODO buscarPorDni() DENTRO DEL OBJ EMPRESA Y LO QUE ME RETORNE LO ASIGNO A LA VARIABLE EMPLEADO
          let empleado = this.buscarPorDni(dni) ;//listo tengo el empleado
          if (typeof empleado !== 'string') {
              
              empleado.depositado = montoADepositar;
              return empleado; 
          }
          return "Disculpe, empleado no encontrado! Verfique el dni";      
      }
  }
  typeof 'Martin' //"string" 
  typeof true //"boolean"  
  //che, acá hace las invocaciones de los métodos de el obj empresa
  //LISTAR EMPLEADOS
  // console.log('LISTAR EMPLEADOS');
  // empresa.listarEmpleados();
  // console.log();
   console.log('BUSCAR POR DNI');
   console.log(empresa.buscarPorDni(475668738)) // retornar un objeto literal -> empleado 
   console.log();
   
   console.log('DEPOSITAR');
   console.log(empresa.depositar(475668738,50000));


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