/*
Crie um programa que simula a movimentação de uma conta bancaria, 
onde deverá ser solicitado o saldo inicial e em seguida, 
através de um loop, deve pedir a operação (deposito, saque ou saldo) 
e o valor caso seja deposito ou saque. 
O programa deverá incrementar o saldo na operação de depósito 
e decrementar na operação de saque, sendo que nessa última, 
deve validar se o saldo do saque não ficara negativo. 
O programa será encerrado quando informada a operação sair.
*/

// solicitar o saldo inicial
// executar enquanto a operação for diferente de sair o passos seguintes
// solicitar a operação
// se a operação for deposito, deve somar ao saldo
// se a operação for saque, deve validar se a operação não irá deixar o saldo negativo
// se não for deixar o saldo negativo, deve descontar do saldo
// se a operacao for saldo, deve imprimir o saldo

const readline = require('readline-sync');

let saldo = readline.questionFloat("Informe o saldo inicial: ");

let operacao;

do {
  operacao = readline
    .question("Informe a operação (Deposito, Saque, Saldo ou Sair)")
    .toLowerCase();
  if (operacao === "deposito" || operacao === "saque") {
    const valorOperacao = readline.questionFloat("Informe o valor da operação: ")

    if (valorOperacao <= 0) {
      console.log("Valor inválido");
      continue;
    }

    if (operacao === "deposito") {
      saldo += valorOperacao;
    } else if (operacao === "saque") {
      if (valorOperacao > saldo) {
        console.log("Operação inválida - Saldo insuficiente");
        continue;
      }
      saldo -= valorOperacao;
    }
  } else if (operacao === "saldo") {
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
  } else if (operacao === "sair") {
    continue;
  } else {
    console.log("Operação inválida")
  }
} while (operacao !== "sair")