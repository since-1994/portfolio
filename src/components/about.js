export default class About{
    constructor($target, observe){
        this.about = document.createElement('section');
        this.about.classList.add('about');
        this.about.dataset.id = 1;
        $target.appendChild(this.about);
        
        observe(this.about);
        this.render();
    }

    render = () => {
        const template = `
        <div class="about__content page">
            <div class="about__content__images">
                <img src="./src/assets/exam.jpg" />
            </div>
            <div class="about__content__items">
                <div><span class="about__content-start">저는</span> 결과물 없이 어떤 학문을 공부하는 것이 굉장히 힘들었습니다.</div> 
                <div>그래서 꼭 공부를 하고 관련된 주제의 문제를 없다면 만들어서라도 풀어봤습니다.</div>
                <div>초등학교때는 기탄수학을 열심히 풀었고</div>
                <div>대학교때는 자랑은 아니지만 기출문제를 열심히 풀었습니다.</div>
                <div>몇 문제를 맞았고 틀렸다는 결과가 제가 부족한 부분을 알려줬습니다.</div><br>
                <div>하지만 문제의 정답을 맞추기 위한 공부를 하다보면 한계가 있습니다.</div> 
                <div>세상에는 정해진 답이 없는 문제가 더 많으니까요.</div><br>
                <div>처음 개발을 접하고는 너무 반가웠습니다.</div> 
                <div>작성한 코드에 대한 결과가 어떤 방식보다도 역동적으로 보여졌기 때문입니다.</div>
                <div>잘못된 부분에 대해서는 에러 매시지를 띄워줬고 (물론 아닌 경우도 있지만요)</div>
                <div>잘하고 있다면 제가 의도한 결과를 보여줬습니다.</div><br>
                <div>저는 이러한 이유로 개발자로서의 <span class="about__content-start">꿈</span>을 키우게 되었습니다.</div><br>
            </div>
        </div>
        <div class="about__content page reverse">
            <div class="about__content__images">
                <img src="./src/assets/computer.jpg" />
            </div>
            <div class="about__content__items">
                <div><span class="about__content-start">개발</span>을 처음 접하고 무작정 hybrid 앱을 만들어 보겠다며</div> 
                <div>유튜브, Udemy 등에서 HTML, CSS, JavaScript, React, React Native 순으로 정신없이 3개월 정도를 달렸습니다.</div><br>
                <div>결과적으로 강의 없이는 작은 부분조차 스스로 만들지 못하는걸 느끼고 좌절했습니다.</div><br>
                <div>분명히 열심히 한것같은데 뭐가 문제일까 오랜 기간 고민했습니다.</div><br>
                <div>이것 저것 조급하게 배우려다보니 언제 무너질지 모를 모래성 같은 지식을 쌓았다는 것을 깨달았고</div> 
                <div>제일 중요한건 기초라고 생각하게되었습니다.</div>
                <div>더하여 앱이 꼭 필요한게 아니라면 웹으로 충분하다는 생각도 하게되었습니다.</div><br>
                <div>다시 처음으로 돌아가 정말 많은 웹사이트를 HTML과 CSS 만으로 따라해보았고 어느 정도 자신감이 생겼을때 vanilla JavaScript만으로 프로젝트를 수행하기 위해 노력했습니다.</div><br>
                <div>비슷한 목표를 가진 사람들에 비해 늦게 개발을 시작한 것이 사실이지만 늦은만큼 더욱 빠르고 단단하게 성장하려 노력하고 있습니다.</div>
            </div>
        </div>
        `
        this.about.innerHTML = template;

        const images = document.querySelectorAll('img');

        if(window.innerWidth > 768){
            images.forEach(img => {
                img.width = img.height;
            });
        }
        
        window.addEventListener('resize',e => {
            if(window.innerWidth > 768){
                images.forEach(img => {
                    img.width = img.height;
                });
            }
        });
    }
}