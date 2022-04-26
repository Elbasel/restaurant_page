import bg from './bg.jpg'


function home() {
    const container = document.createElement('div')
    container.id = 'img-container'


    const image = document.createElement('img')
    image.src = bg

    const paragraph = document.createElement('p')
    paragraph.textContent = 'We have the best coffee around!'

    container.appendChild(image)
    container.appendChild(paragraph)
    return container
}

export default home;