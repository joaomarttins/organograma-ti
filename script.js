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

// Seleciona modal e elementos
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

// Quando clicar em um node, abre modal
document.querySelectorAll(".node").forEach(node => {
    node.addEventListener("click", (e) => {
        const name = node.dataset.name;
        if(name){ // só abre modal se tiver nome
            modalTitle.innerText = name;
            modalText.innerText = functionsData[name] || "Função não cadastrada.";
            modal.style.display = "flex";
        }
    });
});

// Fecha modal ao clicar no X
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha modal ao clicar fora do conteúdo
modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});

// Fecha modal ao apertar a tecla "Esc"
document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        modal.style.display = "none";
    }
});
