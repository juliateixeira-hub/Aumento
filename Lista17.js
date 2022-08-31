var continuar = 1
var NovoSalario = 0

PerguntarNome()
Salário()
CalculoAumento(Salário, Porcentagem)
Porcentagem(Salário)
CalcularNovamente()

while (continuar == 1) {
    Porcentagem(Salário)
    NovoSalario = CalculoAumento(Salário, AumentoSalário)
    console.log(PerguntarNome() + " - " + Salário + " - " + Porcentagem + " NovoSalario "  ) 
    console.log(prompt("Deseja calcular novamente? 1 - sim / 2 - não "))
}

function PerguntarNome() {
    console.log(prompt("Qual é o seu nome?"))
}
function Salário() {
    console.log(parseFloat(prompt("Qual é o seu salário?")))
}
function CalculoAumento(Salário, AumentoSalário) {
    return Salário + (Salário * (AumentoSalário / 100))
}

function Porcentagem(Salário) {
    if (Salário <= 1500){
        return 20
    }
    else if (Salário <= 2000) {
        return 15
    }
    else if (Salário <= 3000) {
        return 10
    }
    else if (Salário <= 3001){
        return 5
    }
}
function CalcularNovamente(){
    return CalcularNovamente()
}