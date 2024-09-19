const input1 = document.getElementById("inputNum1")
const input2 = document.getElementById("inputNum2")
const operacao = document.getElementById("operacao")
const button = document.getElementById("btnAdicionar")
const resultado = document.getElementById("resultado")

button.addEventListener("click", () =>{
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)

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