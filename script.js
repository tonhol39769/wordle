/* =======================
   CONFIG
======================= */
const TAMANHO = 5;
const MAX_TENTATIVAS = 6;
const hoje = new Date().toISOString().slice(0, 10);

let modo = 1;
let tentativaAtual = 0;
let entradaAtual = "";
let jogoEncerrado = false;

let respostas = [];
let grades = [];
let estadoTeclado = {};

/* =======================
   PERSONAGENS
======================= */
const personagens = [
     {
        nome: "DANTE",
        dicas: [
            "Personagem masculino",
            "Ocultista",
            "Ordo Realitas",
            "Participou: Desconjuração, Calamidade, SDOL e Hexatombe",
            "Vivo"
        ]
    },
    {
        nome: "BORIS",
        dicas: [
            "Personagem masculino",
            "Combatente",
            "Equipe Kian",
            "Participou: Calamidade",
            "Morto"
        ]
    },
    {
        nome: "ERIKA",
        dicas: [
            "Personagem feminina",
            "Ocultista",
            "Escripta",
            "Participou: Desconjuração",
            "Morta"
        ]
    },
    {
        nome: "JOREL",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "DALMO",
        dicas: [
            "Personagem masculino",
            "Combatente",
            "Mascarados",
            "Participou: Hexatombe",
            "Morto"
        ]
    },
     {
        nome: "JORGE",
        dicas: [
            "Personagem masculino",
            "Atleta",
            "Sobrevivente",
            "Participou: Natal Macabro",
            "Morto"
        ]
    },
     {
        nome: "BRENO",
        dicas: [
            "Personagem masculino",
            "Atleta",
            "Jogador de Basquete",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "BRUNO",
        dicas: [
            "Personagem masculino",
            "Ocultista",
            "Escripta",
            "Participou: Desconjuração",
            "Morto. Tem uma relação forte com o Kaiser"
        ]
    },
     {
        nome: "DIABO",
        dicas: [
            "Personagem sem sexo",
            "Sangue",
            "Participou: Calamidade e Hexatombe",
            "Reliquia",
            "Despertado"
        ]
    },
     {
        nome: "HENRI",
        dicas: [
            "Personagem masculino",
            "Ocultista",
            "Escripta (anteriormente)",
            "Participou: Desconjuração, Calamidade e Hexatombe",
            "Portador de Reliquia"
        ]
    },
     {
        nome: "CORVO",
        dicas: [
            "Personagem não-binario",
            "Ocultismo",
            "Passaros",
            "Participou: Hexatombe",
            "Morto"
        ]
    },
     {
        nome: "TORVO",
        dicas: [
            "Personagem masculino",
            "Ocultista",
            "Couraças",
            "Participou: Hexatombe",
            "Morto"
        ]
    },
     {
        nome: "POMBA",
        dicas: [
            "Personagem masculino",
            "Cartógrafo",
            "Passaros",
            "Participou: Hexatombe",
            "Desconhecido"
        ]
    },
     {
        nome: "AMORA",
        dicas: [
            "Personagem feminina",
            "Criança",
            "Participou: Segredo na Ilha",
            "Morta"
        ]
    },
     {
        nome: "JASER",
        dicas: [
            "Personagem masculino",
            "Medo",
            "Olhos iguais",
            "Participou: Enigma do Medo",
            "Inexistente"
        ]
    },
     {
        nome: "NANDO",
        dicas: [
            "Personagem masculino",
            "Portador de Reliquia (anteriormente)",
            "Participou: Hexatombe",
            "Morto"
        ]
    },
     {
        nome: "MOSTO",
        dicas: [
            "Personagem masculino",
            "Lutador",
            "Segurança",
            "Participou: Hexatombe",
            "Morto"
        ]
    },
     {
        nome: "BARTO",
        dicas: [
            "Personagem masculino",
            "Pescador",
            "Participou: Segredo na Ilha",
            "Morto"
        ]
    },
     {
        nome: "CAITO",
        dicas: [
            "Personagem masculino",
            "Portador de Reliquia (anteriormente)",
            "Personalidade: Mimado",
            "Participou: Hexatombe",
            "Morto"
        ]
    },
     {
        nome: "GAMBA",
        dicas: [
            "Personagem masculino",
            "Animal",
            "Escripta",
            "Participou: Calamidade",
            "Morto"
        ]
    },
     {
        nome: "CALEB",
        dicas: [
            "Personagem masculino",
            "Habilidoso com tecnologia",
            "Escripta",
            "Participou: Calamidade",
            "Morto"
        ]
    },
     {
        nome: "DAGAN",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "CESAR",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "JOVAN",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "CINDY",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "CHLOE",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "DANIEL",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "DARIO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "ENPAP",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "GAIUS",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "IVETE",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "JOANA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "JASON",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "KLAUS",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "LAYLA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "AARON",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "LUCIO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "LIRIO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "LUCIA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "MANDY",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "XANDE",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "CHICO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "DIEGO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "RENAN",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "NAOMI",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "KENAN",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "MARCO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "CHLOE",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "KAREN",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "RYDER",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "ORIEL",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "OLAVO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "ALICE",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "JULIA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "MANDY",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "BRIAN",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "LUCAS",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "MARLI",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "MATEO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "GRAÇA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "LEILA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "MAIRA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "NAVIA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "PEDRO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "VITOR",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "VILMO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "DIEGO",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "ALICE",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    },
     {
        nome: "LAILA",
        dicas: [
            "Personagem masculino",
            "Ator",
            "Artista",
            "Participou: Natal Macabro",
            "Vivo"
        ]
    }
];

/* =======================
   INIT
======================= */
document.addEventListener("DOMContentLoaded", () => {
  verificarDia();
  criarTeclado();
  iniciarModo(1);
});

/* =======================
   MODO
======================= */
function iniciarModo(qtd) {
  modo = qtd;
  tentativaAtual = 0;
  entradaAtual = "";
  jogoEncerrado = false;

  respostas = [];
  grades = [];
  estadoTeclado = {};

  document.getElementById("grade").innerHTML = "";
  document.getElementById("mensagem").innerText = "";
  document.getElementById("dica").innerText = "";

  const seed = parseInt(hoje.replace(/-/g, ""));
  const base = seed % personagens.length;

  for (let i = 0; i < modo; i++) {
    respostas.push(personagens[(base + i) % personagens.length].nome);
    criarGrade();
  }

  atualizarTeclado();
  salvarProgresso();
}

/* =======================
   GRADE
======================= */
function criarGrade() {
  const bloco = document.createElement("div");
  bloco.className = "bloco";

  for (let l = 0; l < MAX_TENTATIVAS; l++) {
    const linha = document.createElement("div");
    linha.className = "linha-grade";

    for (let c = 0; c < TAMANHO; c++) {
      const celula = document.createElement("div");
      celula.className = "celula";
      linha.appendChild(celula);
    }

    bloco.appendChild(linha);
  }

  document.getElementById("grade").appendChild(bloco);
  grades.push(bloco);
}

/* =======================
   TECLADO
======================= */
function criarTeclado() {
  const layout = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  const teclado = document.getElementById("teclado");
  teclado.innerHTML = "";

  layout.forEach((linha, i) => {
    const div = document.createElement("div");

    if (i === 2) div.innerHTML += `<button class="key special" onclick="enviar()">ENTER</button>`;

    linha.split("").forEach(l =>
      div.innerHTML += `<button class="key" onclick="digitar('${l}')">${l}</button>`
    );

    if (i === 2) div.innerHTML += `<button class="key special" onclick="apagar()">⌫</button>`;

    teclado.appendChild(div);
  });
}

/* =======================
   INPUT
======================= */
function digitar(letra) {
  if (jogoEncerrado || entradaAtual.length >= TAMANHO) return;

  grades.forEach(bloco => {
    bloco.children[tentativaAtual].children[entradaAtual.length].innerText = letra;
  });

  entradaAtual += letra;
}

function apagar() {
  if (jogoEncerrado || entradaAtual.length === 0) return;

  entradaAtual = entradaAtual.slice(0, -1);

  grades.forEach(bloco => {
    bloco.children[tentativaAtual].children[entradaAtual.length].innerText = "";
  });
}

/* =======================
   ENVIAR
======================= */
function enviar() {
  if (entradaAtual.length !== TAMANHO) return shake();

  if (!personagens.some(p => p.nome === entradaAtual)) return shake();

  let acertos = 0;

  grades.forEach((bloco, idx) => {
    const resposta = respostas[idx];
    const linha = bloco.children[tentativaAtual];

    [...entradaAtual].forEach((letra, i) => {
      const celula = linha.children[i];
      celula.classList.add("flip");

      setTimeout(() => {
        if (letra === resposta[i]) {
          celula.classList.add("certo");
          marcarTecla(letra, "certo");
        } else if (resposta.includes(letra)) {
          celula.classList.add("quase");
          marcarTecla(letra, "quase");
        } else {
          celula.classList.add("errado");
          marcarTecla(letra, "errado");
        }
      }, i * 120);
    });

    if (entradaAtual === resposta) acertos++;
  });

  atualizarTeclado();
  mostrarDica();

  if (acertos === modo) {
    document.getElementById("mensagem").innerText = "🎉 VOCÊ ACERTOU!";
    jogoEncerrado = true;
    salvarProgresso(true);
    return;
  }

  tentativaAtual++;
  entradaAtual = "";

  if (tentativaAtual >= MAX_TENTATIVAS) {
    document.getElementById("mensagem").innerText = "❌ Fim de jogo";
    jogoEncerrado = true;
  }

  salvarProgresso(false);
}

/* =======================
   DICAS
======================= */
function mostrarDica() {
  const personagem = personagens.find(p => p.nome === respostas[0]);
  const dica = personagem?.dicas[tentativaAtual - 1];
  if (dica) document.getElementById("dica").innerText = "🕯️ " + dica;
}

/* =======================
   TECLADO CORES
======================= */
function marcarTecla(letra, estado) {
  const prioridade = { certo: 3, quase: 2, errado: 1 };
  if (!estadoTeclado[letra] || prioridade[estado] > prioridade[estadoTeclado[letra]]) {
    estadoTeclado[letra] = estado;
  }
}

function atualizarTeclado() {
  document.querySelectorAll(".key").forEach(btn => {
    btn.classList.remove("certo", "quase", "errado");
    const l = btn.innerText;
    if (estadoTeclado[l]) btn.classList.add(estadoTeclado[l]);
  });
}

/* =======================
   SHAKE
======================= */
function shake() {
  document.querySelectorAll(".linha-grade")[tentativaAtual]?.classList.add("shake");
  setTimeout(() =>
    document.querySelectorAll(".linha-grade")[tentativaAtual]?.classList.remove("shake")
  , 400);
}

/* =======================
   STORAGE
======================= */
function salvarProgresso(ganhou = false) {
  localStorage.setItem("paranordle", JSON.stringify({
    data: hoje,
    tentativaAtual,
    ganhou
  }));
}

function verificarDia() {
  const salvo = JSON.parse(localStorage.getItem("paranordle"));
  if (salvo && salvo.data !== hoje) localStorage.removeItem("paranordle");
}
