function verificarResposta() {
    var resposta = document.getElementById("enigma-answer").value.toLowerCase();

    // Converte a resposta para minúsculas
    resposta = resposta.toLowerCase();
    
    if (resposta === "expulsou") {
        // Resposta correta - ir para o próximo nível (nivel3.html)
        window.location.href = "fase4.html";
    } else {
        // Resposta incorreta - animação e tela preta
        document.getElementById("enigma-container").classList.add("incorrect-answer");
        document.body.style.backgroundColor = "black";

        // Reinicia a animação de erro
        setTimeout(function() {
            document.getElementById("enigma-container").classList.remove("incorrect-answer");
        }, 500);
    }
}
// Adiciona um evento de escuta ao elemento input
document.getElementById("enigma-answer").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        // Verifica a resposta do usuário
        verificarResposta();
    }
});

