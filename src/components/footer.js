export default class Footer{
    constructor($target){
        this.footer = document.createElement('footer');
        this.footer.classList.add('footer');
        $target.appendChild(this.footer);

        this.page = 0;

        this.render();
    }

    setPage(_page){
        this.page = parseInt(_page, 10);
        this.render();
    }

    render = () => {
        const template = `
            <div class="footer__item" data-id=0></div>
            <div class="footer__item" data-id=1></div>
            <div class="footer__item" data-id=2></div>
        `;

        this.footer.innerHTML = template;

        const footerItems = document.querySelectorAll('.footer__item');
        footerItems.forEach(f => {
            if(parseInt(f.dataset.id, 10) === this.page){
                f.classList.add('active');
            }
        })
    }
}