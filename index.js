/*1.Eliminar un elemento de un array, dado un índice.
eliminarIndice([1,2,3,4,5], 2) // [1,2,4,5]*/
let arry=[1,2,3,4,5]
function eliminarIndice(index){
    arry.splice(index,1);
    console.log(arry);
}
/*2.Determinar si un elemento existe dentro de un array.busqueda
Array([1, ‘hola’, ‘adiós’, 4, 100], ‘hola’) // Se encontró el elemento*/
let arrySearch=[1, 'hola', 'adiós', 4, 100]
function Searching(value){
    let SearchResult=arrySearch.find(x=>x===value);
    if (SearchResult===value){
        console.log('---->using find: elemento encontrado')
   }else{
       console.log('---->using find: elemento no encontrado')
   }
   if (arrySearch.includes(value)){
    console.log('---->using includes:'+'elemento encontrado')
    }else{
   console.log('---->using includes:'+'elemento no encontrado')
    }
}

/*3.Crear un arreglo con objetos y determinar si existe un valor determinado en las propiedades de los objetos.
let infoLibros = [{ titulo: “El Quijote”, autor: “Miguel C.”},
    { titulo: “Señor de las moscas”, autor: “William G.”},]
getSearchBook('Miguel C.',infoLibros) //Se encontró el elemento
getSearchBook('H. G. Wells',infoLibros) //No se encontró el elemento*/

let infoLibros = [{ titulo: 'El Quijote', autor: 'Miguel C.'},
    {titulo: 'Señor de las moscas', autor: 'William G.'},]

function getSearchBook(value,arry){
    let found=arry.findIndex(function (item){
        if (item.titulo===value || item.autor===value){
            return true;
        }
    });
    //console.log(found)
    if (found!==-1){
        console.log('Se encontro elemento')
    }else{
        console.log('No se encontro elemento')
    }
}

/*1.Crear un método que reciba como parámetros un arreglo de números, un número para 
agregarlo al arreglo y un tamaño máximo del arreglo:addElement(array, element, masSize)
y se debe considerar lo siguiente:
●Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, agregar 
    al nuevo elemento al final.addElement([1,2,3,4], 10, 5) // [1,2,3,4,10]
●Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, 
    el nuevo elemento debe reemplazar el último elemento del arreglo.addElement([1,2,3,4], 10, 4) // [1,2,3,10]
●Si el elemento ya existe en el arreglo, se debe desplazar el elemento del 
    arreglo al final.addElement([1,2,3,4], 2, 5) // [1,3,4,2]*/

function addElement(arry,element,masSize){
    let foundIndex=arry.findIndex(item=>item===element);
    if (foundIndex===-1 && arry.length<masSize){
        arry.push(element);
        console.log('element added at the end: ',arry)
    } else if(foundIndex===-1 && arry.length===masSize){
        arry.splice((arry.length-1),1,element);
        console.log('element replaced the last arry value: ',arry)
    }else if(foundIndex!==-1){
        arry.push(arry[foundIndex])
        arry.splice(foundIndex,1);
        console.log('element found and moved to the alst position: ',arry)
    }
}