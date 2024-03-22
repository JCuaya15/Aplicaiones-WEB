/*
TODO: Completado ggg
*/
class tarjetas{
    lista=[];
    constructor(header,contenido,valoracion,vistas,footer,img){
        this.header = header;
        this.contenido = contenido;
        this.valoracion = valoracion;
        this.vistas = vistas;
        this.footer = footer;
        this.img = img;
    }
    set header(varheader){
        this.lista.push(varheader);
    }
    set contenido(varcontenido){
        this.lista.push(varcontenido);
    }
    set footer(varfooter){
        this.lista.push(varfooter);
    }
    set img(varimg){
        this.lista.push(varimg);
    }
    set vistas(varvistas){
        this.lista.push(varvistas);
    }
    set valoracion(varvaloracion){
        this.lista.push(varvaloracion);
    }
}

var i = 0;

function main(opc){
    // Carga las primera tarjetas
    while(i <= 0){
        //1
        publi = new tarjetas("Base de Datos", "Una base de datos es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.", 0 , 0 , "jose Cuaya", "https://cdn-icons-png.flaticon.com/512/2733/2733764.png");
        //2
        publi.header = "Inteligencia Artificial IA";
        publi.contenido = "La inteligencia artificial aprovecha las computadoras y las máquinas para imitar las capacidades de resolución de problemas y toma de decisiones de la mente humana.";
        publi.valoracion = 0;
        publi.vistas = 0;
        publi.footer = "Si bien esta prueba ha sido objeto de mucho escrutinio desde su publicación, sigue siendo una parte importante de la historia de la IA.";
        publi.img = "https://cdn-icons-png.flaticon.com/512/2752/2752775.png";
        //3
        publi.header = "Redes";
        publi.contenido = " Una red de computadoras (también llamada red de ordenadores o red informática) es un conjunto de equipos nodos y software conectados entre sí por medio de dispositivos físicos que envían y reciben impulsos eléctricos, ondas electromagnéticas o cualquier otro medio para el transporte de datos, con la finalidad de compartir información, recursos y ofrecer servicios.";
        publi.valoracion = 0;
        publi.vistas = 0;
        publi.footer = "La estructura y el modo de funcionamiento de las redes informáticas actuales están definidos en varios estándares, siendo el más importante y extendido de todos ellos el modelo TCP/IP utilizado como base para el modelo de referencia OSI. Este último, concibe cada red como estructurada en siete capas con funciones concretas pero relacionadas entre sí (en TCP/IP se habla de cuatro capas). Debe recordarse que el modelo de referencia OSI es una abstracción teórica, que facilita la comprensión del tema, si bien se permiten ciertos desvíos respecto a dicho modelo";
        publi.img = "https://th.bing.com/th/id/OIP.uVqqK7BACJaTRCeKwukTrQHaHa?pid=ImgDet&rs=1";
        //4
        publi.header = "PC";
        publi.contenido = "La inteligencia artificial aprovecha las computadoras y las máquinas para imitar las capacidades de resolución de problemas y toma de decisiones de la mente humana.";
        publi.valoracion = 0;
        publi.vistas = 0;
        publi.footer = "Si bien esta prueba ha sido objeto de mucho escrutinio desde su publicación, sigue siendo una parte importante de la historia de la IA.";
        publi.img = "https://cdn-icons-png.flaticon.com/512/2752/2752775.png";
        //3
        publi.header = "ISA";
        publi.contenido = " Una red de computadoras (también llamada red de ordenadores o red informática) es un conjunto de equipos nodos y software conectados entre sí por medio de dispositivos físicos que envían y reciben impulsos eléctricos, ondas electromagnéticas o cualquier otro medio para el transporte de datos, con la finalidad de compartir información, recursos y ofrecer servicios.";
        publi.valoracion = 0;
        publi.vistas = 0;
        publi.footer = "La estructura y el modo de funcionamiento de las redes informáticas actuales están definidos en varios estándares, siendo el más importante y extendido de todos ellos el modelo TCP/IP utilizado como base para el modelo de referencia OSI. Este último, concibe cada red como estructurada en siete capas con funciones concretas pero relacionadas entre sí (en TCP/IP se habla de cuatro capas). Debe recordarse que el modelo de referencia OSI es una abstracción teórica, que facilita la comprensión del tema, si bien se permiten ciertos desvíos respecto a dicho modelo";
        publi.img = "https://th.bing.com/th/id/OIP.uVqqK7BACJaTRCeKwukTrQHaHa?pid=ImgDet&rs=1";
        console.log(`Tarjeta agregada: ${Object.entries(publi)}`);
        console.log(Object.entries(publi));
        console.log(publi.lista);
        i++;
    }
    switch(opc){
        case '1':
            //permite crear tus propias tarjetas
            console.log("Has elegido Crear");
            let str_header = prompt("Escribe el encabezado");
            let str_contenido = prompt("Escribe el contenido");
            let str_footer = prompt("Escribe el footer");
            let str_img = prompt("Escribe una url para la imagen");
            publi.header = str_header;
            publi.contenido = str_contenido;
            publi.valoracion = 0;
            publi.vistas = 0;
            publi.footer = str_footer;
            publi.img = str_img;
            console.log(`Tarjeta agregada: ${Object.entries(publi)}`);
            console.log(Object.entries(publi));
            console.log(publi.lista);
            break;
        case '2':
            //busca una tarjeta
            console.log("Has elegido Buscar");
            let cont = 1;
            let encabezados = "";
            for(let j=0; j < publi.lista.length; j++) {
                if( j%6 == 0 ){
                    encabezados = encabezados + cont+") " + publi.lista[j] + "\n";
                    cont++;
                }
            }
            let aux2 = prompt("Elije una tarajeta: \n"+encabezados)
            aux2 = (aux2*6)-6;
            //console.log(aux2);
            publi.lista[aux2+3]++;
            console.log(publi.lista[aux2+3]);
            let encabezado = "<header><h1>"+publi.lista[aux2]+"</h1></header>";
            let parrafo = "<p>"+publi.lista[aux2+1]+"</p>";
            let imagen = "<img src ="+publi.lista[aux2+5]+">";
            let piedepag = "<p>"+publi.lista[aux2+4]+"</p>";
            let vistas = "<h3> Vistas: "+publi.lista[aux2+3]+"</h3>";
            let valor = "<h3> Valoracion: "+publi.lista[aux2+2]+"</h3>";
            document.open("https://www.desarrollo-web-br-bd.com/es/javascript/document.write-sobrescribiendo-el-documento/1043134722/");
            document.write(encabezado +parrafo +imagen+piedepag+vistas+valor);
            document.close();
            //console.log(encabezados);
            break;
        case '3':
            //elimina una tarjeta
            console.log("Has elegido Eliminar");
            let cont2 = 1;
            let encabezados1 = "";
            for(let j=0; j < publi.lista.length; j++) {
                if( j%6 == 0 ){
                    encabezados1 = encabezados1 + cont2+") " + publi.lista[j] + "\n";
                    cont2++;
                }
            }
            let aux3 = prompt("Elije una tarajeta: \n"+encabezados1)
            aux3 = (aux3*6)-6;
            console.log(aux3);
            publi.lista.splice(aux3, 6);
            console.log(Object.entries(publi));
            console.log(publi.lista);
            break;
    }
}

