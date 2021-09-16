const ContaBancaria = require('./index')

const contaDoBanco = new ContaBancaria()

console.log(contaDoBanco.verificarSaldo('Salomão Santos', 0001, 0132745, 1500))
console.log(contaDoBanco.deposito(200))
console.log(contaDoBanco.saque(100))
