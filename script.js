let jogadores = {};

function adicionarNota() {
  let nome = document.getElementById("nome").value;
  let nota = parseFloat(document.getElementById("nota").value);

  if (!nome || isNaN(nota)) {
    alert("Preencha corretamente!");
    return;
  }

  if (!jogadores[nome]) {
    jogadores[nome] = [];
  }

  jogadores[nome].push(nota);

  atualizarLista();
  document.getElementById("nome").value = "";
  document.getElementById("nota").value = "";
}

function atualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let nome in jogadores) {
    let notas = jogadores[nome];
    let media = notas.reduce((a, b) => a + b, 0) / notas.length;

    let item = document.createElement("li");
    item.textContent = `${nome} - Média: ${media.toFixed(2)}`;

    lista.appendChild(item);
  }
}