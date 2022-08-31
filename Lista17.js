/*Essa função tem que receber dois parâmetros: o salário e a %
de aumento. E retornar o valor do salário já com o aumento.
3. Depois de calcular o aumento você deve exibir: o nome do
colaborador, o salário, a % de aumento e o salário reajustado.
4. Crie uma função que pergunte se o usuário deseja calcular
novamente com novas informações.
Para calcular o aumento, faça o valor do salário multiplicado pela
porcentagem em decimal.
Ex.: salário R$1.000,00 aumento de 10%
1000 * 1.10 = 1100
salário R$1.000,00 aumento de 15%
1000 * 1.15 = 1150
ATENÇÃO!! Faça um commit para cada item do exercício.*/
var continuar = 1


PerguntarNome()
Salário()
AumentoSalário()

while (continuar == 1) {
if (Salário <= 1500){
    console.log("Aumento de 20%")
}
else if (Salário <= 2000){
    console.log("Aumento de 15%")
    Salário = 1501
}
else if (Salário <= 3000){
    console.log("Aumento de 10%")
    Salário = 2001
}
else if(Salário >= 3001){
    console.log("Aumento de 5%")
}
}

function PerguntarNome() {
    console.log(prompt("Qual é o seu nome?"))
}
function Salário() {
    console.log(parseFloat(prompt("Qual é o seu salário?")))
}
function AumentoSalário() {
    for (var contador = 0; contador < Salário; contador++)
        contador++
}