const calculo = require('./calculo.js');


/// Teste de gasolina

test('Distancia : 100km , 1 litro de Gasolina: 16 Km', () => {
  expect(calculo.Calc(100, 'gasolina')).toBe(7); /// Para rodar 100 km, voce precisa de 7 litros de gasolina.
});

///Teste de alcool
test('Distancia : 100km , 1 Litro de Alcool : 11 km', () => {
  expect(calculo.Calc(100, 'alcool')).toBe(10 ); /// Para rodar 100 km, voce precisa de 10 litros de alccol 
});

///Teste nome errado, gasolina
test('Nome errado, Distancia : 100 , 1 Litro de gasolina : 16 km', () => {
  expect(calculo.Calc(100, 'gasolin')).toBe('Parametro errado, digite o nome certo'); // Erro nome de chamada errado 
});

/// Teste numero negativo
test('Numero negativo , Distancia : - 100 , 1 Litro de Alcool : 11 km', () => {
  expect(calculo.Calc(-100, 'gnpm run testasolina')).toBe('Parametro errado, voce deve colocar um  numero positivo'); /// Erro numero negativo
});