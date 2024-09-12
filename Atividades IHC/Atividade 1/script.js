console.log ('Ola mundo')

function soma(x,y){
    return x + y;
}

let resultado = soma (5,3)
console.log(resultado)


function subtracao(x,y){
    return x - y;
}

let sub = subtracao (10,7)
console.log(sub)

function multiplicacao(x,y){
    return x * y;
}

let mult = multiplicacao (4,6)
console.log(mult)

function divisao(x,y){
    return x / y;
}

let div = divisao (15,3)
console.log(div)

function divisao(x,y){
    if(x == 0 || y == 0){
        console.log("impossivel por 0")
        return -1;
    }
    return x / y;
}

let div1 = divisao (10,0)
console.log(div1)

function par(numero){
    if(numero % 2 === 0){
        return "É par"
    }
    else{
        return "É impar"
    }
    
}

let num = par (2)
console.log(num)


function somaIntervalo(x,y){
    let soma = 0;
    for(let i = x; i <= y; i++){
        soma += i;
    }

    return soma;
}

let somaI = somaIntervalo(1,5)
console.log(somaI)


function fatorial(numero){
    let fatorial = 1;
    for(let i = 1; i <= numero ; i++){
        fatorial *= i;
    }    

    return fatorial;
}

let respo = fatorial(5)
console.log(respo)

function contarVogais(texto){
    let contar = 0;

    const lerVogais= ['a','e','i','o','u','A','E','I','O','U'];

    for(let i = 0; i < texto.length; i++){
        if(lerVogais.includes(texto[i])) {
            contar++;
        }
    }

    return contar;
}

console.log(contarVogais("javascript"))