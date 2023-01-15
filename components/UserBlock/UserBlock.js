function UserBlock () {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('user-block')
        element.innerHTML=  `
                            <div class="user-block__photo-wrapper">
                                <img class="user-block__photo" alt="avatar" src="../img/photo_2023-01-12_19-14-00.jpg">

                                <ul class="user-block__socials">
                                    <li class="user-block__socials-item"><a target="_blank" href="https://github.com/Maksikeee"><i class="fa-brands fa-github"></i></a></li>
                                    <li class="user-block__socials-item"><a target="_blank" href="https://www.instagram.com/maksimka_chaiko/"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li class="user-block__socials-item"><a target="_blank" href="https://www.linkedin.com/in/maxim-chaiko-77358a257/"><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li class="user-block__socials-item"><a target="_blank" href="https://vk.com/maksim_chaiko"><i class="fa-brands fa-vk"></i></a></li>
                                </ul>
                            </div>

                            <div class="user-block__info-wrapper">
                            <ul class="info">
                                <li class="info__item">24 года</li>
                                <li class="info__item">Минск</li>
                                <li class="info__item">Frontend</li>
                            </ul>

                            <ul class="contacts">
                                <li class="contacts__item">
                                    <i class="fa-solid fa-house"></i><span>Минск, Беларусь </span>
                                </li>
                                <li class="contacts__item">
                                    <i class="fa-solid fa-envelope"></i><span>teakobeats@gmail.com</span>
                                </li>
                                <li class="contacts__item">
                                    <i class="fa-solid fa-phone"></i><span>+375336061761</span>
                                </li>
                            </ul>
                            </div>
                            `

        return element
    }
    
    this.init = () => {
        return this.create();
    }
}

const userBlock = new UserBlock().init()

export default userBlock