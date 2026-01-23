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
            "Participou: Natal Macabro"
        ]
    }
];

// 🔁 personagem do dia
const hoje = new Date().toISOString().split("T")[0];
const indice = hoje.replaceAll("-", "") % personagens.length;
const personagem = personagens[indice];
const resposta = personagem.nome;

let tentativaAtual = 0;
const maxTentativas = 6;
let entradaAtual = "";

const grade = document.getElementById("grade");
const mensagem = document.getElementById("mensagem");
const dicaTexto = document.getElementById("dica");
const imagem = document.getElementById("imagem");

criarGrade();
criarTeclado();
carregarProgresso();
verificarMeiaNoite();

// 🟦 GRADE
function criarGrade() {
    for (let l = 0; l < maxTentativas; l++) {
        const linha = document.createElement("div");
        linha.className = "linha-grade";

        for (let c = 0; c < 5; c++) {
            const div = document.createElement("div");
            div.className = "celula";
            linha.appendChild(div);
        }

        grade.appendChild(linha);
    }
}

// ⌨️ TECLADO
function criarTeclado() {
    const linhas = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

    linhas.forEach((linha, i) => {
        const div = document.createElement("div");
        div.className = "linha";

        if (i === 2) {
            div.innerHTML += `<button onclick="apagar()">⌫</button>`;
        }

        linha.split("").forEach(letra => {
            div.innerHTML += `<button onclick="clicarLetra('${letra}')">${letra}</button>`;
        });

        if (i === 2) {
            div.innerHTML += `<button onclick="enviar()">ENTER</button>`;
        }

        document.getElementById("teclado").appendChild(div);
    });
}

// ✍️ DIGITAÇÃO
function clicarLetra(letra) {
    if (entradaAtual.length < 5) {
        entradaAtual += letra;
        atualizarLinha();
    }
}

function apagar() {
    entradaAtual = entradaAtual.slice(0, -1);
    atualizarLinha();
}

function atualizarLinha() {
    const linha = grade.children[tentativaAtual];
    for (let i = 0; i < 5; i++) {
        linha.children[i].innerText = entradaAtual[i] || "";
    }
}

// ✅ ENVIAR
function enviar() {
    if (entradaAtual.length !== 5) return;

    const linha = grade.children[tentativaAtual];

    for (let i = 0; i < 5; i++) {
        const letra = entradaAtual[i];
        const caixa = linha.children[i];

        if (letra === resposta[i]) {
            caixa.classList.add("certo");
            marcarTecla(letra, "certo");
        } else if (resposta.includes(letra)) {
            caixa.classList.add("quase");
            marcarTecla(letra, "quase");
        } else {
            caixa.classList.add("errado");
            marcarTecla(letra, "errado");
        }
    }

    dicaTexto.innerText = personagem.dicas[tentativaAtual] || "";
    salvarProgresso();

    if (entradaAtual === resposta) {
        mensagem.innerText = "🎉 Você acertou!";
        imagem.src = `./imagens/${resposta.toLowerCase()}.png`;
        imagem.hidden = false;
        return;
    }

    tentativaAtual++;
    entradaAtual = "";

    if (tentativaAtual === maxTentativas) {
        mensagem.innerText = `❌ A resposta era ${resposta}`;
    }
}

// 🎨 TECLADO COLORIDO
function marcarTecla(letra, classe) {
    document.querySelectorAll("#teclado button").forEach(botao => {
        if (botao.innerText === letra) {
            if (botao.classList.contains("certo")) return;
            botao.className = classe;
        }
    });
}

// 💾 SALVAR
function salvarProgresso() {
    localStorage.setItem("progresso", JSON.stringify({
        data: hoje,
        tentativaAtual,
        grade: grade.innerHTML,
        dica: dicaTexto.innerText
    }));
}

function carregarProgresso() {
    const salvo = JSON.parse(localStorage.getItem("progresso"));
    if (!salvo || salvo.data !== hoje) return;

    tentativaAtual = salvo.tentativaAtual;
    grade.innerHTML = salvo.grade;
    dicaTexto.innerText = salvo.dica;
}

// ⏰ MEIA-NOITE
function verificarMeiaNoite() {
    setInterval(() => {
        const agora = new Date().toISOString().split("T")[0];
        if (agora !== hoje) {
            localStorage.clear();
            location.reload();
        }
    }, 1000);
}



