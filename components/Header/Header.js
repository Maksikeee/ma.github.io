function Header() {
    this.create = () => {
        const element = document.createElement('header')
        element.classList.add('header')
        element.innerHTML= `
                            <h2 class="header__title">Чайко Максим</h2>
                            `

        return element
    }

    this.init = () => {
        return this.create()
    }
}

const header = new Header().init()

export default header;