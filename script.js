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

    if (elianeNode.style.display === "block") {
        elianeNode.style.display = "none";
        elianeLine.style.display = "none";
        children.style.display = "none";
    } else {
        elianeNode.style.display = "block";
        elianeLine.style.display = "block";
        children.style.display = "block";
    }
});

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

function openModal(name) {
    modalTitle.innerText = name;
    modalText.innerText = functionsData[name] || "Função não cadastrada.";
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// Fecha modal ao clicar no X ou fora do conteúdo
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

// Clique único/duplo para PC/Modal
document.querySelectorAll(".node").forEach(node => {
    let clickCount = 0;
    node.addEventListener("click", (e) => {
        clickCount++;
        const name = node.dataset.name;
        const sidebar = document.getElementById("sidebar");

        setTimeout(() => {
            if (clickCount === 1 && name) {
                if (window.innerWidth > 768) { // PC -> Sidebar
                    document.getElementById("sidebar-name").innerText = name;
                    document.getElementById("sidebar-function").innerText = functionsData[name];
                    sidebar.style.display = "block";
                } else { // Celular -> Modal
                    openModal(name);
                }
            } else if (clickCount === 2) { // Duplo clique fecha tudo
                sidebar.style.display = "none";
                closeModal();
            }
            clickCount = 0;
        }, 250);

        e.stopPropagation();
    });
});
