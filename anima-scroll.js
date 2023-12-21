export function animaScroll() {
    const elements = document.querySelectorAll('.card')
    window.addEventListener('scroll', calcTop)
    function calcTop() {
        elements.forEach(element => {
            const dist = element.offsetTop - (window.innerHeight  * 0.6)
            if(window.scrollY > dist) {
                element.style.opacity = "1"
                element.style.transform = "inherit"
            }
        })

    }
    calcTop()
}