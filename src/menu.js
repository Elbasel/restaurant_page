import blackCoffeeImage from './menu-images/black-coffee.jpg'
import espressoImage from './menu-images/espresso.jpg'
import milkshakeImage from './menu-images/milkshake.jpg'


function menu() {

    const items = [
        {img: blackCoffeeImage, name: 'Black Coffee', price: 20},
        {img: espressoImage,name: 'Espresso', price: 16},
        {img: milkshakeImage, name: 'Milkshake', price: 10}
    ]

    const container = document.createElement('div')
    container.id = 'menu-container'

    for (const item of items) {
        let itemContainer = document.createElement('div')
        itemContainer.classList.add('menu-item')

        let img = document.createElement('img')

        img.src = item.img

        let nameParagraph = document.createElement('p')
        nameParagraph.classList.add('name-para')
        nameParagraph.textContent = item.name

        let priceParagraph = document.createElement('p')
        priceParagraph.classList.add('price-para')
        priceParagraph.textContent = item.price + '$'


        itemContainer.appendChild(img)
        itemContainer.appendChild(nameParagraph)
        itemContainer.appendChild(priceParagraph)

        container.appendChild(itemContainer)

    }

    return container
}

export default menu;