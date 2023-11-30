function clickHamburger (){
    const hamburguer = document.querySelector('.hamburger-celular')
    const links = document.querySelector('.links')
    const linha1 = document.querySelector('.linha1')
    const linha2 = document.querySelector('.linha2')
    const linha3 = document.querySelector('.linha3')



    if( !hamburguer.classList.contains('active')) {
        linha1.style.opacity = '0'
        linha2.style.transform = 'rotate(45deg)'
        linha3.style.transform = 'rotate(-45deg)'
        linha3.style.position = 'absolute'
        linha3.style.bottom = '0px'
        hamburguer.classList.add('active')
        links.style.opacity = "1"
        links.style.pointerEvents = 'inherit'
        links.style.transform = 'inherit'
    }
    else {
        linha1.style.opacity = 'inherit'
        linha2.style.transform = 'inherit'
        linha3.style.transform = 'inherit'
        linha3.style.position = 'inherit'
        linha3.style.bottom = 'inherit'  
        links.style.opacity = '0'
        hamburguer.classList.remove("active")
        links.style.pointerEvents = 'none'
        links.style.transform = 'translate3d(0px, -50px, 0px)'
    }

}



export function eventoTaChovendoHamburguer (){
const hamburguer = document.querySelector('.hamburger-celular')

hamburguer.addEventListener('click',clickHamburger)
}