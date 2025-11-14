function saudar(nome){
    return `Olá ${nome}`
}

console.log(saudar("Laysa Cristine"))

// calcula a media
function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
}

console.log(calcularMedia(10,10,30))

function apresentarProduto(nomeProduto, preco = 0){
    return `${nomeProduto} e ${preco}`
}

console.log(apresentarProduto("Mouse", 45))