const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header =$('header')
const addQuestionFirst = $(".add-question");
const btnEraser = $(".fa-eraser");
const showCreator = $(".show-creator");
const emptyQuestion = $(".empty-question");

const btnAddNewQuestion =$(".btnAddNewQuestion")
const page = $('.page');


// --------------StickyNavbar----------------
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);

};

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);
// ---------------ADD BASIC QUESTION ----------------
addQuestionFirst.addEventListener("click", ()=>{
    clickAddItem()
    emptyQuestion.remove();
})


const arrayQuestion = []
const inputPushArray = $(".inputPushArray")

function create(action) {
    
    arrayQuestion.push({
        name: action,
        id: indexId()      
    })
}

function clickAddItem() {
        create(inputPushArray.value);      
        render()
}

function indexId() {
    const alphabet = 'abcdefghijklmnouptqxyz1234567890';
    return alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)] 
    + alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)]
}

function render() {
   //--------------RENDER ALL PAGE--------------
    showCreator.innerHTML = `
    <form class="survey-title ">
        <input  class="survey-title-input" placeholder="Survey Title" type="text" name="" value="">
        <input class="description-input"  placeholder="Description" type="text">
    </form>
    <div class="all-pages">
        <div class="page">
            <input  class="page-title-input" placeholder="Page 1" type="text" name="" value="">
            <input class="description-input"  placeholder="Description" type="text">
            <div class="all-form-input">
                
            </div>
        </div>
    </div>
    <div class="empty-question">
        <div class="container">
            <div class="add-question-continue">
                Add Question
                <i class="fa-solid fa-ellipsis icon"></i>
            </div>
        </div>
    </div>`;
    //--------------RENDER QUESTION FIRST--------------
    const allFormInput = $(".all-form-input");
    allFormInput.innerHTML = `
    <form class="form-input single-input ">
        <div class="header-question">
            <div class="number-question">1.</div>
            <input  class="title-input" placeholder="question" type="text" name="" value="">
        </div>
        <div class="input-disable"></div>
        <div class="impact-question">
            <div class="impact-question-form impact">
                Checkbox<i class="fa-solid fa-angle-down"></i>
            </div>
            <div class="impact-question-now">
                <div class="impact"><i class="fa-solid fa-clone"></i>Duplicate</div>
                <div class="impact"><i class="fa-solid fa-toggle-off"></i>Required</div>
                <div class="impact"><i class="fa-solid fa-trash-can"></i>Delete</div>
            </div>
        </div>
    </form>`;

    const addQuestionContinue = $(".add-question-continue")
    addQuestionContinue.addEventListener("click", ()=>{
        clickAddItem()
    }) 
    let question = '';
    for (let i = 0; i < arrayQuestion.length; i++) {
        question = question + `
        <form class="form-input single-input ">
            <div class="header-question">
                <div class="number-question">${i+1}.</div>
                <input  class="title-input" placeholder="question" type="text" name="" value="">
            </div>
            <div class="input-disable"></div>
            <div class="impact-question">
                <div class="impact-question-form impact">
                    Checkbox<i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="impact-question-now">
                    <div class="impact"><i class="fa-solid fa-clone"></i>Duplicate</div>
                    <div class="impact"><i class="fa-solid fa-toggle-off"></i>Required</div>
                    <div class="impact"><i class="fa-solid fa-trash-can"></i>Delete</div>
                </div>
            </div>
        </form>`;
    }
    allFormInput.innerHTML = question;
      
    // //--------------RENDER QUESTION CONTINUE--------------
    
}
