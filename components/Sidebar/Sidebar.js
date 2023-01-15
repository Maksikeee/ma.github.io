import nav from "./Nav/Nav.js";

function Sidebar() {
  this.create = () => {
    const element = document.createElement("div");
    element.classList.add("sidebar");
    element.innerHTML = `
 
                          ${nav.outerHTML}
                        `
    ;
    return element;
  };

  this.init = () => {
    return this.create();
  };
}

const sidebar = new Sidebar().init();

export default sidebar;
