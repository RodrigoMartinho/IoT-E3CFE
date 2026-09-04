let linhaEmEdicao = null;

function abrirModal() {
    const modal = document.getElementById('modal-cadastro');
    if (modal) modal.style.display = 'flex';
}

function fecharModal() {
    const modal = document.getElementById('modal-cadastro').style.display = 'none';
}

function incluir(titulo = 'Cadastrar Novo Registro') {
    linhaEmEdicao = null;
    const form = document.querySelector('form');
    if (form) form.reset();
    const tituloModal = document.getElementById('titulo-modal');
    if (tituloModal) tituloModal.innerText = titulo;
    abrirModal();
}

function excluir(botao, mensagem = 'Deseja realmente excluir este registro?') {
    if (confirm(mensagem)) {
        const linha = botao.closest('tr');
        if (linha) linha.remove();
    }
}