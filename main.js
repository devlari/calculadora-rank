function calcularNivel() {
    const win = document.getElementById('win').value;
    const lose = document.getElementById('lose').value;

    const saldo  = calcularSaldo(win, lose);
    const rank = calcularRank(saldo);

    document.getElementById('result').innerText = `O herói tem de saldo de ${saldo} está no nível ${rank}`;

}

function calcularSaldo(win, lose) {
    return win - lose;
}

function calcularRank(saldo) {
    if (saldo < 10) {
        return 'Ferro';
    }

    if (saldo <= 20) {
        return 'Bronze';
    }

    if (saldo <= 50) {
        return 'Prata';
    }

    if (saldo <= 80) {
        return 'Ouro';
    }

    if (saldo <= 90) {
        return 'Diamante';
    }

    if (saldo <= 100) {
        return 'Lendário';
    }

    return "Imortal";
}