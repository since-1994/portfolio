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
                      <span>유튜브 클론</span><i class="fas fa-external-link-alt"></i>
                    </a>
                    <p class="project__item__desc">
                    서버에 대한 이해를 넓히기 위해 진행한 유튜브 클론 프로젝트입니다. 서버 구축 프레임워크인 Express.js를 사용하여 서버를 구성하였고 여러 Middleware와 MongoDB, AWS S3 등이 프로젝트에 사용되었습니다.
                    주요 기능으로 회원 가입, 로그인, 영상 CRUD, 댓글 CRUD가 구현되어 있습니다.
                    </p>  
                </div>
              </li>
              <li class="project__item__container">
                    <div class="project__item">
                      <div class="project__item__thumbnail">
                        <img src="./src/assets/project1.png">
                      </div>
                      <a class="project__item__title" href="https://github.com/since-1994/todo" target="_blank">
                        <span>맥북 컨셉의 투두리스트</span><i class="fas fa-external-link-alt"></i>
                      </a>
                      <p class="project__item__desc">
                        HTML, CSS, JavaScript만으로 제작한 맥북 컨셉의 투두리스트 입니다. 투두리스트 이외에도 뮤직 플레이어, 날씨앱, 그림판 등의 기능이 구현되어 있습니다. Nomadcoders.co에서 주최한 투두리스트 대회에 나가기 위해 제작되었으며 대상을 수상하였습니다.
                      </p>
                    </div>
                </li>
                <li class="project__item__container">
                  <div class="project__item">
                      <div class="project__item__thumbnail">
                        <img src="./src/assets/youtube1.jpg">
                      </div>
                      <a class="project__item__title" href="https://github.com/since-1994/todo" target="_blank">
                        <span>유튜브 클론</span><i class="fas fa-external-link-alt"></i>
                      </a>
                      <p class="project__item__desc">
                        서버에 대한 이해를 넓히기 위해 진행한 유튜브 클론 프로젝트입니다. 서버 구축 프레임워크인 Express.js를 사용하여 서버를 구성하였고 여러 Middleware와 MongoDB, AWS S3 등이 프로젝트에 사용되었습니다.
                        주요 기능으로 회원 가입, 로그인, 영상 CRUD, 댓글 CRUD가 구현되어 있습니다.
                      </p>
                  </div>
                </li>
              <li class="project__item__container" data-indicator="last">
                <div class="project__item">
                  <div class="project__item__thumbnail">
                    <img src="./src/assets/project1.png">
                  </div>
                  <a class="project__item__title" href="https://github.com/since-1994/youtube" target="_blank">
                    <span>맥북 컨셉의 투두리스트</span><i class="fas fa-external-link-alt"></i>
                  </a>
                  <p class="project__item__desc">
                    HTML, CSS, JavaScript만으로 제작한 맥북 컨셉의 투두리스트 입니다. 투두리스트 이외에도 뮤직 플레이어, 날씨앱, 그림판 등의 기능이 구현되어 있습니다. Nomadcoders.co에서 주최한 투두리스트 대회에 나가기 위해 제작되었으며 대상을 수상하였습니다.
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