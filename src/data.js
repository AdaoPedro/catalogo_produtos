

export async function pegarProdutos () {
    const resposta = await fetch(
        "http://localhost/marcas-api/produtos", 
        {
            method: "GET" 
        }
    )

    const produtos = await resposta.json()

    return produtos
}

export async function pegarProdutoPorId (idProduto) {
    const resposta = await fetch(
        `http://localhost/marcas-api/produtos/${idProduto}`, 
        {
            method: "GET" 
        }
    )

    const produto = await resposta.json()

    return await produto
}

export const baseUrl = "http://localhost/marcas-api"
