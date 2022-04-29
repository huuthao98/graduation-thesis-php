const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header =$('header')
const addQuestion = $(".add-question");
const btnEraser = $(".fa-eraser");
const showCreator = $(".show-creator");
const emptyQuestion = $(".empty-question");

const btnAddNewQuestion =$(".btnAddNewQuestion")
const page = $('.page');
let checkQuestionLocal = localStorage.getItem('hiden');

// --------------StickyNavbar----------------
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);

};

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);
// ---------------HIDEN QUESTION ADD----------------

//check is question
checkClassHiden(+checkQuestionLocal)
function checkClassHiden(isHiden) {
    if(isHiden) {
        emptyQuestion.classList.add("hiden")
        showCreator.classList.remove("hiden")
    } else {
        emptyQuestion.classList.remove("hiden")
        showCreator.classList.add("hiden")
    }
}

//add class hiden
addQuestion.addEventListener("click", ()=> {
    localStorage.setItem("hiden",1)
    emptyQuestion.classList.add("hiden")
    showCreator.classList.remove("hiden")
});

btnEraser.addEventListener("click", ()=> {
    if (confirm('You are going to delete all elements in this survey. Do you want to proceed??')) {
        emptyQuestion.classList.remove("hiden")
        showCreator.classList.add("hiden")
        localStorage.setItem("hiden",0)
    }

});

// --------------- ADD NEW QUESION----------------
