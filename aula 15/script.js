// cria objeto
let livro = {
    titulo: "The Midnight Library",
    autor: "Matt Haig",
    paginas: 264,
    disponivel: "Sim",
}

// imprime mensagem
console.log(livro.titulo)
console.log(livro["autor"])

// adiciona editora
livro.editora = "Novatec"

// adiciona metodo detalhes
livro.detalhes = function() {
    return `O livro ${this.titulo}, escrito por ${this.autor}, possui ${this.paginas} páginas`
}

console.log(livro.detalhes())



//biblioteca
let biblioteca = {
    livros: [
        "É Assim Que Acaba",
        "The Midnight Library",
        "Código Limpo",
        "Atomic Habits",
        "O Retrato de Dorian Gray"
    ]
}

for(let i = 0; i < biblioteca.livros.length; i++){
    console.log(biblioteca.livros[i])
}