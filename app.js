const Menu = function (itemMenu, parentElement) {
    this.parentElement = parentElement;
    this.liens = itemMenu;

    this.build = function () {
        this.ul = document.createElement('ul');
        for (let lien of this.liens){
           const lienFormatHtml = lien.getHtmlLinkElement();
            this.ul.appendChild(lienFormatHtml);
        }

        this.parentElement.appendChild(this.ul);
    }


    this.build();

    const Link = function (href, title) {
        this.lien = href;
        this.title = title;


        this.getHtmlLinkElement = function () {
            const a = document.createElement('a');
            a.innerHTML = href.title;
            a.title = href.lien;
        }
    }

    const menu = document.getElementById('menu');
    const mesLiensDeMenu = [
        new Link('https//www.google.com', 'Gooogle'),
    ];

    const topMenu = new Menu(menu, mesLiensDeMenu);
    topMenu.build();
}








