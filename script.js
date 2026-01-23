let modo = 1; // 1 = normal | 2 = dueto | 4 = quarteto
let respostas = [];
let grades = [];

const personagens = [
  { nome: "DANTE", dicas: ["Masculino","Ocultista","Ordo","Vivo",""] },
  { nome: "BORIS", dicas: ["Masculino","Combatente","Kian","Morto",""] },
  { nome: "ERIKA", dicas: ["Feminina","Ocultista","Escripta","Morta",""] },
  { nome: "JOREL", dicas: ["Masculino","Ator","Natal","Vivo",""] },
  { nome: "DALMO", dicas: ["Masculino","Combatente","Mascarados","Morto",""] }
];

const hoje = new Date().toISOString().split("T")[0];
const indiceBase = Number(hoje.replaceAll("-", ""));

let tentativaAtual = 0;
const maxTentativas = 6;
let entradaAtual = "";

const teclado = document.getElementById("teclado");
const container = document.getElementById("grade");
const mensagem = document.getElementById("mensagem");

/* ===================== INÍCIO ===================== */

function iniciarModo(qtd) {
  modo = qtd;
  respostas = [];
  grades = [];
  tentativaAtual = 0;
  entradaAtual = "";
  mensagem.innerText = "";
  container.innerHTML = "";

  for (let i = 0; i < modo; i++) {
    const personagem = personagens[(indiceBase + i) % personagens.length];
    respostas.push(personagem.nome);
    criarGrade();
  }
}

/* ===================== GRADE ===================== */

function criarGrade() {
  const bloco = document.createElement("div");
  bloco.className = "bloco";

  for (let l = 0; l < maxTentativas; l++) {
    const linha = document.createElement("div");
    linha.className = "linha-grade";

    for (let c = 0; c < 5; c++) {
      const celula = document.createElement("div");
      celula.className = "celula";
      linha.appendChild(celula);
    }
    bloco.appendChild(linha);
  }

  container.appendChild(bloco);
  grades.push(bloco);
}

/* ===================== TECLADO ===================== */

function criarTeclado() {
  teclado.innerHTML = "";
  ["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"].forEach((linha, i) => {
    const div = document.createElement("div");

    if (i === 2) div.innerHTML += `<button onclick="apagar()">⌫</button>`;

    linha.split("").forEach(l =>
      div.innerHTML += `<button onclick="clicarLetra('${l}')">${l}</button>`
    );

    if (i === 2) div.innerHTML += `<button onclick="enviar()">ENTER</button>`;

    teclado.appendChild(div);
  });
}

/* ===================== DIGITAÇÃO ===================== */

function clicarLetra(l) {
  if (entradaAtual.length < 5) {
    entradaAtual += l;
    atualizarLinha();
  }
}

function apagar() {
  entradaAtual = entradaAtual.slice(0, -1);
  atualizarLinha();
}

function atualizarLinha() {
  grades.forEach(bloco => {
    const linha = bloco.children[tentativaAtual];
    for (let i = 0; i < 5; i++) {
      linha.children[i].innerText = entradaAtual[i] || "";
    }
  });
}

/* ===================== ENVIAR ===================== */

function enviar() {
  if (entradaAtual.length !== 5) return;

  let acertos = 0;

  grades.forEach((bloco, idx) => {
    const resposta = respostas[idx];
    const linha = bloco.children[tentativaAtual];

    for (let i = 0; i < 5; i++) {
      const letra = entradaAtual[i];
      const celula = linha.children[i];

      if (letra === resposta[i]) {
        celula.classList.add("certo");
      } else if (resposta.includes(letra)) {
        celula.classList.add("quase");
      } else {
        celula.classList.add("errado");
      }
    }

    if (entradaAtual === resposta) acertos++;
  });

  if (acertos === modo) {
    mensagem.innerText = "🎉 VOCÊ ACERTOU TODAS!";
    return;
  }

  tentativaAtual++;
  entradaAtual = "";

  if (tentativaAtual === maxTentativas) {
    mensagem.innerText = "❌ Fim de jogo!";
  }
}

/* ===================== START ===================== */

criarTeclado();
iniciarModo(1); // troca para 2 ou 4
