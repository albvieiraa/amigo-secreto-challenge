let amigosInseridos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("Você não pode deixar o espaço vazio!");
        return;
    } else {
        amigosInseridos.push(nome);
        limparCampo();
    }
    console.log('Nome capturado: ', nome);
    return nome;
    
}

// Função para limpar o campo
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}