

function constantes(){
    const persona = {
        nombre : "Luis",
        apellido : "Dorado"
    
    }
    
    console.log("imprimo objeto completo: "+persona); //IMPRIME EL OBJETO
    console.log("imprimo solo el atributo del objeto"+ persona.nombre); //IMPRIME UN ATRIBUTO DEL OBJETO
    
    //esto es un ejemplo de que UN OBJETO declarado como CONST puede ser cambiado.
    persona.nombre= "cambioConstante"; 
    console.log(" he cambiado el nombre a una constante: "+persona.nombre); 
    
    //sin embargo no podemos cambiar una constante con un dato de tipo simple ( da error)
    /*const NOMBRE ="ALICIA"; 
    NOMBRE = "Alicia"; 
    console.log(NOMBRE); */ 
    
    //ESTO ES PORQUE JS ENTIENDE QUE LOS OBJETOS SON DINAMICOS, Y QUE SUS PROPIEDADES SI PUEDEN VARIAR
    
     }
     //constantes();
    
    
    function spreadOperator(){
    
    // EXPLICACION SREAD OPERATOR
    
    // funcion 1 -> El spread operator facilita CREACION DE COPIAS SUPERFICIALES DE  de arrays (UNICOS O CONCADENADOS) y objetos sin afectar a los originales.
    //funcion 2 ->  SIRVER PARA PASAR PARAMETROS VARIABLES
    // funcion 3 -> CONCADENAR ARRAYS
    
    //ejemplo con array.
    
    let numeros = [1,2,3,4,5]; 
    let numeros2 = numeros; // ESTA COPIA, SI AHORA MODIFICAS NUMEROS2, TAMBIEN MODIFICA NUMEROS....ES COMO UNA ESPECIE DE VINCULACION ENTRE COPIAS QUE SI UNA CAMBIA, CAMBIA LA OTRA
    let numerosSpreed = {...numeros}; //SIN EMBARGO UNA COPIA REALIZADA CON SPREAD, NO SE DA ESTE FENOMENO.
    
    console.log("copia convencional: "+numeros2); 
    console.log("COPIA CON SPREAD OPERATOR: ...")
    console.log(numerosSpreed); 
    
    //¿VEAMOS QUE SUCEDE AHORA CON NUMEROS CUANDO CAMBIEMOS LAS COPIAS SI CAMBIAMOS LAS COPIAS?
    numeros2[0]="cambio copia"; 
    numerosSpreed[1]="cambio copia"; 
    
    console.log("¿qué ha pasado con numeros cuando hemos modificado sus copias?"); 
    console.log(numeros); 
    
    // salida -> [ 'cambio copia', 2, 3, 4, 5 ], en el array Original (numeros) solo se ha modificado el valor que hemos cambiado desde la copia numero2, pero no con spreadOperator
    
    console.log("¿este fénomeno se da también a la inversa, es decir si modifico un valor en el array original, se va a transmitir a sus copias?"); 
    numeros[3] ="cambio original"; 
    
    console.log("¿se ha cambiado en numeros2? "+ numeros2);  //salida ->   cambio copia,2,3,cambio original,5  
    
    //conclusion es un mismo espacio de RAM, CON DOS VARIABLES ASOCIADAS. NO ES UNA COPIA REAL!!!! 
                                                          
    console.log("¿se ha cambiado en la copia creada con spread "); 
    console.log(numerosSpreed); //tampoco se cambia si modifico el original.
    
    //CONCLUSION SPREAD OPERATOR, HACE COPIAS VERDADERAS Y SEGURAS E INDEPENDENTES DEL ORIGINAL...PERO SUS COPIAS SON SUPERFICIALES 
    
    //¿A QUÉ NOS REFERIMOS CON QUE SUS COPIAS SON SUPERFICIALES?
    
    //Una copia superfical, es aquella que copia los elementos de primera linea de un objeto, pero no realiza copias verdaderas de sus elementos anidados. 
    //veamos un ejemplo:
    console.log("EJEMPLO DE COPIA SPREAD MOSTRANDO SU SUPERCIALIDAD"); 
    let original = [1, 2, {a: 3, b: 4}];
    let copia = [...original];
    
    copia[0]= 666; 
    copia[2].a = 99; // Modificamos el objeto anidado
    console.log(original); // [1, 2, {a: 99, b: 4}]
    console.log(copia);    // [ 666, 2, { a: 99, b: 4 } ]
    
    // Es decir, podemos observar como los elementos anidados, estan vinculados a la copia original y se modifica en ambos objetos, pero los elementos de primera linea 
    //son independientes.
    
    console.log("LA SUPECIALIDAD ES BIDERECCIONAL COMO SUCEDIA ANTES?"); 
    original[2].b = 666; 
    console.log(copia); // [ 666, 2, { a: 99, b: 666 } ] --> si
    
    //CONCLUSION-> spreadOperatos nos permite hacer copias superficiales verdaderas e indepedientes pero solo de los elementos superficiales.
    
    /**el fenómeno que observas al hacer una copia superficial con el spread operator (...) se debe a que los elementos anidados 
     * (como objetos o arrays dentro de un array) comparten la misma referencia en memoria.
     *  Esto significa que cuando haces una copia superficial, solo se copian las referencias de esos objetos anidados, no sus valores. */
    
    }
    
    // DESCOMENTA PARA VER EJEMPLOS POR CONSOLA
    //spreadOperator(); 
    
    /*
    
    
    
    
    ¿ COMO FUNCIONAN LAS COPIAS PROFUNDAS? 
    
    Una copia profunda implica copiar completamente todas las estructuras de datos anidadas 
    (como objetos dentro de objetos o arrays dentro de arrays). Es decir, las referencias 
    a objetos dentro del array también se copian, no solo el array principal. */
    
    
    function copiasDeep(){
    console.log("COPIAS PROFUNDAS CON JSON.parse")
    let original2 = [1, 2, {a: 3, b: 4}];
    let copiaProfunda = JSON.parse(JSON.stringify(original2));
    
    copiaProfunda[2].a = 99;
    console.log(original2); // [1, 2, {a: 3, b: 4}]
    console.log(copiaProfunda); // [1, 2, {a: 99, b: 4}]
    
    }
    copiasDeep(); 
    
    
    
    
    
    
    function spreadObjetos(){
    
    let coche = {
        marca : "Volkswagen",
        modelo : "polo",
        color : "azul"
    }
    
    console.log("COPIA OBJETO CON SPREAD OPERATOR: "); 
    let cocheSpread = {...coche}; 
    console.log(cocheSpread); 
    
    
    console.log("cambio el atributo de la copia spread de un objeto: "); 
    cocheSpread.marca="cambio marca"; 
    console.log(cocheSpread); // { marca: 'cambio marca', modelo: 'polo', color: 'azul' }
    
    console.log("obervo como afecta al original: "); 
    console.log(coche); //{ marca: 'Volkswagen', modelo: 'polo', color: 'azul' }
    
    // ¿ qué sucede? En este caso el objeto, no forma parte de un array, y la copia es verdadera, porque no tiene elementos anidados
    }
    //spreadObjetos(); 
    
    
    //YA HEMOS VISTO EL COMPORTAMENTO DE SPREAD A LA HORA DE REALIZAR COPIAS, PERO HEMOS DICHO QUE TAMBIÉN ERA UNA HERRAMIENTA ÚTIL, A LA HORA DE PASAR PARAMETROS VARIABLES
    //VEAMOS COMO FUNCINA EN ESTE SENTIDO : 
    
    //SPREAD OPERATOR, CON FUNCION ARROW...
    const numeros5 = [1,2,3,4,5]; 
    const paramVar = (num1, num2, num3) => {
        
        console.log(`posición [0]: ${num1}`);
        console.log(`posición [1]: ${num2}`);
        console.log(`posición [3]: ${num3}`);
    }
    //en esta linea vemos como "..." coge los numeros del array "numeros5" y los utiliza 
    //como parametros de la función, si el array es mas grande que la cantidad de parametros que espera la funcion, los sobrantes simplemente los ignora, no hace nada con ellos.
    
    
    //paramVar(...numeros5);  
    
    //¿ qué sucede si es al réves? si le padamos un array más pequeño , pero la funcion esta esperando más parametros?: 
    
    const numeros2 = [1,2]; 
    const paramVar2 = (num1, num2, num3) => {
        
        console.log(`posición [0]: ${num1}`);
        console.log(`posición [1]: ${num2}`);
        console.log(`posición [3]: ${num3}`);
    }
    //en esta linea vemos como "..." coge los numeros del array "numeros2" , pero la funcion espera 3 parametros y el array solo le puede proporcionar 2, el tercer parametros los undefine
    
    //paramVar(...numeros2);  
    
    // VEAMOS QUE HACE SPREADOPERATOR CON PARAMETROS VARIABLES EN EJEMPLOS UN POCO MÁS COMPLEJOS: 
    
    const clase = [
    
        { nombre: "Alicia",
        asignaturas: [{lengua: 5}, {mates: 6}]
        },
        
        { nombre: "Martin", 
            asignaturas: [{lengua: 8}, {mates: 8}]
        }
    
    ];
    
    const paramVar3 = (alumno1, alumno2, alumno3) => {
    
        console.log(alumno1); 
        console.log(alumno2); 
        console.log(alumno3); 
        
    
    }; 
    //paramVar3(...clase); 
    
    /*{ nombre: 'Alicia', asignaturas: [ { lengua: 5 }, { mates: 6 } ] }
    { nombre: 'Martin', asignaturas: [ { lengua: 8 }, { mates: 8 } ] }
    undefined*/ 
    
    // ¿ YA SABEMOS QUE SPREAD OPERATOR PUEDE ITERAR ARRAYS DE TODO TIPO, INCLUIDO UN ARRAY DE OBEJTOS, PERO PUEDE ITERAR UN OBJETO?
    // SI PERO PARA ELLOS HAY QUE RECURRIR A ...Object.values(nombreObjeto); 
    
    const gato = {
    
            nombre: "Gresca", 
            edad: 5,
           
    
    }
    
    const paramVar4 = (atributo1, atributo2) => {
    
        console.log(atributo1); 
        console.log(atributo2); 
        
        
    }; 
    
    //paramVar4(...Object.values(gato)); 
    
    /* ¿PORQUE TENGO QUE LLAMAR A Object.values para pasar parametros variables? que es slo hace...por debajo
    
    el problema radica en que spreadOperator, trabaja comodamente con arrays, por que son objetos indexados y ordenados. tienen (indice-valor), 
    y le resulta fácil de iterar.
    
    cuando spreadOperator se enfrenta a un objeto, tiene una estructura no iterable, no ordenada, cuyas propiedades no son indice-valor, sino clave-valor, 
    y spreadOperator no puede trabajar con estas estructuras, para ello esta Object.values(objeto) que lo que hace es coger la clave del objeto  e indexarla como en un array
    por ejemplo nombre es ahora 0, y edad es 1. y a cada celda le da el valor que le correspondia su clave. En definitica, crea un array con las propiedades de ese obejto
    como si hiciera esto gato = ["Gresca", 5]; 
    
    
    
    */
    
    
    
    
    
    
    
    //CONCADENACIÓN DE ARRAYS CON SPREAD OPERATOR
    
    let num1 = [1,2,3]; 
    let num2 = [4,5,6]; 
    let concat = [...num1, ...num2]; 
    console.log("concadenacion con spread Operator  " +concat); 
    
    
    
    //SPREAD OPERATOR COMO PARAMETROS VARIABLES...
    
    const argumentosIndefinidos = (...paramVariable) => {
    
        for( var item of paramVariable){
            console.log(item); 
        }
    }; 
    
    argumentosIndefinidos("argumeto1", "argumento2"); 
    
    
    
    //destructing
    
    
    let [a,b]= [1,2];
    console.log(a); //imprime 1
    console.log(a,b); //imprime 1 y 2
    
    //destructoring, permite extraer los atributos de un objeto y mantener otros.
    
    const people = {
    nombre: 'Pedro',
    apellidos: 'Pereda Mellado',
    edad: 53,
    profesion: 'Informático',
    }
    
    
    let {nombre, apellidos, ...otrosDatos} = people;
    console.log(nombre, apellidos, otrosDatos);
    
    //otro ejemplo de destructoring: 
    
    const perro = {
        nameZ: "zara",
        duenio: "Alicia", 
        raza: "cocker",
        nacimiento: 2005
    }
    
    let {nameZ, ...otrosArgumentos} = perro; 
    console.log(nameZ, otrosArgumentos);
    
    
    // destructing con un array de objetos
    
    let fruits = [
        {nombreFruta: "manzana", color: "roja" , peso: 200, precio: 5},
        {nombreFruta: "mandarina", color: "naranja" , peso: 200, precio: 5},
        {nombreFruta: "pera", color: "verde" , peso: 200, precio: 5},
    ]
    
    
    //sera necesario recorrer el array
    fruits.forEach((item) => {
        let {nombreFruta, color , ...datosNumericos} = item;
        console.log(nombreFruta, color, datosNumericos);
    });
    
    //destructing con objetos anidados
    const usuario = {
        nombre: 'Carlos',
        direccion: {
            ciudad: 'Barcelona',
            calle: 'Gran Via',
            numero: 123
        }
    };
    
    let { direccion: { ciudad, calle } } = usuario;
    
    console.log(ciudad); // Barcelona
    console.log(calle); // Gran Via
    
    
    //destructing permite asociar valores por defecto
    const persona = { nombre: 'Ana' };
    
    // Valor por defecto en edad
    let { nombrePers, edad = 25 } = persona;
    console.log(edad); // 25 (porque no estaba definida en el objeto)
    
    
    
    //intercambio de valores
    let letraA = 5;
    let letraB = 10;
    
    [letraA, letraB] = [letraB, letraA];
    
    console.log(letraA); // 10
    console.log(letraB); // 5
    
    
    //destructing anidado
    
    const usuario2 = {
        nombre: "María",
        edad: 30,
        direccion: {
            ciudad: "Madrid",
            pais: "España",
            codigoPostal: 28001
        },
        contacto: {
            telefono: "123-456-789",
            email: "maria@example.com"
        }
    };
    
    
    
    let colores = ["red", "blue", "yellow"];

    let [first, second, thirty] = colores; 
    console.log(first, second,thirty); 

    let [primer, ...resto] = colores; 
