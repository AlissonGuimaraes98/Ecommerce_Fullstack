document.addEventListener("DOMContentLoaded", function() {

    //define a referencia de onde vaificar a quantidade e as imagens de menos e mais
    var quantidadeElemento = document.getElementById("quantidade");
    var plusElemento = document.querySelector(".acoes .plus");
    var minusElemento = document.querySelector(".acoes .minus");

    // define click nas imagens
    plusElemento.addEventListener("click", function() {
        
        var quantidade = parseInt(quantidadeElemento.textContent);
        
        quantidade++;
        
        quantidadeElemento.textContent = quantidade;
    });

    minusElemento.addEventListener("click", function() {
        
        var quantidade = parseInt(quantidadeElemento.textContent);
        
        if (quantidade > 0) {
            
            quantidade--;
            
            quantidadeElemento.textContent = quantidade;
        }
    });
});
