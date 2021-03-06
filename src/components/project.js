export default class Project{
    constructor($target, observe){
        this.project = document.createElement('section');
        this.project.classList.add('project');
        this.project.classList.add('page');
        this.project.dataset.id = 2;
        $target.appendChild(this.project);

        observe(this.project);

        this.size;
        this.slide;
        this.items;
        this.counter = 1;
        this.render();
    }

    onClickPrevBtn = () => {
      if(this.counter <= 0)
        return;
      this.counter -= 1;
      const slide = document.querySelector('.project__items');
      slide.style.transition = 'transform .4s ease-in-out';
      slide.style.transform = `translateX(-${this.size*this.counter}px)`;
    }

    onClickNextBtn = () => {
      if(this.counter >= this.items.length-1)
        return;
      this.counter += 1;
      const slide = document.querySelector('.project__items');
      slide.style.transition = 'transform .4s ease-in-out';
      slide.style.transform = `translateX(-${this.size*this.counter}px)`;
    }

    onTransitionend = () => {
        const id = this.items[this.counter].dataset.indicator;
        if(id === 'last'){
          this.counter = 1;
          this.slide.style.transition = 'none';
          this.slide.style.transform = `translateX(-${this.size*this.counter}px)`;
        }
        else if(id === 'first'){
          this.counter = this.items.length - 2;
          this.slide.style.transition = 'none';
          this.slide.style.transform = `translateX(-${this.size*this.counter}px)`;
        }
    }

    render = () => {
        const template = `
          <div class="project__items__container">
            <ul class="project__items">
              <li class="project__item__container" data-indicator="first">
                <div class="project__item">
                    <div class="project__item__thumbnail">
                      <img src="./src/assets/youtube1.jpg">
                    </div>
                    <a class="project__item__title" href="https://github.com/since-1994/youtube" target="_blank">
                      <span>????????? ??????</span><i class="fas fa-external-link-alt"></i>
                    </a>
                    <p class="project__item__desc">
                    ????????? ?????? ????????? ????????? ?????? ????????? ????????? ?????? ?????????????????????. ?????? ?????? ?????????????????? Express.js??? ???????????? ????????? ??????????????? ?????? Middleware??? MongoDB, AWS S3 ?????? ??????????????? ?????????????????????.
                    ?????? ???????????? ?????? ??????, ?????????, ?????? CRUD, ?????? CRUD??? ???????????? ????????????.
                    </p>  
                </div>
              </li>
              <li class="project__item__container">
                    <div class="project__item">
                      <div class="project__item__thumbnail">
                        <img src="./src/assets/project1.png">
                      </div>
                      <a class="project__item__title" href="https://github.com/since-1994/todo" target="_blank">
                        <span>?????? ????????? ???????????????</span><i class="fas fa-external-link-alt"></i>
                      </a>
                      <p class="project__item__desc">
                        HTML, CSS, JavaScript????????? ????????? ?????? ????????? ??????????????? ?????????. ??????????????? ???????????? ?????? ????????????, ?????????, ????????? ?????? ????????? ???????????? ????????????. Nomadcoders.co?????? ????????? ??????????????? ????????? ????????? ?????? ?????????????????? ????????? ?????????????????????.
                      </p>
                    </div>
                </li>
                <li class="project__item__container">
                  <div class="project__item">
                      <div class="project__item__thumbnail">
                        <img src="./src/assets/youtube1.jpg">
                      </div>
                      <a class="project__item__title" href="https://github.com/since-1994/todo" target="_blank">
                        <span>????????? ??????</span><i class="fas fa-external-link-alt"></i>
                      </a>
                      <p class="project__item__desc">
                        ????????? ?????? ????????? ????????? ?????? ????????? ????????? ?????? ?????????????????????. ?????? ?????? ?????????????????? Express.js??? ???????????? ????????? ??????????????? ?????? Middleware??? MongoDB, AWS S3 ?????? ??????????????? ?????????????????????.
                        ?????? ???????????? ?????? ??????, ?????????, ?????? CRUD, ?????? CRUD??? ???????????? ????????????.
                      </p>
                  </div>
                </li>
              <li class="project__item__container" data-indicator="last">
                <div class="project__item">
                  <div class="project__item__thumbnail">
                    <img src="./src/assets/project1.png">
                  </div>
                  <a class="project__item__title" href="https://github.com/since-1994/youtube" target="_blank">
                    <span>?????? ????????? ???????????????</span><i class="fas fa-external-link-alt"></i>
                  </a>
                  <p class="project__item__desc">
                    HTML, CSS, JavaScript????????? ????????? ?????? ????????? ??????????????? ?????????. ??????????????? ???????????? ?????? ????????????, ?????????, ????????? ?????? ????????? ???????????? ????????????. Nomadcoders.co?????? ????????? ??????????????? ????????? ????????? ?????? ?????????????????? ????????? ?????????????????????.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <button class="project__prev-btn project__btn"><i class="fas fa-chevron-left"></i></button>
          <button class="project__next-btn project__btn"><i class="fas fa-chevron-right"></i></button>
        `;
        
        this.project.innerHTML= template;

        const items = document.querySelectorAll('.project__item__container');
        this.items = items;
        this.size = items[0].clientWidth;
        console.log(this.size);

        window.addEventListener('resize', () => {
          this.size = this.items[0].clientWidth
          slide.style.transform = `translateX(-${this.size*this.counter}px)`;
        });

        const slide = document.querySelector('.project__items');
        this.slide = slide;
        slide.style.transform = `translateX(${-this.size*1}px)`;
        slide.addEventListener('transitionend', this.onTransitionend);

        const prevBtn = document.querySelector('.project__prev-btn');
        const nextBtn = document.querySelector('.project__next-btn');

        prevBtn.addEventListener('click', this.onClickPrevBtn);
        nextBtn.addEventListener('click', this.onClickNextBtn);
    }
}