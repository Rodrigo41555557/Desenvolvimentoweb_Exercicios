function bhaskara(a, b, c){
    bAoQdd = Math.pow(b,2);
    delta = bAoQdd - (4 * a * c);
    if(delta == 0){
        x1 = NaN; x2 = NaN;
    }else{
    x1 = ((0 - b)+Math.sqrt(delta))/(2*a);
    x2 = ((0 - b)-Math.sqrt(delta))/(2*a);
    }
    return {x1, x2};
}

function calculo(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;

    const resultado = bhaskara(a, b, c);
    document.getElementById("solucao").innerHTML = 'X1: ' + resultado.x1.toFixed(2) + ' e X2: ' + resultado.x2.toFixed(2);
}
//export { bhaskara, calculo }