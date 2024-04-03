const tabs = {
    item: 'faq__item',
    text: 'faq__list-text',
    title: 'faq__list-title',
    collapse: 'collapse',
    open: 'open',
}
const list = [...document.querySelectorAll(`.${tabs.item}`)]
const text = [...document.querySelectorAll(`.${tabs.text}`)]
const title = [...document.querySelectorAll(`.${tabs.title}`)]

list.forEach((item, index) => item.addEventListener('click', () => {
    text[index].classList.toggle(tabs.collapse)
    title[index].classList.toggle(tabs.open)
}))