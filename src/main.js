import App from './app.js';

const projects = [
    {
        indicator: 'none',
        link: 'https://github.com/since-1994/todo',
        title: '맥북 컨셉의 투두리스트',
        desc: 'HTML, CSS, JavaScript만으로 제작한 맥북 컨셉의 투두리스트 입니다. 투두리스트 이외에도 뮤직 플레이어, 날씨앱, 그림판 등의 기능이 구현되어 있습니다. Nomadcoders.co에서 주최한 투두리스트 대회에 나가기 위해 제작되었으며 대상을 수상하였습니다.',
        img: './src/assets/todo1.png'
    },
    {
        indicator: 'none',
        link: 'https://github.com/since-1994/youtube',
        title: '유튜브 클론',
        desc: '서버에 대한 이해를 넓히기 위해 진행한 유튜브 클론 프로젝트입니다. 서버 구축 프레임워크인 Express.js를 사용하여 서버를 구성하였고 여러 Middleware와 MongoDB, AWS S3 등이 프로젝트에 사용되었습니다. 주요 기능으로 회원 가입, 로그인, 영상 CRUD, 댓글 CRUD가 구현되어 있습니다.',
        img: './src/assets/youtube1.jpg'
    },
    {
        indicator: 'none',
        link: 'https://github.com/since-1994/portfolio',
        title: '프로젝트 및 자기 소개 페이지',
        desc: '프로젝트 및 자기 소개를 위해 제작한 페이지 입니다. ES6 모듈 시스템을 활용하여 클래스 기반의 component로 나누어 제작해보았습니다. 구현된 주요 기능으로 다크 모드와 캐러셀이 있습니다.',
        img: './src/assets/port1.png'
    }
];

const first = projects[projects.lenth-1];
const last = projects[0];
projects.unshift({...first, indicator:'first'});
projects.push({...last, indicator:'last'});

const content = `저는 어릴적부터 결과물 없이 어떤 학문을 공부하는 것이 굉장히 힘들었습니다. 
그래서 꼭 공부를 하고 관련된 문제가 있다면 풀어봤습니다.
초등학교때는 기탄수학을 주구장창 풀었고 
대학교때는 기출문제를 주구장창 풀었습니다.
몇 문제를 맞았고 틀렸다는 결과물이 제가 부족한 부분을 알려줬습니다. 
하지만 문제의 정답을 맞추기 위한 공부를 하다보면 한계가 있습니다. 
세상에는 정해진 답이 없는 문제가 더 많으니까요.
그런 제가 처음 개발을 접하고는 너무 반가웠습니다. 
제가 공부하고 작성한 것에 대한 결과가 그 어떤 방식보다 훨씬 역동적인 방향으로 저에게 보여졌기 때문입니다. 
제가 잘못했다면 에러 매시지를 보여줬고 (물론 아닌 경우도 있지만요) 잘하고 있다면 제가 의도한 결과를 보여줬습니다.
또한 같은 결과라고 하더라도 성능등의 여러면에서 개선할 점이 있다는 것은 처음엔 약간의 두려움도 있엇지만 지금은 오히려 그런점이 즐겁습니다.

이렇게 개발을 처음 접한 1년 전 무작정 hybrid 앱을 만들어 보겠다며 유튜브, Udemy 등에서 html, css, javascript, react, react native 순으로 정신없이 조급하게 3개월 정도 공부를 했습니다. 
사실 중간에 android앱으로 방향을 바꿔 java도 공부했었습니다.
하지만 결과적으로 강의 없이 작은 부분조차 스스로 만들지 못하는걸 느끼고 좌절했습니다.
분명히 열심히 한것같은데 뭐가 문제일까 오랜 기간 고민했습니다.
고민끝에 제가 급한 마음에 습득한 지식들은 파도가 넘실대는 모래사장의 모래성 같다는 걸 깨달았고 제일 중요한건 기초라고 생각하게되었습니다. 
그래서 처음으로 돌아가 정말 많은 웹사이트를 html과 css 만으로 따라해보았고 
어느 정도 자신감이 생겼을때 html, css, javascript만으로 프로젝트를 수행하기 위해 노력했으며
현재는 React를 공부하고 있습니다. 
비슷한 목표를 가진 사람들에 비해 늦게 개발을 시작한 것이 조금은 후회스럽지만 늦은만큼 더욱 빠르고 단단하게 성장하려 노력하고 있습니다.`;

const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const now = new Date();
const h = now.getHours();
const d = day[now.getDay()];
console.log(d);

let time;
if(h < 7){
    time = '새벽';
}else if(h < 11){
    time = '아침';
}else if(h < 13){
    time = '점심';
}else if(h < 18){
    time = '오후';
}else{
    time = '저녁';
}
const app = new App(document.querySelector('#root'), d, time, projects);