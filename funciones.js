var funcion_fx = document.getElementById("f(x)");
var funcion_gx = document.getElementById("g(x)");
var botonOmega = document.getElementById("boton_omega");
var botonO = document.getElementById("boton_o");
var botonTheta = document.getElementById("boton_theta");


botonOmega.addEventListener("click", NotacionOmega);
botonTheta.addEventListener("click", NotacionTheta);
botonO.addEventListener("click", NotacionO);

function NotacionTheta(){
    var funcionFX = funcion_fx.value;
    var funcionGX = funcion_gx.value;
    var n = 1;
    var Fx = 0, Gx = 0;
    var minimo = 32767;
    var temporal = 0, contador1 = 0, contador2 = 0;
    var n01 = 0, n02 = 0, n0 = 0, maximo = -32768;

    do{
        Fx = func_fx(funcionFX, n);
        Gx = func_fx(funcionGX, n);

        temporal = Fx/Gx;

        if(temporal < minimo){
            minimo = temporal;
            n01 = n;
            contador1++;
        }
        if(temporal > maximo){
            maximo = temporal;
            contador2++;
            n02 = n;
        }

        if(n01<n02){
            n0 = n01;
        }else{
            n0 = n02;
        }
        n++;
    }while(n<=100);

    if(funcionFX==funcionGX){
    n0=1;
    maximo=maximo+0.1;
    minimo=minimo-0.1;
    }

    if(maximo != Infinity && minimo != Infinity){
        if(contador1==100 && contador2==100){
            alert("No se cumple");
        }else if(contador1==100 && contador2!=100){
            alert("Existe C2 pero no C1, por lo tanto no se cumple");
        }else if(contador1!=100 && contador2==100){
            alert("Existe C1 pero no C2, por lo tanto no se cumple");
        }else{
            alert("El valor de C1 es: " + minimo.toFixed(3) + " El valor de C2 es: " + maximo.toFixed(3) + " con N0 >= " + n0);
        }
    }else{
        alert("No se cumple");
    }

}


function NotacionOmega(){
    var funcionFX = funcion_fx.value;
    var funcionGX = funcion_gx.value;
    var n = 1;
    var Fx = 0, Gx = 0;
    var minimo = 32767;
    var temporal = 0, contador = 0;
    var n0 = 0;

    do{
        Fx = func_fx(funcionFX, n);
        Gx = func_fx(funcionGX, n);

        temporal = Fx/Gx;

        if(temporal < minimo){
            minimo = temporal;
            n0 = n;
            contador++;
        }

        n++;
    }while(n<=100);

    if(funcionFX==funcionGX){
    n0=1;
    minimo=minimo-0.1;
    }

    if(contador==100){
        alert("No existe C1");
    }else{
        alert("El valor de C1 es: " + minimo.toFixed(3) + " con N0 >= " + n0);
    }
}

function NotacionO() {
    var funcionFX = funcion_fx.value;
    var funcionGX = funcion_gx.value;
    var n = 1;
    var Fx = 0, Gx = 0;
    var maximo = -32768;
    var temporal = 0, contador = 0;
    var n0 = 0;

    do{
        Fx = func_fx(funcionFX, n);
        Gx = func_fx(funcionGX, n);

        temporal = Fx/Gx;

        if(temporal > maximo){
            maximo = temporal;
            contador++;
            n0 = n;
        }

        n++;
    }while(n<=100);

    if(funcionFX==funcionGX){
    n0=1;
    maximo=maximo+0.1;
    }

    if(maximo != Infinity){
        if(contador==100){
            alert("No existe constante");
        }else{
            alert("El valor de C2 es: " + maximo.toFixed(3) + " con N0 >= " + n0);
        }
    }else{
        alert("No existe constante");
    }

}

function func_fx(funcionFX, x){
    var fxx = "f(x) = ";
    var cadenafuncion = fxx.concat(funcionFX);
    var parser = math.parser();
    parser.eval(cadenafuncion);
    return parser.eval("f("+x+")");
}
