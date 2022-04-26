import './style.css'
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'

function toggle(e) {

    if (e.target.classList[0] === 'selected') {
        return
    }

    content.textContent = '';
    for (const btn of headerButtons) {
        btn.classList.remove('selected')
    }
    e.target.classList.add('selected')




    if (e.target.id === 'home-button') {
        content.appendChild(home())
    }
    else if (e.target.id === 'menu-button') {
        content.appendChild(menu())
    }
    else if (e.target.id === 'contact-button') {
        content.appendChild(contact())
    }
}




const content  = document.querySelector('#content')


content.appendChild(home())
const headerButtons = document.querySelectorAll('header > button')

for (const btn of headerButtons) {
    btn.addEventListener('click', e => toggle(e))
}
