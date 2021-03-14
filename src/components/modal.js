export default class Modal{
    constructor($target){
        this.modal = document.createElement('section');
        this.modal.classList.add('modal');
        $target.appendChild(this.modal);

        this.render();
    }

    openModal = () => {
        this.modal.classList.add('active');
    }
    
    closeModal = () => {
        this.modal.classList.remove('active');
    }

    render = () => {
        const template = `
        <div class="modal__overlay"></div>
        <div class="modal__content">
            <div class="modal__close-btn"><i class="fas fa-times"></i></div>
            <a href="https://github.com/since-1994" target="_blank">
                <div class="modal__content__item">
                <i class="fab fa-github"></i> 
                <span>Github</span>
                </div>
            </a>
            <a href="https://velog.io/@since-1994" target="_blank">
                <div class="modal__content__item"><div class="modal__content__item-logo">V</div> Velog</div>
            </a>
        </div>
        `
        this.modal.innerHTML = template;    

        const closeBtn = document.querySelector('.modal__close-btn');
        closeBtn.addEventListener('click', this.closeModal);

        const overlay = document.querySelector('.modal__overlay');
        overlay.addEventListener('click', this.closeModal);

        window.addEventListener('keydown', e => {
            if(e.key === 'Escape')
                this.closeModal();
        })
    }
}