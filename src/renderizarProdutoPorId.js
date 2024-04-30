
import { pegarProdutoPorId } from "./data.js"
import { baseUrl } from "./data.js"

const main = document.getElementById("detalhes-produto")

const urlParams = new URLSearchParams(window.location.search)
const idProduto = urlParams.get("id_produto")

const renderizar = async (idProduto) => {
    const produto = await pegarProdutoPorId(idProduto)

    // 
    const section = document.createElement("section")
    section.id = "produto"
    // 
    const img = document.createElement("img")
    img.src = `${baseUrl}/static-files/${produto.url_image}`

    const div = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.innerText = produto.categoria

    const h1 = document.createElement("h1")
    h1.innerText = produto.nome_produto

    const p = document.createElement("p")
    p.innerText = produto.descricao

    const span = document.createElement("span")
    span.innerText = "$" + produto.preco

    const btn = document.createElement("a")
    btn.href = "#"
    btn.classList.add("btn", "primary")
    btn.innerText = "Comprar Agora"


    div.appendChild(h3)
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(span)
    div.appendChild(btn)
    // 
    section.appendChild(img)
    section.appendChild(div)
    // 
    main.appendChild(section)
}

renderizar(idProduto)