const input1 = document.getElementById("inputNum1")
const input2 = document.getElementById("inputNum2")
const operacao = document.getElementById("operacao")
const button = document.getElementById("btnAdicionar")
const resultado = document.getElementById("resultado")

button.addEventListener("click", () =>{
    let num1 = input1.value.trim();
    let num2 = input2.value.trim();

    if(num1 === ""){
        num1 = 0;
    }else{
        num1 = Number(num1);
    }

    if(num2 === ""){
        num2 = 0;
    }else{
        num2 = Number(num2);
    }

    const op = operacao.value;

    let res;

    switch(op){
        case "soma":
            res = num1 + num2;
            break;
        case "subtracao":
            res = num1 - num2;
            break;
        case "multiplicacao":
            res = num1 * num2;
            break;
        case "divisao":
            if(num2 === 0){
                alert("Impossivel por zero")
            }else{
                res = num1 / num2;
            }
    }
    resultado.textContent = res;
});