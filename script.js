/* ===== CÓDIGO JAVASCRIPT ===== */

// Seleciona o display e todos os botões
const display = document.querySelector("#display");
const butons = document.querySelectorAll(".buto");

// Variável que armazena o valor atual exibido no display
let currentInput = "";

// Percorre cada botão e adiciona o evento de clique
butons.forEach(botao => {
    botao.addEventListener("click", function () {
        const value = botao.value; // Captura o valor do botão clicado

        switch (value) { // Estrutura ideal para tratar múltiplas ações (mais limpa que vários if/else)

            case "C":
                // Limpa completamente o display
                currentInput = "";
                display.value = "";
                break;

            case "←":
                // Remove o último caractere do display
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
                break;

            case "=":
                // O bloco try/catch é usado como tratamento de erro — evita que a calculadora trave caso algo inesperado aconteça
                try {
                    // Verifica se a expressão contém apenas números, operadores e ponto decimal
                    if (/^[0-9+\-*/.() ]+$/.test(currentInput)) {
                        // Cria uma função que calcula a expressão e retorna o resultado como string
                        currentInput = new Function(`return ${currentInput}`)().toString();
                        display.value = currentInput; // Atualiza o display com o resultado
                    } else {
                        // Caso a expressão contenha algo inválido, exibe "ERRO"
                        display.value = "ERRO";
                        currentInput = "";
                    }
                } catch {
                    // Captura erros inesperados e mostra "ERRO" no display
                    display.value = "ERRO";
                    currentInput = "";
                }
                break;

            default:
                // Se não for nenhum dos casos acima, adiciona o valor clicado ao display
                currentInput += value;
                display.value = currentInput;
                break;
        }
    });
});