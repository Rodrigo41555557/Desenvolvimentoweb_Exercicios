import { bhaskara } from './bhaskara.js'

function div(a, b){
    div = a/b;
    return div;
}

function mult(a, b){
    mult = a*b;
    return mult;
}

function soma(a, b){
    soma = a+b;
    return soma;
}

function sub(a, b){
    sub = a-b;
    return sub;
}




function imprimir(){
    const a = document.getElementById("a").value
    const b = document.getElementById("b").value
    const c = document.getElementById("c").value
    
    const result = bhaskara(a, b, c);
    
    document.getElementById("res").innerHTML = "<h3><b>S = {</b>{"+(typeof(result.x1) == "number"? result.x1.toFixed(2): result.x1 )+ ", "+(typeof(result.x2) == "number"?result.x2.toFixed(2): result.x2)+"}<b>}. </b></h2>"
}
//comentar essa linha no calculadoratest
document.getElementById("botao").addEventListener("click", imprimir);