let carrinho = {};
let total = 0;
let totalItens = 0;

function addItem(nome, preco) {
    if (!carrinho[nome]) carrinho[nome] = 0;

    carrinho[nome]++;
    totalItens++;
    total += preco;

    document.getElementById("badge").innerText = totalItens;
}

function abrirCarrinho() {
    atualizarCarrinho();
    document.getElementById("carrinhoModal").style.display = "flex";
}

function fecharCarrinho() {
    document.getElementById("carrinhoModal").style.display = "none";
}

function atualizarCarrinho() {
    let texto = "";

    for (let item in carrinho) {
        texto += `${item}: ${carrinho[item]} unidade(s)\n`;
    }

    document.getElementById("lista").innerText = texto || "Carrinho vazio";
    document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
    if (total === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Pedido Giovana Cookies:%0A";
    for (let item in carrinho) {
        mensagem += `${item}: ${carrinho[item]} unidade(s)%0A`;
    }
    mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

    let numero = "5531971695989";

    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

function limparCarrinho() {
    carrinho = {};
    total = 0;
    totalItens = 0;

    document.getElementById("badge").innerText = 0;
    atualizarCarrinho();
}
