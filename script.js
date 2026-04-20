// Abrir e Fechar Modal
const modal = document.getElementById("modalSimulacao");
const btns = document.querySelectorAll(".open-modal");
const span = document.getElementsByClassName("close-modal")[0];

btns.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "block";
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Enviar formulário para o WhatsApp
document.getElementById("formSimulacao").onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const renda = document.getElementById("renda").value;
    
    const texto = `Olá Ingrid! Meu nome é ${nome}. Tenho interesse em uma simulação. Minha renda bruta é de aproximadamente R$ ${renda}.`;
    const url = `https://wa.me/5521997080209?text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
};