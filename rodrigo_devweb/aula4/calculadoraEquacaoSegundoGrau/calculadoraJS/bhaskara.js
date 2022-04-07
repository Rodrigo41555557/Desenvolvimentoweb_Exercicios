function delta(a, b, c){
    var a = document.getElementById(a);
    var b = document.getElementById(b);
    var c = document.getElementById(c);
    
    var bAoQdd = Math.pow(b,2);
    return bAoQdd - 4 * a * c;
}

document.getElementById("botao").addEventListener("click", imprimir);

function bhaskara(b, a){
    var delta = delta();
    var x1, x2;
    x1 = ((0 - b)+Math.sqrt(delta))/(2*a);
    x2 = ((0 - b)-Math.sqrt(delta))/(2*a);
    console.log(x1)
    document.getElementById("secao").innerHTML = x1, x2;
    return x1, x2;
}

export { delta, bhaskara }