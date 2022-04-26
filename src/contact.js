import callIcon from './call-icon.png'

function contact() {
    const container = document.createElement('div')
    container.id = 'contact-container'

    const phoneNumberPara = document.createElement('p')
    const icon = document.createElement('img')
    icon.src = callIcon
    phoneNumberPara.appendChild(icon)

    phoneNumberPara.textContent = '+1243422325'

    
    const facebookPara = document.createElement('p')
    facebookPara.innerHTML = '<a href="https://www.facebook.com">Facebook.com/xyz</a>'


    container.appendChild(phoneNumberPara)
    container.appendChild(facebookPara)

    return container
}

export default contact;