const getState = (domArray) => {
    return [...document.querySelectorAll(domArray)].map((el, index) => {
        return {domNode: el, position: 0, ratio: index / 1.5}
    })
}
const stateParallaxElement = getState('.parallax')
const threshold = 300
let position = 0

window.addEventListener('scroll', () => {
    const topScroll = position > window.scrollY
    position = window.scrollY
    startParallaxFor(stateParallaxElement, topScroll)
}, { passive: true })

function isVisible(domElement) {
    const borderBottom = domElement.getBoundingClientRect().top - window.innerHeight < 0
    const borderTop = domElement.getBoundingClientRect().top > 0
    return borderBottom && borderTop
}

function getParallax(domElement, scroll) {
    domElement.position = scroll ? domElement.position + domElement.ratio : domElement.position - domElement.ratio
    domElement.position = domElement.position < Math.abs(threshold) ? domElement.position : threshold
    domElement.domNode.style.transform = `translateY(${domElement.position}px) translateZ(0)`
}

function startParallaxFor(dom, scroll) {
    dom.forEach(item => isVisible(item.domNode) ? getParallax(item, scroll) : undefined)
}