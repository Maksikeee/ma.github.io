function Education() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('education')
        element.innerHTML= `
                                    <section class="education__courses">
                                        <h4 class="education__courses-title">Курсы:</h4>
                                        <p class="education__courses-item">MyItSchool ( 2022) - Сертифицированные курсы IT(Frontend разработка)</p>
                                    </section>
                                    <section class="education__college">
                                        <h4 class="education__college-title">Высшее образование:</h4>
                                        <p class="education__college-item">МОУВО «Белорусско-Российский университет»(2015-2020гг.) - Строительный факультет</p>
                                    </section>
                                    <section class="education__languages">
                                        <h4 class="education__languages-title">Языки:</h4>
                                        <ul class="education__languages-items">
                                            <li class="education__languages-item">русский (родной);</li>
                                            <li class="education__languages-item">английский (A2);</li>
                                        </ul>
                                    </section>                                                              
                            `

        return element
    }

    this.init = () => {
        return this.create()
    }
}

const education = new Education().init()

export default education;