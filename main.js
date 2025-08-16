// --- Alternar entre abas ---
const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // remover ativo dos outros
        document.querySelector(".botao.ativo").classList.remove("ativo");
        document.querySelector(".aba-conteudo.ativo").classList.remove("ativo");

        // ativar o clicado
        botao.classList.add("ativo");
        abas[indice].classList.add("ativo");
    });
});

// --- Contadores ---
function iniciarContador(id, dataAlvo) {
    function atualizar() {
        const agora = new Date().getTime();
        const tempoRestante = dataAlvo - agora;

        if (tempoRestante < 0) {
            document.getElementById(`dias${id}`).textContent = "0";
            document.getElementById(`horas${id}`).textContent = "0";
            document.getElementById(`min${id}`).textContent = "0";
            document.getElementById(`seg${id}`).textContent = "0";
            return;
        }

        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const seg = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        document.getElementById(`dias${id}`).textContent = dias;
        document.getElementById(`horas${id}`).textContent = horas;
        document.getElementById(`min${id}`).textContent = min;
        document.getElementById(`seg${id}`).textContent = seg;
    }

    atualizar(); // chamar logo na primeira vez
    setInterval(atualizar, 1000); // atualizar a cada segundo
}

// --- Defina aqui as datas dos objetivos ---
const datasObjetivos = [
    new Date("2025-09-15 18:00:00").getTime(), // Visita familiar
    new Date("2025-11-20 00:00:00").getTime(), // Meu aniversário
    new Date("2025-12-31 23:59:59").getTime(), // Encerramento do contrato
    new Date("2026-01-10 00:00:00").getTime()  // Aniversário do meu irmão
];

// --- Iniciar todos os contadores ---
datasObjetivos.forEach((data, i) => iniciarContador(i, data));
