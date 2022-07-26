const archivos = require(__dirname + "/lecturaEscritura");
const arrayAutos = archivos.leerJson("autos");

//ESCRIBÍ EL OBJETO PRINCIPAL
const carrera = {
    autos : arrayAutos,
    autosPorTanda : 6,

    listarAutos : function(arrayDeAutos){
        arrayDeAutos.forEach(auto => {
            console.log("piloto:" + auto.piloto + ", patente:" + auto.patente + ", velocidad:" + auto.velocidad + ", peso en kg:" + auto.peso + ", estado:" + (auto.sancionado ? "sancionado" : "habilitado"));
        });

    },

    autosHabilitados: function (){
        const autosHabilitados = this.autos.filter(auto => auto.sancionado === false) //o se puede hacer .filter(auto => !auto.sancionado)

        return autosHabilitados; 
        // así está bien o puedo retornar directamente el metódo:
        // return this.autos.filter(auto => auto.sancionado === false);

    },

    buscarPorPatente: function(patente){
    return this.autos.find(auto => auto.patente === patente)
    },

    filtrarPorCilindrada : function(cilindrada){
        const autosHabilitados = this.autosHabilitados();
        return autosHabilitados.filter(auto => auto.cilindrada <= cilindrada)
    },
    ordernarPorVelocidad : function (){
        return this.autos.sort((a, b) =>a.velocidad - b.velocidad)
    },
    ordernarPorPiloto : function (){
        return this.autos.sort((a, b) => {
            if (a.piloto < b.piloto) return -1
            if (a.piloto > b.piloto) return 1
             return 0
        })
    },
    habilitarVehiculo : function (patente){
        const autoEncontrado = this.buscarPorPatente(patente)
        if(typeof autoEncontrado){
            autoEncontrado.sancionado = false;
            archivos.escribirJson('autos', this.autos)
        }
        return autoEncontrado;
    },
    calcularPuntajeTotal : function () {
        return this.autos.reduce( (acm, auto) => acm + auto.puntaje, 0)
    }
    
}


//EJECUTÁ LOS METODOS
//carrera.listarAutos(arrayAutos); o carrera.listarAutos(autosHabilitados());
//console.log(carrera.autosHabilitados());
//console.log(carrera.buscarPorPatente('JQK433'));
//carrera.listarAutos(carrera.filtrarPorCilindrada(2000));
//console.log(carrera.filtrarPorCilindrada(20));
//console.log(carrera.ordernarPorVelocidad());
//console.log(carrera.ordernarPorPiloto());
//console.log(carrera.habilitarVehiculo('JHV223'));
//console.log(carrera.buscarPorPatente('JHV223'));
//console.log(carrera.calcularPuntajeTotal());




// OTRA MANERA DE SACAR EL  .FILTER()
/*autosHabilitados: function (){
    const autosTodos = this.autos
    autosTodos.filter()
      return ;
  }
  */

  /* EN CASO DE QUE ME PIDA RECORRER POR EL ARRAY, YA 
  UTILIZADO EN EL FILTER:

  buscarPorPatente : function (patente){
      const autosHabilitados = this.autosHabilitados();

      autosHabilitados.find(auto =>)
  }
  */

  /*OTRA FORMA DE ORDENAR EL SORT POR STRINGS
            if (a.piloto < b.piloto) {
                return -1
            }
            if (a.piloto > b.piloto) {
                return 1
            }
            if (a.piloto === b.piloto) {
                return 0
            }*/

/* PARA PREGUNTAR TRUE O FALSE EJEMPLO
  const res = carrera.buscarPorPatente('ABC123');
  if (res){
      console.log('si');
  } else {
      console.log('no');
  }

  o...

  const res = carrera.buscarPorPatente('ABC123');
  if (carrera.buscarPorPatente('ABC123')){
      console.log('si');
  } else {
      console.log('no');
  }

  */


  /* OTRA FORMA DE HABILITAR VEHICULO QUE ME INDIQUE SI ES UN OBJETO
    habilitarVehiculo : function (patente){
        const autoEncontrado = this.buscarPorPatente(patente)
        if(typeof autoEncontrado === 'object'){

        }
    }
*/

/* OTRA FORMA DE CALCULAR EL TOTAL
        calcularPuntajeTotal : function () {
        const res = this.autos.reduce( (acm, auto) => acm + auto.puntaje, 0)
        return "El puntaje total es: " + res;
    }
*/