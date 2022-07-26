const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Erika Martinez";
const tema = "tema 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const archivos = require(__dirname + "/jsonHelper");
const arrayPeliculas = archivos.leerJson("Peliculas");
// A
const gestionDePeliculas = {
// B
peliculas : arrayPeliculas,
// C
listarPelículas : function(arrayDePeliculas){
    arrayDePeliculas.forEach(pelicula => {
        console.log(pelicula.titulo + ", de " + pelicula.director + ". Duración: " + pelicula.duracion + " minutos, " + pelicula.genero + ", " + "(" + pelicula.calificacionIMDB + " en IMDB)");
    });
},
// D
buscarPorId: function(id){
    return this.peliculas.find(pelicula => pelicula.id === id)
    },
// E
peliculasPorGenero: function(genero){
    return this.peliculas.filter(pelicula => pelicula.genero === genero)
},
// F
filtrarPorCalificacion: function(min, max){
    return this.peliculas.filter(pelicula => pelicula.calificacionIMDB >= min && pelicula.calificacionIMDB <= max);
},
// G
ordenarPorDuracion: function(){
    return this.peliculas.sort((a, b) =>a.duracion - b.duracion);
},
// H
duracionPromedio: function(){
    const res = this.peliculas.reduce( (acm, pelicula) => acm + pelicula.duracion, 0)
        return "El promedio de duración de las películas es de: " + res + " minutos.";
},
// I
modificarGeneroPorId: function(id, genero){
    const idEncontrado = this.buscarPorId(id)
    if(idEncontrado != null){
        idEncontrado.genero = genero;
        archivos.escribirJson('', this.peliculas)
    }else{
        return undefined;
    }
    return idEncontrado;
},

}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
//gestionDePeliculas.listarPelículas(arrayPeliculas)
console.log(o);

console.log(v, oo + " .D. Buscar");
//console.log(gestionDePeliculas.buscarPorId(5));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
//console.log(gestionDePeliculas.peliculasPorGenero("Aventura"));
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
//console.log(gestionDePeliculas.filtrarPorCalificacion(3, 7));
console.log(o);

console.log(v, oo + " .G. Ordenar");
//console.log(gestionDePeliculas.ordenarPorDuracion());
console.log(o);

console.log(v, oo + " .H. Duracion");
//console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
//console.log(gestionDePeliculas.modificarGeneroPorId(5, "Horror"));
//console.log(gestionDePeliculas.buscarPorId(5));
console.log(o);