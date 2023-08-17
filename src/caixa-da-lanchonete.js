class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if(metodoDePagamento === "") {
            return "Forma de pagamento inválida!";
        }
        if(itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let total = 0;
        let itensPrincipais = [];
        let itensExtras = [];

        itens.forEach((item) => {
            const par = item.split(",");
            const codigo = par[0].toLowerCase();
            const quantidade = par[1];

            if(codigo === "") {
                return "Item inválido!";
            }
            if(quantidade === 0) {
                return "Quantidade inválida";
            }

            let preco = 0;
            if(codigo === "cafe") {
                preco = 3.00;
                itensPrincipais.push(codigo);
            } else if(codigo === "chantily") {
                preco = 1.5;
                itensExtras.push(codigo);
            } else if(codigo === "suco") {
                preco = 6.20;
                itensExtras.push(codigo);
                itensPrincipais.push(codigo);
            } else if(codigo === "sanduiche") {
                preco = 6.50;
                itensPrincipais.push(codigo);
            } else if(codigo === "queijo") {
                preco = 2.00;
                itensExtras.push(codigo);
            } else if(codigo === "salgado") {
                preco = 7.25;
                itensPrincipais.push(codigo);
            } else if(codigo === "combo1") {
                preco = 9.50;
                itensExtras.push(codigo);
            } else if(codigo === "combo2") {
                preco = 7.50;
                itensExtras.push(codigo);
            } else {
                return "Item Inválido!";
            }

            if(codigo === "chantily") {
                itensPrincipais.forEach((codigo) => {if(codigo === "cafe") return "Item extra não pode ser pedido sem o principal"});
            }

            if(codigo === "queijo") {
                itensPrincipais.forEach((codigo) => {if(codigo === "sanduiche") {return "Item extra não pode ser pedido sem o principal";}});
            }

            if(codigo === "combo1") {
                if(itensPrincipais.length === 0) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }

            if(codigo === "combo2") {
                if(itensPrincipais.length === 0) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }


            total += (preco * quantidade);

        });


        if(metodoDePagamento.toLowerCase() === "dinheiro") {
            return "R$ " + (total - (total * 0.05)).toFixed(2).toString().replace(".", ",");
        } else if (metodoDePagamento.toLowerCase() === "credito") {
            return "R$ " + (total * 1.03).toFixed(2).toString().replace(".", ",");
        } else if(metodoDePagamento.toLowerCase() === "debito") {
            return "R$ " + total.toFixed(2).toString().replace(".", ",");
        } else {
            return "Forma de pagamento inválida!";
        }

    }

}

export { CaixaDaLanchonete };

