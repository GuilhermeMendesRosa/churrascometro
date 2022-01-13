
var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("crianças");
var inputDuracao = document.getElementById("duracao");

var resultado = document.getElementById("resultado");

function calcular () {
    console.log("Calculando...");
    
    let qtdTotalCarne = 0;
    let qtdTotalCerveja = 0;
    let qtdTotalRefri = 0;

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    qtdTotalCarne = carnePorPessoa(duracao) * adultos + carnePorPessoa(duracao) / 2 * criancas;
    qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    qtdTotalRefri = refriPorPessoa(duracao) * adultos + refriPorPessoa(duracao) / 2 * criancas;

    console.log(qtdTotalCarne / 1000 + "kg");
    console.log(qtdTotalCerveja / 1000 + " litros");
    console.log(qtdTotalRefri / 1000 + " litros");

    resultado.innerHTML = `<p> ${qtdTotalCarne / 1000}kg de carne<p/>`
    resultado.innerHTML += `<p> ${qtdTotalCerveja / 1000} litros de cerveja<p/>`
    resultado.innerHTML += `<p> ${qtdTotalRefri / 1000} litros de refrigerante<p/>`


}

function carnePorPessoa (duracao) {

    if (duracao < 0) {
        alert("Valor Inválido!")
    }

    else if (duracao >= 6) {
        return 650;
    }  

    else {
        return 400;
    }

}

function cervejaPorPessoa (duracao) {

    if (duracao >= 6) {
        return 1200;
    }

    else {
        return 2000;
    }

}

function refriPorPessoa (duracao) {

    if (duracao >= 6) {
        return 1000;
    }

    else {
        return 1500;
    }

}
