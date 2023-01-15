function Home() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('skills')
        element.innerHTML = `                            
                                <ul class="skills__items">
                                    <li class="skills__item">HTML</li>
                                    <li class="skills__item">CSS</li>
                                    <li class="skills__item">JavaScript</li>
                                    <li class="skills__item">TypeScript</li>
                                    <li class="skills__item">React</li>
                                    <li class="skills__item">GraphQL</li>
                                    <li class="skills__item">AntDesign</li>
                                    <li class="skills__item">MobX</li>
                                    <li class="skills__item">Git / Github</li>
                                </ul>
                            `

        

        return element
    }

    this.init = () => {
        return this.create()
    }
}

const home = new Home().init()
export default home