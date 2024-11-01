const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarHeroi(xp) {
  if (xp >= 0 && xp <= 100) return 1;
  if (xp > 100 && xp <= 200) return 2;
  if (xp > 200 && xp <= 500) return 3;
  if (xp > 500 && xp <= 1000) return 4;
  return 5;
}

function perguntarXP() {
  readline.question("Digite a quantidade de pontos de experiência do herói: ", (input) => {
      let xp = parseInt(input);
      
      if (!isNaN(xp) && xp >= 0) {
          let nivel = classificarHeroi(xp);
          console.log(`O herói está no nível ${nivel} com ${xp} pontos de experiência.`);
      } else {
          console.log("Por favor, insira um número válido para os pontos de experiência.");
      }

      readline.question("Deseja classificar outro herói? (s/n): ", (resposta) => {
          if (resposta.toLowerCase() === 's') {
              perguntarXP();
          } else {
              console.log("Encerrando o programa.");
              readline.close();
          }
      });
  });
}
perguntarXP();