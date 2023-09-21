const lista = [
    'html o esqueleto do site é a parte que servira de base para todo o resto',
    'css o estilo ou a pele do site basicamente a parte mais estetica do site',
    'java animações'
]
function EventoTeste(index){
    const texto = document.querySelector('.paragrafo-conhecimento')
    texto.innerHTML =  lista[index]
}

function LimpaTexto () {
    const texto = document.querySelector('.paragrafo-conhecimento')
    texto.innerHTML = 'passe o cursor sobre o card para ler'

}

export function Conhecimentos (nome) {
    const caixas = document.querySelectorAll('.caixa')
    caixas.forEach((item, index)=>{
        item.addEventListener('mouseenter',() => EventoTeste(index))
        item.addEventListener('mouseleave',LimpaTexto )
    })
}