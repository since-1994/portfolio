export default class Project{
    constructor($target, observe){
        this.project = document.createElement('section');
        this.project.classList.add('project');
        this.project.classList.add('page');
        this.project.dataset.id = 2;
        $target.appendChild(this.project);

        observe(this.project);
        this.render();
    }

    render = () => {
        const template = `
            <ul class="project__items">
              <li class="project__item">
                <div class="project__item__thumbnail">
                  <img src="./src/assets/project1.png">
                </div>
                <h1 class="project__item__title">1. 맥북 컨셉의 투두리스트</h1>
                <ul class="project__item__skills">
                    <div class="project__item__skills__container">
                      <li class="project__item__skill">HTML</li>
                      <li class="project__item__skill">CSS</li>
                      <li class="project__item__skill">JacaScript</li>
                    </div>
                </ul>
                <p class="project__item__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, explicabo ipsa quidem cum error sed? Nobis autem rerum sapiente, ut dicta natus! Culpa blanditiis accusantium repudiandae aliquid sapiente voluptatem excepturi.
                </p>
              </li>
              <li class="project__item">
                <div class="project__item__thumbnail">
                  <img src="./src/assets/project1.png">
                </div>
                <h1 class="project__item__title">2. 맥북 컨셉의 투두리스트</h1>
                <ul class="project__item__skills">
                    <div class="project__item__skills__container">
                      <li class="project__item__skill">HTML</li>
                      <li class="project__item__skill">CSS</li>
                      <li class="project__item__skill">JacaScript</li>
                    </div>
                </ul>
                <p class="project__item__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, explicabo ipsa quidem cum error sed? Nobis autem rerum sapiente, ut dicta natus! Culpa blanditiis accusantium repudiandae aliquid sapiente voluptatem excepturi.
                </p>
              </li>
            </ul>
        `;
        
        this.project.innerHTML= template;
    }
}