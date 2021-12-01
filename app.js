const Menu = function (itemMenu, parentElement) {
    this.parentElement = parentElement;
    this;liens = itemMenu;

    this.build = function () {
        this.ul = document.createElement('ul');
        this.parentElement.appendChild(this.ul);
    }


    this.build();

    const LienHtml = function (href, title) {
        this.href = href;
        this.title = title;
    }
    new LienHtml('https//www.google.com', 'Gooogle');
}



const menu = document.getElementById('menu');

const mesLiensDeMenu = [
    ['https//www.google.com', 'Gooogle'],
]

new Menu(menu, mesLiensDeMenu);


