// Projeto: Calculadora de partidas rankeadas
// Desenvolvido por: Lucivan Filho

function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  // Aqui estou fazendo o cálculo do nível e qual rank o jogador está
  let nivel;
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 40) {
    nivel = "Prata";
  } else if (vitorias >= 41 && vitorias <= 60) {
    nivel = "Ouro";
  } else if (vitorias >= 61 && vitorias <= 80) {
    nivel = "Platina";
  } else if (vitorias >= 81 && vitorias <= 100) {
    nivel = "Diamante";
  } else if (vitorias >= 101 && vitorias <= 120) {
    nivel = "Mestre";
  } else if (vitorias >= 121 && vitorias <= 150) {
    nivel = "Grão-Mestre";
  } else {
    nivel = "Desafiante";
  }
  // Retornando o resultado
  return `O jogador tem o saldo de ${saldoVitorias} e está no nível ${nivel}`;
}
// Função principal para simular múltiplas partidas
function executarCalculo() {
  let continuar = true;
  while (continuar) {
    // Entrada de vitórias e derrotas
    let vitorias = parseInt(prompt("Quantas vitórias o jogador teve?"));
    let derrotas = parseInt(prompt("Quantas derrotas o jogador teve?"));
    // Chama a função para calcular o nível e exibe o resultado
    let resultado = calcularNivel(vitorias, derrotas);
    alert(resultado);
    // Pergunta ao usuário se deseja continuar
    continuar = confirm("Você deseja continuar?");
  }
}
// Executa o programa
executarCalculo();
