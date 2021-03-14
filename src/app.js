import About from "./components/about.js";
import Footer from "./components/footer.js";
import Home from "./components/home.js";
import Modal from "./components/modal.js";
import Nav from "./components/nav.js";
import Project from "./components/project.js";

export default class App{

    constructor($target, day, time, projects){
        this.io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    this.nav.setState({selected:entry.target.dataset.id});
                }
            })
        },{
            threshold: .4
        })

        this.modal = new Modal($target);
        this.nav = new Nav($target, this.toggleMode, this.modal.openModal);
        this.home = new Home($target, this.observe, day, time);
        this.about = new About($target, this.observe);
        this.project = new Project($target, this.observe, projects);
        this.setMode();
    }

    observe = (element) =>{
        this.io.observe(element);
    }
    setMode = () => {
        const mode = localStorage.getItem('MODE');
        if(mode){
            document.body.dataset.mode = mode;
        }else{
            if(window.matchMedia('(prefers-color-scheme: dark)').matches)
                document.body.dataset.mode = 'dark';
            else   
                document.body.dataset.mode = 'light';
        }
    }

    toggleMode = () => {
        if(document.body.dataset.mode !== 'dark'){
            localStorage.setItem('MODE', 'dark');
            document.body.dataset.mode = 'dark';
        }else {
            localStorage.setItem('MODE', 'light');
            document.body.dataset.mode = 'light';
        }
    }

}