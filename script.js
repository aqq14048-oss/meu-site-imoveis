document.addEventListener("DOMContentLoaded", function() {
    
    const modal = document.getElementById("modalSimulacao");
    const form = document.getElementById("formSimulacao");

    // Funções de abrir e fechar (Globais)
    window.abrirModal = function() {
        if(modal) modal.style.display = "block";
    }

    window.fecharModal = function() {
        if(modal) modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) fecharModal();
    }

    // Lógica de Envio
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Captura os dados dos campos pelo ID
            const nome = document.getElementById("nome").value;
            const renda = document.getElementById("renda").value;
            const telefoneCliente = document.getElementById("telefone").value;

            // Monta o texto da mensagem
            const mensagem = `Olá! Acabei de preencher o formulário no site:\n\n` +
                             `*Nome:* ${nome}\n` +
                             `*Renda:* R$ ${renda}\n` +
                             `*WhatsApp do Cliente:* ${telefoneCliente}`;

            // --- INSIRA SEU NÚMERO ABAIXO ---
            const meuWhatsapp = "5521997080209"; // Ex: 55 + DDD + Numero
            
            const urlFinal = `https://wa.me/${5521997080209}?text=${encodeURIComponent(mensagem)}`;

            // Abre o WhatsApp em uma nova aba
            window.open(urlFinal, "_blank");
            
            // Fecha o modal após enviar
            fecharModal();
        });
    }
});