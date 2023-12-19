function verificarResposta() {
    var resposta = document.getElementById("enigma-answer").value.toLowerCase();
    console.log("Resposta digitada:", resposta); // Adicione esta linha para depuração

    // Converte a resposta para minúsculas
    resposta = resposta.toLowerCase();

    if (resposta === "Dias de ira") {
        // Resposta correta - ir para o próximo nível (nivel5.html)
        window.location.href = "fase11.html";
    } else {
        // Resposta incorreta - animação e tela preta
        console.log("Resposta incorreta"); // Adicione esta linha para depuração
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
