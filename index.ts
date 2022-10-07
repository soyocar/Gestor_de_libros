class Libro {
    private codigo: string;
    private categorias:string;
    private titulo: string;
    private autor: string;
    public cantidad: number;

    constructor(codigoParam:string, categoriasParam:string, tituloParam:string, autorParam:string,cantidadParam:number){
      this.codigo = codigoParam;  
      this.categorias = categoriasParam;
      this.titulo = tituloParam;
      this.autor = autorParam;
      this.cantidad = cantidadParam;
    }

    public setearCodigo(paramcodigo:string):void{
        this.codigo = paramcodigo;
    }

    public obtenerCodigo():string{
        return this.codigo;
    } 
   
    public obtenerCategorias():string{
        return this.categorias;
    } 
    public setearCategorias(paramCategorias:string):void{
        this.codigo = paramCategorias;
    }
    public obtenerTitulo():string{
        return this.titulo;
    } 
    public setearTitulo(paramTitulo:string):void{
        this.codigo = paramTitulo;
    }
    public obtenerAutor():string{
        return this.autor;
    } 
    public setearAutor(paramAutor:string):void{
        this.codigo = paramAutor;
        
    }
    public obtenerCantidad():number{
        return this.cantidad;
    }
    public setearCantidad(cantidadParam:number):void{
        this.cantidad = cantidadParam;
    }
}
class Gestorlibro  {
    public listadodeLibro: Libro[];
    constructor(listadodeLibrosParam:Libro[]) {
       this.listadodeLibros = listadodeLibrosParam;
        
     
    }

    public consultaLibro(librosPar:Libro):boolean{
        let respuesta:boolean = false;
        for(let i:number = 0 ; i < this.listadodeLibros.length ; i++){
            if(this.listadodeLibros[i].obtenerCodigo() === librosPar.obtenerCodigo()){
                respuesta = true; 
            }
        }
        return respuesta; 
    }

    public agregarLibro(libroParametro:Libro):void{
         this.listadodeLibros.push(libroParametro);
         console.log('Se agrego el libro correctamente');
    }   

    public eliminarLibro(paramLibro:Libro):void{
       let encontrado:boolean = false; 
       for(let i:number = 0; i < this.listadodeLibros.length;i++){
          if (this.listadodeLibros[i].obtenerCodigo() === paramLibro.obtenerCodigo()){
            this.listadodeLibros.splice(i,1);
            console.log("Se Elimino el libro: " + paramLibro.obtenerTitulo());
            encontrado = true;
            break;
          }
       }
       if (encontrado == false){
        console.log('No se encontro el Libro');
       }
    }

    public modificardatoLibro(posicion:number,codigoLibroParam:string,autorParam:string,cantidadparam:number):void{
      this.listadodeLibro[posicion].setearCodigo(codigoLibroParam);
      this.listadodeLibro[posicion].setearAutor(autorParam);
      this.listadodeLibro[posicion].setearCantidad(cantidadparam);
      console.log('El Libro se modificó correctamente')
    }

    

    
}


//SE CREAN LOS LIBROS

let libro1:Libro = new Libro('L3432','Novela','El Dino','Felipa Torales',45);
let libro2:Libro = new Libro('L3436','Novela','El Rey del Ganado','Roberto Fernandez',34);
let libro3:Libro = new Libro('L3437','Romance','La flor que se marchito','Florencia Rivas',34);
let arreglodeLibro:Libro[] = [libro1,libro2,libro3];
//SE CREA LA GESTION DE LIBROS
let bibliotecaAntartida:Gestorlibro = new Gestorlibro(arreglodeLibros);
//SE BUSCA UN DETERMINADO LIBRO
let existencia:boolean = bibliotecaAntartida.consultaLibro(libro2);

//SE MUESTRAN TODOS LOS LIBROS
console.log(arreglodeLibros);
//SE AGREGA UN LIBRO
bibliotecaAntartida.agregarLibro(libro2);
//SE ELIMINA UN LIBRO
bibliotecaAntartida.eliminarLibro(libro1);
console.log(bibliotecaAntartida);
//SE MODIFICA UN LIBRO
bibliotecaAntartida.modificardatoLibro(0,'l3432','Felipa Castro',50);
console.log(bibliotecaAntartida);
    




    
