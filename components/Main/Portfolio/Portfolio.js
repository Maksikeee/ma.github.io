function Portfolio() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('portfolio')
        element.innerHTML= `
                                    <a class="portfolio__project-name" target="_blank" href="https://github.com/Maksikeee/country_photo_ts">Country photo</a>
                                    <p class="portfolio__project-description">
                                        Веб-приложение для поиска, просмотра и
                                        сохранения фотографий различных континентов и стран.
                                    </p>
                                    <section class="portfolio__photo-block">
                                    <div class="portfolio__photo-item-wrapper">
                                        <img class="portfolio__photo-item" alt="country_photo_screen" src="../img/countryPhoto.png">
                                    </div>
                                    <div class="portfolio__photo-item-wrapper">
                                        <img class="portfolio__photo-item" alt="country_photo_screen" src="../img/countryPhoto2.png">
                                    </div>
                                        </section>
                                    <section class="portfolio__project-stack">
                                        <p>Стек технологий:</p>
                                        <ul class="portfolio__project-stack-items">
                                            <li class="portfolio__project-stack-item">TypeScript</li>
                                            <li class="portfolio__project-stack-item">React</li>
                                            <li class="portfolio__project-stack-item">GraphQL</li>
                                            <li class="portfolio__project-stack-item">MobX</li>
                                            <li class="portfolio__project-stack-item">AntDesign</li>
                                        </ul>
                                    </section>
                            `

        return element
    }

    this.init = () => {
        return this.create()
    }
}

const portfolio = new Portfolio().init()

export default portfolio;