document.addEventListener("DOMContentLoaded", function() {
    // Obtém a referência para o elemento que exibe a quantidade
    var quantidadeElemento = document.getElementById("quantidade");

    // Obtém as referências para as imagens de plus e minus
    var plusElemento = document.querySelector(".acoes .plus");
    var minusElemento = document.querySelector(".acoes .minus");

    // Define um evento de clique para a imagem de plus
    plusElemento.addEventListener("click", function() {
        // Obtém o valor atual da quantidade
        var quantidade = parseInt(quantidadeElemento.textContent);
        // Incrementa a quantidade
        quantidade++;
        // Atualiza o texto do elemento com a nova quantidade
        quantidadeElemento.textContent = quantidade;
    });

    // Define um evento de clique para a imagem de minus
    minusElemento.addEventListener("click", function() {
        // Obtém o valor atual da quantidade
        var quantidade = parseInt(quantidadeElemento.textContent);
        // Verifica se a quantidade é maior que zero para evitar valores negativos
        if (quantidade > 0) {
            // Decrementa a quantidade
            quantidade--;
            // Atualiza o texto do elemento com a nova quantidade
            quantidadeElemento.textContent = quantidade;
        }
    });
});
