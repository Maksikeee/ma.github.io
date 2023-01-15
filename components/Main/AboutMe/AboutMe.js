function AboutUs() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('about')

        element.innerHTML = `
            <section class="about__purpose">
                <h4 class="about__purpose-title">Цель:</h4>
                <article class="about__purpose-text">
                    <p>Реализовать желание стать веб-разработчиком. Стать ответственным членом команды, на которого можно положиться. Писать код, вникать в суть проекта и разбираться в его архитектуре.</p>
                    <p>В данный момент сконцентрирован на изучении Typescript и улучшении своих навыков во Frontend разработке и английском языке.</p>    
                </article>
            </section>

            <section class="about__soft-skills">
                <h4 class="about__soft-skills-title">Гибкие навыки:</h4>
                <ul class="about__soft-skills-items">
                    <li class="about__soft-skills-item">умение находить нестандартные, но эффективные решения проблем;</li>
                    <li class="about__soft-skills-item">легко устанавливаю деловые и дружеские связи с людьми;</li>
                    <li class="about__soft-skills-item">умение четко формулировать мысли.</li>
                </ul>
            </section>

            <section class="about__hobby">
                <h4 class="about__hobby-title">Хобби:</h4>
                <ul class="about__hobby-items">
                    <li class="about__hobby-item">автомобили;</li>
                    <li class="about__hobby-item">плавание;</li>
                    <li class="about__hobby-item">создание музыки.</li>
                </ul>
            </section>
                    `

        return element
    }

    this.init = () => {
        return this.create()
    }
}

const aboutUs = new AboutUs().init()
export default aboutUs