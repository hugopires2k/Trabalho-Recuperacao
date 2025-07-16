// Classe Livro
class Livro {
  constructor(titulo, autor, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
  }
}

const livros = [];
const form = document.getElementById("formLivro");
const listaLivros = document.getElementById("listaLivros");
const campoBusca = document.getElementById("busca");

// Livros iniciais adicionados no sistema
livros.push(
  new Livro("Dom Casmurro", "Machado de Assis", "Romance"),
  new Livro("1984", "George Orwell", "Distopia"),
  new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Fábula"),
  new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia")
);

// Exibir os livros logo ao abrir
exibirLivros(livros);


// Função para exibir livros
function exibirLivros(lista) {
  listaLivros.innerHTML = "";

  if (lista.length === 0) {
    listaLivros.innerHTML = "<li>Nenhum livro encontrado.</li>";
    return;
  }

  lista.forEach((livro, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${livro.titulo}</strong> - ${livro.autor} (${livro.categoria})</span>
      <button onclick="removerLivro(${index})">Remover</button>
    `;
    listaLivros.appendChild(li);
  });
}

// Evento de cadastro
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const categoria = document.getElementById("categoria").value.trim();

  if (!titulo || !autor || !categoria) return;

  const novoLivro = new Livro(titulo, autor, categoria);
  livros.push(novoLivro);

  form.reset();
  exibirLivros(livros);
});

// Função de busca
campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase();

  const filtrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(termo) ||
    livro.categoria.toLowerCase().includes(termo)
  );

  exibirLivros(filtrados);
});

// Função para remover livro
function removerLivro(index) {
  livros.splice(index, 1);
  exibirLivros(livros);
}

// Inicializa a lista vazia
exibirLivros(livros);
