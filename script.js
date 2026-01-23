/* ===================== CONFIG ===================== */

let modo = 1; // 1 = normal | 2 = dueto | 4 = quarteto
let respostas = [];
let grades = [];

const maxTentativas = 6;
let tentativaAtual = 0;
let entradaAtual = "";

const teclado = document.getElementById("teclado");
const container = document.getElementById("grade");
const mensagem = document.getElementById("mensagem");
const dica = document.getElementById("dica");

/* ===================== PERSONAGENS ===================== */

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
];

/* ===================== DIA ===================== */

function indiceDoDia() {
  const inicio = new Date("2024-01-01");
  const hoje = new Date();
  return Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
}

const indiceBase = indiceDoDia();

/* ===================== INICIAR ===================== */

function iniciarModo(qtd) {
  modo = qtd;
  respostas = [];
  grades = [];
  tentativaAtual = 0;
  entradaAtual = "";
  mensagem.innerText = "";
  dica.innerText = "";
  container.innerHTML = "";

  for (let i = 0; i < modo; i++) {
    const personagem = personagens[(indiceBase + i) % personagens.length];
    respostas.push(personagem.nome);
    criarGrade();
  }

  salvarProgresso();
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
  ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].forEach((linha, i) => {
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
