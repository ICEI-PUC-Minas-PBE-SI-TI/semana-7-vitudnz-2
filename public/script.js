let nome = prompt("Digite o seu nome:");

let renda = Number(prompt("Digite a sua renda:"));
while (isNaN(renda)) {
    renda = Number(prompt("Digite uma renda válida:"));
}

let qtd = Number(prompt("Quantas despesas (1 a 5)?"));
while (isNaN(qtd)) {
    qtd = Number(prompt("Digite um número válido:"));
}

if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;

let total = 0;

for (let i = 1; i <= qtd; i++) {
    let despesa = Number(prompt("Despesa " + i + ":"));
    
    while (isNaN(despesa)) {
        despesa = Number(prompt("Digite um valor válido:"));
    }

    total += despesa;
}

let sobra = renda - total;
let msg = "";

if (total > renda) {
    msg = "Orçamento negativo, você gastou mais do que ganhou.";
} else {
    if (sobra / renda >= 0.3) {
        msg = "Situação OK, boa economia.";
    } else {
        msg = "Situação alerta, pode melhorar a economia.";
    }
}

let resultado =
"Nome: " + nome +
"\nRenda: R$ " + renda.toFixed(2) +
"\nDespesas: R$ " + total.toFixed(2) +
"\nSobra: R$ " + sobra.toFixed(2) +
"\n\n" + msg;

alert(resultado);

console.log("===== RESULTADO DO ORÇAMENTO =====");
console.log(resultado);