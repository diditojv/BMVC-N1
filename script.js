document.addEventListener('DOMContentLoaded', function() {
    
    const botao = document.getElementById('btn-saiba-mais');

    if (botao) {
        botao.addEventListener('click', function() {
            alert('O JavaScript está funcionando');
        });
    }

});