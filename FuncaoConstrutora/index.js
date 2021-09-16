function ContaBancaria() {
  ;(this.nomeCompleto = 'Salomão Santos'),
    (this.numeroAgencia = 2411),
    (this.numeroConta = 19841982),
    (this.saldoAtual = 1500),
    //ATIVIDADE II

    (this.verificarSaldo = function () {
      return `Seu saldo é de R$ ${this.saldoAtual}`
    }),
    (this.deposito = function (valorDeposito) {
      this.saldoAtual += valorDeposito
      return `Agora seu saldo atual é de R$ ${this.saldoAtual}`
    }),
    (this.saque = function (valorSaque) {
      if (valorSaque <= this.saldoAtual) {
        this.saldoAtual -= valorSaque
        return `Você realizou um saque de R$ ${valorSaque}. Agora seu saldo atual é R$ ${this.saldoAtual}`
      } else {
        return `Saldo insuficiente. Seu saldo atual é de R$ ${this.saldoAtual}`
      }
    })
}

module.exports = ContaBancaria
