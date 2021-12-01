const Menu = function (itemMenu, parentElement) {
    this.parentElement = parentElement;
    this.liens = itemMenu;

    this.build = function () {
        this.ul = document.createElement('ul');
        for (let lien of this.liens){
            const a = document.createElement('a');
            a.innerHTML = lien[1];
            a.title = lien[1];
            this.ul.appendChild(this.ul);
        }

        this.parentElement.appendChild(this.ul);
    }


    this.build();

    const Link = function (href, title) {
        this.href = href;
        this.title = title;
    }

    const menu = document.getElementById('menu');
    const mesLiensDeMenu = [
        new Link('https//www.google.com', 'Gooogle'),
    ];

    const topMenu = new Menu(menu, mesLiensDeMenu);
    topMenu.build();
}








