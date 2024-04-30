
import { pegarProdutos } from "./data.js";

const listaProdutos = document.getElementById("lista-produtos")

const init = async () => {
    const produtos = await pegarProdutos()

    produtos.forEach(produto => {
        renderizarProduto(produto)
    })
}

const renderizarProduto = (produto) => {

    const article = document.createElement("article")
    article.classList.add("produto")

    // imagem
    const img = document.createElement("img")
    img.src = `http://localhost/marcas-api/static-files/${produto.url_image}`

    // detalhes
    const div = document.createElement("div")

    const spanCategoria = document.createElement("span")
    spanCategoria.classList.add("categoria")
    spanCategoria.innerText = produto.categoria

    const spanNome = document.createElement("span")
    spanNome.classList.add("nome")
    spanNome.innerText = produto.nome_produto

    const spanDescricao = document.createElement("span")
    spanDescricao.classList.add("descricao")
    spanDescricao.innerText = produto.descricao

    const spanPreco = document.createElement("span")
    spanPreco.classList.add("preco")
    spanPreco.innerText = `$${produto.preco}`

    // botoes

    const btnAdicionar = document.createElement("a")
    btnAdicionar.innerText = "Adicionar ao Carrinho"
    btnAdicionar.href = "#"
    btnAdicionar.classList.add("btn", "primary")

    const btnVer = document.createElement("a")
    btnVer.innerText = "Ver Detalhes"
    btnVer.href = "produto.html?id_produto=" + produto.id_produto
    btnVer.classList.add("btn")

    const divBtns = document.createElement("div")
    divBtns.classList.add("btns")
    
    divBtns.appendChild(btnAdicionar)
    divBtns.appendChild(btnVer)
    // 

    div.appendChild(spanCategoria)
    div.appendChild(spanNome)
    div.appendChild(spanDescricao)
    div.appendChild(spanPreco)

    // 
    article.appendChild(img)
    article.appendChild(div)
    article.appendChild(divBtns)
    // 
    listaProdutos.appendChild(article)
   
}



init()

