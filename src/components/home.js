export default class Home{
    constructor($target, observe, day, time){
        this.day = day;
        this.time = time;

        this.home = document.createElement('section');
        this.home.classList.add('home');
        this.home.classList.add('page');
        this.home.dataset.id = 0;
        $target.appendChild(this.home);
        
        observe(this.home);
        this.render();
    }

    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    render = () => {
        const template = `
          <div class="home__greeting">
            <h1 class ="home__greeting__item">안녕하세요</h1>
            <h1 class ="home__greeting__item">프론트엔드 개발자</h1>
            <h1 class ="home__greeting__item">
              <div class="hero-name">김민석<div class="reveal-name"></div></div>입니다</h1>
            <h1 class="home__greeting__item">
              <h1 class="home__greeting__day">
              ${this.day} ${this.time}에<br> 방문해주셔서 감사합니다
              </h1>
            </h1>
          </div>
        `;

        this.home.innerHTML = template;
    
        const revealName = document.querySelector('.reveal-name');
        window.addEventListener('load', () => {
          setInterval(()=>{revealName.style.backgroundColor = this.getRandomColor()},2000);
        });
        
    }
}