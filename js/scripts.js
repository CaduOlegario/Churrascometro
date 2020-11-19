let acao = document.querySelector("#acao");
let adultos = document.querySelector("#adultos");
let criancas = document.querySelector("#criancas");
let duracao = document.querySelector("#duracao");
let resultado = document.querySelector("#resultado");

acao.addEventListener("click", () => {
  let qtdeAdultos = adultos.value;
  let qtdeCriancas = criancas.value;
  let qtdeDuracao = duracao.value;
  let carne;
  let cerveja;
  let refrigerante;

  if (qtdeDuracao >= 6) {
    carne = 400;
    cerveja = 1200;
    refrigerante = 1000;
  } else {
    carne = 650;
    cerveja = 2000;
    refrigerante = 1500;
  }

  if (carne > 0 && cerveja > 0 && refrigerante > 0) {
    let qtdeTlCarne = carne * qtdeAdultos + (carne / 2) * qtdeCriancas;
    let qtdeTlCerveja = cerveja * qtdeAdultos;
    let qtdeTlRefrigerante = (refrigerante / 2) * qtdeCriancas;
    console.log(qtdeTlCarne, qtdeTlCerveja, qtdeTlRefrigerante);
    resultado.innerHTML =
      "<h4>Resultados</h4><p>" +
      qtdeTlCarne / 1000 +
      " Kg de Carne.</p><p>" +
      Math.ceil(qtdeTlCerveja / 355) +
      " Latas de Cerveja.</p><p>" +
      Math.ceil(qtdeTlRefrigerante / 2000) +
      " Garrafas de Refrigerante.</p>";
  }
});
