document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação simples
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos!');
        } else {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            form.reset(); // Limpa o formulário
        }
    });
});