
import { pegarProdutoPorId } from "./data.js"
import { baseUrl } from "./data.js"

const banner = document.getElementById("banner")


const renderizar = async (idProduto) => {
    const produto = await pegarProdutoPorId(idProduto)

    // 
    const productDetails = document.createElement("div")
    productDetails.id = "product-details"

    const productImageWrapper = document.createElement("div")
    productImageWrapper.id = "product-image-wraper"
    // 
   

    const categoria = document.createElement("h3")
    categoria.id = "categoria"
    categoria.innerText = produto.categoria

    const nome = document.createElement("h1")
    nome.id = "nome"
    nome.innerText = produto.nome_produto

    const descricao = document.createElement("p")
    descricao.id = "descricao"
    descricao.innerText = produto.descricao

    const preco = document.createElement("p")
    preco.id = "preco"
    preco.innerText = "$" + produto.preco

    const btnAdicionar = document.createElement("a")
    btnAdicionar.href = "#"
    btnAdicionar.classList.add("btn", "primary")
    btnAdicionar.innerText = "Comprar Agora"

    const btnVer = document.createElement("a")
    btnVer.href = "#"
    btnVer.classList.add("btn")
    btnVer.innerText = "Ver Detalhes"

    const divBtns = document.createElement("div")

    productDetails.appendChild(categoria)
    productDetails.appendChild(nome)
    productDetails.appendChild(descricao)
    productDetails.appendChild(preco)

    divBtns.appendChild(btnAdicionar)
    divBtns.appendChild(btnVer)

    productDetails.appendChild(divBtns)

    // 
    
    const img = document.createElement("img")
    img.src = `${baseUrl}/static-files/${produto.url_image}`

    productImageWrapper.appendChild(img)
    // 
    banner.appendChild(productDetails)

    banner.appendChild(productImageWrapper)
}

let idProduto = Math.floor(Math.random() * 12)
if (idProduto === 0 ) idProduto = 1

renderizar(idProduto)

