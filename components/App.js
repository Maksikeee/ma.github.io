import { getSlugOfHash, getPageData, hashChangeEvent } from "../utils/utils.js";

function App() {
  this.app = "";
  this.create = () => {
    this.app = document.createElement("div");
    this.app.classList.add("app");
    document.body.appendChild(this.app);
  };

  this.getData = () => {
    fetch("../data/data.js")
      .then((respone) => respone.text())
      .then((data) => {
        setTimeout(() => {
          localStorage.setItem("dataSPA", data);
          this.setTitle(location.hash);
          hashChangeEvent(this.setTitle);
          this.render();
        }, 0);
      });
  };

  this.setTitle = (hash) => {
    const slugOfHash = getSlugOfHash(hash);
    const data = getPageData(slugOfHash);
    document.title = data.pageTitle;
  };

  this.render = async () => {
    const dataSidebar = await import("./Sidebar/Sidebar.js");
    const dataHeader = await import("./Header/Header.js");
    const dataUserBlock = await import('./UserBlock/UserBlock.js');
    const dataMain = await import('./Main/Main.js');
    
    const sidebar = dataSidebar.default;
    const header = dataHeader.default;
    const userBlock = dataUserBlock.default;
    const main = dataMain.default;
    
    this.app.appendChild(sidebar);
    this.app.appendChild(header);
    this.app.appendChild(main);  
    this.app.appendChild(userBlock);
    

    let menuBtn = document.querySelector(".nav__menu-btn");
    let menu = document.querySelector(".nav__items");

    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
      menuBtn.classList.toggle("active__btn");
    });

    document.addEventListener("click", (e) => {
      if (
        e.target !== menuBtn &&
        e.target !== menu &&
        !menuBtn.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        if (menuBtn.classList.contains("active__btn")) {
          menu.classList.remove("active");
          menuBtn.classList.remove("active__btn");
        }
      }
    });
  };

  this.init = () => {
    this.create();
    this.getData();
  };
}

const app = new App().init();
