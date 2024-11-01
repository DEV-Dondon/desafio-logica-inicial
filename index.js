// Função para classificar o nível do herói
function classificarHeroi(xp) {
  let nivel;

  if (xp >= 0 && xp <= 100) {
      nivel = 1;
  } else if (xp > 100 && xp <= 200) {
      nivel = 2;
  } else if (xp > 200 && xp <= 500) {
      nivel = 3;
  } else if (xp > 500 && xp <= 1000) {
      nivel = 4;
  } else {
      nivel = 5;
  }

  return nivel;
}

// Laço de repetição para classificar múltiplos heróis
let continuar = true;

while (continuar) {
  let xp = parseInt(prompt("Digite a quantidade de pontos de experiência do herói: "));

  if (!isNaN(xp) && xp >= 0) {
      let nivel = classificarHeroi(xp);
      console.log(`O herói está no nível ${nivel} com ${xp} pontos de experiência.`);
  } else {
      console.log("Por favor, insira um número válido para os pontos de experiência.");
  }

  continuar = confirm("Deseja classificar outro herói?");
}
