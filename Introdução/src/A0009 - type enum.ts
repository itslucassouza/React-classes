enum Cores{
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolaUmaCor(cor: Cores): void {
  console.log(Cores[cor]);
}



escolaUmaCor(150);



