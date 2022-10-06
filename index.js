var Libros = /** @class */ (function () {
    function Libros(codigoParam, categoriasParam, tituloParam, autorParam, cantidadParam) {
        this.codigo = codigoParam;
        this.categorias = categoriasParam;
        this.titulo = tituloParam;
        this.autor = autorParam;
        this.cantidad = cantidadParam;
    }
    Libros.prototype.setearCodigo = function (paramcodigo) {
        this.codigo = paramcodigo;
    };
    Libros.prototype.obtenerCodigo = function () {
        return this.codigo;
    };
    Libros.prototype.obtenerCategorias = function () {
        return this.categorias;
    };
    Libros.prototype.setearCategorias = function (paramCategorias) {
        this.codigo = paramCategorias;
    };
    Libros.prototype.obtenerTitulo = function () {
        return this.titulo;
    };
    Libros.prototype.setearTitulo = function (paramTitulo) {
        this.codigo = paramTitulo;
    };
    Libros.prototype.obtenerAutor = function () {
        return this.autor;
    };
    Libros.prototype.setearAutor = function (paramAutor) {
        this.codigo = paramAutor;
    };
    Libros.prototype.obtenerCantidad = function () {
        return this.cantidad;
    };
    Libros.prototype.setearCantidad = function (cantidadParam) {
        this.cantidad = cantidadParam;
    };
    return Libros;
}());
var Gestorlibros = /** @class */ (function () {
    function Gestorlibros(listadodeLibrosParam) {
        this.listadodeLibros = listadodeLibrosParam;
    }
    Gestorlibros.prototype.consultaLibro = function (librosPar) {
        var respuesta = false;
        for (var i = 0; i < this.listadodeLibros.length; i++) {
            if (this.listadodeLibros[i].obtenerCodigo() === librosPar.obtenerCodigo()) {
                respuesta = true;
            }
        }
        return respuesta;
    };
    Gestorlibros.prototype.agregarLibro = function (libroParametro) {
        this.listadodeLibros.push(libroParametro);
        console.log('Se agrego el libro correctamente');
    };
    Gestorlibros.prototype.eliminarLibro = function (paramLibro) {
        var encontrado = false;
        for (var i = 0; i < this.listadodeLibros.length; i++) {
            if (this.listadodeLibros[i].obtenerCodigo() === paramLibro.obtenerCodigo()) {
                this.listadodeLibros.splice(i, 1);
                console.log("Se Elimino el libro: " + paramLibro.obtenerTitulo());
                encontrado = true;
                break;
            }
        }
        if (encontrado == false) {
            console.log('No se encontro el Libro');
        }
    };
    Gestorlibros.prototype.ModificardatoLibro = function (posicion, codigoLibroParam, autorParam, cantidadparam) {
        this.listadodeLibros[posicion].setearCodigo(codigoLibroParam);
        this.listadodeLibros[posicion].setearAutor(autorParam);
        this.listadodeLibros[posicion].setearCantidad(cantidadparam);
        console.log('El Libro se modificó correctamente');
    };
    return Gestorlibros;
}());
//SE CREAN LOS LIBROS
var libro1 = new Libros('L3432', 'Novela', 'El Dino', 'Felipa Torales', 45);
var libro2 = new Libros('L3436', 'Novela', 'El Rey del Ganado', 'Roberto Fernandez', 34);
var libro3 = new Libros('L3437', 'Romance', 'La flor que se marchito', 'Florencia Rivas', 34);
var arreglodeLibros = [libro1, libro2, libro3];
//SE CREA LA GESTION DE LIBROS
var bibliotecaAntartida = new Gestorlibros(arreglodeLibros);
//SE BUSCA UN DETERMINADO LIBRO
var existencia = bibliotecaAntartida.consultaLibro(libro2);
//SE MUESTRAN TODOS LOS LIBROS
console.log(arreglodeLibros);
//SE AGREGA UN LIBRO
bibliotecaAntartida.agregarLibro(libro2);
//SE ELIMINA UN LIBRO
bibliotecaAntartida.eliminarLibro(libro1);
console.log(bibliotecaAntartida);
//SE MODIFICA UN LIBRO
bibliotecaAntartida.ModificardatoLibro(0, 'l3432', 'Felipa Castro', 50);
console.log(bibliotecaAntartida);
