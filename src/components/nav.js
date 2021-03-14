export default class Nav{

    constructor($target, toggleMode, openModal){
        this.toggleMode = toggleMode;
        this.openModal = openModal;

        this.nav = document.createElement('nav');
        this.nav.classList.add('nav');
        this.state = {
            selected:0
        }
        $target.appendChild(this.nav);

        this.render();
    }

    setState = (_state) => {
        this.state = {
            ...this.state,
            ..._state
        };
        this.movePage();
    }

    movePage = () => {
        const items = document.querySelectorAll('.nav__item--left');
        items.forEach((item, idx) => {
            const reveal = item.querySelector('.nav__item-reveal');
            if(idx == this.state.selected){
                reveal.style.transform = 'translateX(0%)';
            }else{
                reveal.style.transform = 'translateX(-101%)';
            }
        });
    }

    onClickModeBtn = e => this.toggleMode();
    onClickMoreBtn = e => {
        this.openModal();
    }

    render = () => {
        const template = `
            <div class="nav__left">
                <div class="nav__item nav__item--left" data-id= 0 >
                    <span>Home</span>
                    <div class="nav__item-reveal"></div>
                </div>
                <div class="nav__item nav__item--left" data-id = 1>
                    <span>About me</span>
                    <div class="nav__item-reveal"></div>
                </div>
                <div class="nav__item nav__item--left" data-id = 3>
                    <span>Projects</span>
                    <div class="nav__item-reveal"></div>
                </div>
            </div>
            <div class="nav__right">
                <div class="nav__item more-btn">More</div>
                <div class="nav__item mode-btn"><i class="fas fa-moon"></i></div>
            </div>

        `

        this.nav.innerHTML = template;    

        const modeBtn = document.querySelector('.mode-btn');
        modeBtn.addEventListener('click', this.onClickModeBtn);

        const moreBtn = document.querySelector('.more-btn');
        moreBtn.addEventListener('click', this.onClickMoreBtn);


        const items = document.querySelectorAll('.nav__item--left');
        items.forEach(i => {
            i.addEventListener('click', () => {
                const id = i.dataset.id;
                window.scroll({
                    top: window.innerHeight*id,
                    left: 0,
                    behavior: 'smooth'
                  });
            })
        })
    }
}