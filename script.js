/* =======================
   CONFIGURAÇÕES GERAIS
======================= */
const TAMANHO = 5;
const MAX_TENTATIVAS = 6;

const hoje = new Date().toISOString().slice(0, 10);

let modo = "normal";
let palavraSecreta = "";
let tentativaAtual = 0;
let colunaAtual = 0;
let jogoEncerrado = false;

let grade = [];
let respostas = [];
let estadoTeclado = {};

/* =======================
   PERSONAGENS + DICAS
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
   INÍCIO
======================= */
document.addEventListener("DOMContentLoaded", () => {
  criarTeclado();
  verificarDia();
  carregarProgresso();
  iniciarModo("normal");
});

/* =======================
   MODO DE JOGO
======================= */
function iniciarModo(novoModo) {
  modo = novoModo;
  tentativaAtual = 0;
  colunaAtual = 0;
  jogoEncerrado = false;
  grade = [];
  respostas = [];
  estadoTeclado = {};

  document.getElementById("mensagem").innerText = "";
  document.getElementById("dica").innerHTML = "";

  gerarPalavra();
  criarGrade();
  atualizarTeclado();
}

/* =======================
   PALAVRA DO DIA
======================= */
function gerarPalavra() {
  const seed = parseInt(hoje.replace(/-/g, ""));
  const index = seed % personagens.length;
  palavraSecreta = personagens[index].nome;
}

/* =======================
   GRADE
======================= */
function criarGrade() {
  const container = document.getElementById("grade");
  container.innerHTML = "";

  for (let i = 0; i < MAX_TENTATIVAS; i++) {
    const linha = [];
    const row = document.createElement("div");
    row.className = "linha";

    for (let j = 0; j < TAMANHO; j++) {
      const box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
      linha.push(box);
    }

    grade.push(linha);
    container.appendChild(row);
  }
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

    if (i === 2) {
      div.innerHTML += `<button class="key special" onclick="enviar()">ENTER</button>`;
    }

    linha.split("").forEach(letra => {
      div.innerHTML += `<button class="key" onclick="digitar('${letra}')">${letra}</button>`;
    });

    if (i === 2) {
      div.innerHTML += `<button class="key special" onclick="apagar()">⌫</button>`;
    }

    teclado.appendChild(div);
  });
}

/* =======================
   INPUT
======================= */
function digitar(letra) {
  if (jogoEncerrado || colunaAtual >= TAMANHO) return;

  grade[tentativaAtual][colunaAtual].innerText = letra;
  colunaAtual++;
}

function apagar() {
  if (jogoEncerrado || colunaAtual === 0) return;

  colunaAtual--;
  grade[tentativaAtual][colunaAtual].innerText = "";
}

function enviar() {
  if (jogoEncerrado || colunaAtual < TAMANHO) {
    animarShake(tentativaAtual);
    return;
  }

  let tentativa = grade[tentativaAtual].map(b => b.innerText).join("");

  if (!personagens.some(p => p.nome === tentativa)) {
    animarShake(tentativaAtual);
    return;
  }

  validarTentativa(tentativa);
}

/* =======================
   VALIDAÇÃO
======================= */
function validarTentativa(tentativa) {
  let resultado = Array(TAMANHO).fill("errado");
  let usada = palavraSecreta.split("");

  for (let i = 0; i < TAMANHO; i++) {
    if (tentativa[i] === palavraSecreta[i]) {
      resultado[i] = "correto";
      usada[i] = null;
    }
  }

  for (let i = 0; i < TAMANHO; i++) {
    if (resultado[i] === "correto") continue;
    const idx = usada.indexOf(tentativa[i]);
    if (idx !== -1) {
      resultado[i] = "presente";
      usada[idx] = null;
    }
  }

  aplicarResultado(resultado, tentativa);
}

/* =======================
   RESULTADO
======================= */
function aplicarResultado(resultado, tentativa) {
  resultado.forEach((res, i) => {
    grade[tentativaAtual][i].classList.add(res);
    atualizarEstadoTeclado(tentativa[i], res);
  });

  atualizarTeclado();

  if (tentativa === palavraSecreta) {
    jogoEncerrado = true;
    document.getElementById("mensagem").innerText = "🎉 Você acertou!";
    salvarProgresso(true);
    return;
  }

  tentativaAtual++;
  colunaAtual = 0;

  mostrarDica();

  if (tentativaAtual >= MAX_TENTATIVAS) {
    jogoEncerrado = true;
    document.getElementById("mensagem").innerText = `❌ Era ${palavraSecreta}`;
  }

  salvarProgresso(false);
}

/* =======================
   DICAS
======================= */
function mostrarDica() {
  const personagem = personagens.find(p => p.nome === palavraSecreta);
  const dica = personagem.dicas[tentativaAtual - 1];
  if (dica) {
    document.getElementById("dica").innerHTML = `🕯️ ${dica}`;
  }
}

/* =======================
   TECLADO CORES
======================= */
function atualizarEstadoTeclado(letra, estado) {
  const prioridade = { correto: 3, presente: 2, errado: 1 };
  if (!estadoTeclado[letra] || prioridade[estado] > prioridade[estadoTeclado[letra]]) {
    estadoTeclado[letra] = estado;
  }
}

function atualizarTeclado() {
  document.querySelectorAll(".key").forEach(btn => {
    const l = btn.innerText;
    btn.classList.remove("correto", "presente", "errado");
    if (estadoTeclado[l]) btn.classList.add(estadoTeclado[l]);
  });
}

/* =======================
   ANIMAÇÕES
======================= */
function animarShake(linha) {
  const row = document.querySelectorAll(".linha")[linha];
  row.classList.add("shake");
  setTimeout(() => row.classList.remove("shake"), 400);
}

/* =======================
   SALVAR / CARREGAR
======================= */
function salvarProgresso(ganhou) {
  const dados = {
    data: hoje,
    tentativas: tentativaAtual,
    ganhou
  };
  localStorage.setItem("paranordle", JSON.stringify(dados));
}

function carregarProgresso() {
  const salvo = JSON.parse(localStorage.getItem("paranordle"));
  if (!salvo || salvo.data !== hoje) return;
}

/* =======================
   RESET DIÁRIO
======================= */
function verificarDia() {
  const salvo = JSON.parse(localStorage.getItem("paranordle"));
  if (salvo && salvo.data !== hoje) {
    localStorage.removeItem("paranordle");
  }
}
