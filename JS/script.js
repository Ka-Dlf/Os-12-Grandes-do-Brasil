let indexAtual = 0;
const listaLogos = document.getElementById("lista-logos");
const caixaTexto = document.getElementById("caixa-texto");

clubes.forEach((clube, index) => {
  const li = document.createElement("li");
  li.classList.add("logo-item");
  if (index === 0) li.classList.add("ativo");

  li.innerHTML = `<img src="${clube.logo}" alt="${clube.nome}">`;

  li.addEventListener("click", () => {
    indexAtual = index;
    atualizarTela();
  });

  listaLogos.appendChild(li);
});

function atualizarTela() {
  const clube = clubes[indexAtual];

  caixaTexto.classList.add("esconder");

  setTimeout(() => {
    document.body.style.backgroundImage = `url('${clube.fundo}')`;

    document.getElementById("nome-clube").innerText = clube.nome;
    document.getElementById("resumo-curto").innerText = clube.resumoCurto;

    caixaTexto.classList.remove("esconder");
  }, 200);

  const itens = document.querySelectorAll(".logo-item");
  itens.forEach((item) => item.classList.remove("ativo"));
  itens[indexAtual].classList.add("ativo");

  itens[indexAtual].scrollIntoView({ behavior: "smooth", block: "center" });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    indexAtual = indexAtual < clubes.length - 1 ? indexAtual + 1 : 0;
    atualizarTela();
  } else if (e.key === "ArrowUp") {
    indexAtual = indexAtual > 0 ? indexAtual - 1 : clubes.length - 1;
    atualizarTela();
  } else if (e.key === "Enter") {
    window.location.href = `clube.html?id=${clubes[indexAtual].id}`;
  }
});

atualizarTela();
