const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addQuestion = $(".add-question");
const btnEraser = $(".fa-eraser");
const showCreator = $(".show-creator");
const emptyQuestion = $(".empty-question");

const btnddNewQuestion =$(".btnddNewQuestion")

let checkQuestionLocal = localStorage.getItem('hiden');

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
    emptyQuestion.classList.remove("hiden")
    showCreator.classList.add("hiden")
    localStorage.setItem("hiden",0)
});

// --------------- ADD NEW QUESION----------------

btnAddNewQuestion.addEventListener("click", ()=> {

})