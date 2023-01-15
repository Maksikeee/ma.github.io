import { getSlugOfHash, getPageData, hashChangeEvent } from '../../utils/utils.js';
import { PORTFOLIO, EDUCATION, SKILLS, ABOUT_ME } from '../../constants/constants.js'



function Main () {
    this.localData = JSON.parse(localStorage.getItem('dataSPA'))
    this.element =''
    this.create = () => {
        this.element = document.createElement('main')
        this.element.classList.add('main')
        this.render(location.hash);
        hashChangeEvent(this.render);
    };


    this.render = (hash) => {
        const slugOfHash = getSlugOfHash(hash);
        if(!hash) {
            location.replace(`${location.pathname}#${slugOfHash}`)
        }
        
        const mainData = getPageData(slugOfHash);
        const { title } = mainData

        this.element.innerHTML = this.getHtmlTemplate(title)

        if(slugOfHash === ABOUT_ME){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./AboutMe/AboutMe.js').then(response => {
                const responseDefault = response.default.outerHTML
                this.element.innerHTML = this.getHtmlTemplate(title, responseDefault)
            })
        }

        if(slugOfHash === SKILLS){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./Skills/Skills.js').then(response => {
                const responseDefault = response.default.outerHTML
                this.element.innerHTML = this.getHtmlTemplate(title, responseDefault)
            })
        }

        if(slugOfHash === PORTFOLIO){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./Portfolio/Portfolio.js').then(response => {
                const responseDefault = response.default.outerHTML
                this.element.innerHTML = this.getHtmlTemplate(title, responseDefault)
            })
        }

        if(slugOfHash === EDUCATION){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./Education/Education.js').then(response => {
                const responseDefault = response.default.outerHTML
                this.element.innerHTML = this.getHtmlTemplate(title, responseDefault)
            })
        }

        
        
    }

    this.getHtmlTemplate = (title, htmlElement) => {
        return `
                        <div class="main__wrapper">
                            <h3 class="main__title">${title}</h3>
                            ${htmlElement ? htmlElement : ''}
                        </div>            
                `
    }

    this.init = () => {
        this.create()
        return this.element
    };
}

const main = new Main().init()

export default main