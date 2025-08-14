// Funções dos colaboradores
const functionsData = {
    "Eliane": "Responsável pela direção geral e decisões estratégicas.",
    "Fagner": "Responsável pela manutenção e suporte técnico da rede e sistemas internos.",
    "Pss": "Atua no suporte e manutenção de equipamentos, além de gerenciar a rede.",
    "João": "Auxilia nas tarefas de suporte técnico e organização de equipamentos.",
    "Jonas": "Auxilia no atendimento de chamados e suporte aos usuários."
};

// Toggle do organograma
const toggleNode = document.getElementById("toggle-organograma");
toggleNode.addEventListener("click", () => {
    const elianeNode = document.getElementById("eliane");
    const elianeLine = document.getElementById("eliane-line");
    const children = document.getElementById("all-children");

    if(elianeNode.style.display === "none") {
        elianeNode.style.display = "block";
        elianeLine.style.display = "block";
        children.style.display = "block";
    } else {
        elianeNode.style.display = "none";
        elianeLine.style.display = "none";
        children.style.display = "none";
    }
});

// Clique único abre sidebar, duplo fecha
document.querySelectorAll(".node").forEach(node => {
    let clickCount = 0;
    node.addEventListener("click", (e) => {
        clickCount++;
        const name = node.dataset.name;
        const sidebar = document.getElementById("sidebar");

        setTimeout(() => {
            if(clickCount === 1 && name) {
                document.getElementById("sidebar-name").innerText = name;
                document.getElementById("sidebar-function").innerText = functionsData[name] || "Função não cadastrada.";
                sidebar.style.display = "block";
            } else if(clickCount === 2) {
                sidebar.style.display = "none";
            }
            clickCount = 0;
        }, 250);
        e.stopPropagation();
    });
});
