const calculadora= require('./calculadora.js');

test('Somar 1 + 2 = ', () => {
  expect(calculadora.soma(1, 2)).toBe(3);
});

test('Somar 1 + 2 = ', () => {
    expect(calculadora.dividir(4, 2)).toBe(2);
  });

  test('Somar 1 + 2 = ', () => {
    expect(calculadora.multiplicar(1, 2)).toBe(2);
  });
  
  test('Somar 1 + 2 = ', () => {
    expect(calculadora.subtracao(2, 2)).toBe(0);
  });