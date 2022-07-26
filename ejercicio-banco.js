//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a pa0rtir de aca!
  /*let clienteEncontrado = banco.consultarCliente("Ramon Connell");*/
 let banco = {
     clientes : arrayCuentas,

     consultarCliente: function (titular) {
         for (let i = 0; i < this.clientes.length; i++) {
             let clienteEncontrado = "No se encontró el cliente";
             if(titular === this.clientes[i].titularCuenta){
               clienteEncontrado = this.clientes[i];
             }
            console.log(clienteEncontrado);
             return clienteEncontrado;
             
         }
     },
     depositar: function (titularCuenta, monto) {
       let clienteEncontrado = this.consultarCliente(titularCuenta);
       if (clienteEncontrado !== "No se encontró el cliente" ) {
          clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos + monto;
       }

      console.log("Depósito realizado, su nuevo saldo es: " + clienteEncontrado.saldoEnPesos);
     },

     buscarxCuenta: function(nroCuenta) {
      for (let i = 0; i < this.clientes.length; i++) {
           let clienteEncontrado = "No se encontro el numero de cuenta"
           if (nroCuenta = this.clientes[i].nroCuenta) {
             clienteEncontrado = this.clientes[i];
             console.log("Este numero de cuenta pertence a el cliente: " + clienteEncontrado.titularCuenta);
             return clienteEncontrado;
           }
        
      }
      return "Cuenta no encontrada!";      
     },

     retirarDinero: function(nroCuenta, monto) {
      let clienteEncontrado = this.buscarxCuenta(nroCuenta);
      if (clienteEncontrado !== "No se encontro el numero de cuenta") {
         clienteEncontrado.saldoEnPesos = clienteEncontrado.saldoEnPesos - monto;
         console.log("Su nuevo saldo es: " + clienteEncontrado.saldoEnPesos);
      }
     }   
 }
 console.log('Consultar Cliente');
 banco.consultarCliente("Abigael Natte");

 console.log('Depositar');
 banco.depositar("Abigael Natte",  40);

 console.log('Busqueda por cuenta');
 banco.buscarxCuenta(1183971869);

 console.log('Retirar dinero');
 banco.retirarDinero(7401971607, 18789);