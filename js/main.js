const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header =$('header')
const navMain = $(".nav-main");
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
    clickAddItem('Single Input')
    emptyQuestion.classList.add('hiden')
})



const arrayQuestion = []
// const inputPushArray = $(".inputPushArray")

function create(name) {
    arrayQuestion.push({
        name: name,
        id: indexId()      
    })
}

function clickAddItem(value) {
    console.log(value)
        create(value)
        render()
}

function indexId() {
    const alphabet = 'abcdefghijklmnouptqxyz1234567890';
    return alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)] 
    + alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)]
}
//--------------CLICK IN CREATOR INPUT--------------
//CLICK SINGLE INPUT  
const singleInput = $(".single-input")
singleInput.addEventListener("click", ()=>{
    clickAddItem('Single Input')
    emptyQuestion.classList.add('hiden')
})
//CLICK CHECK BOX INPUT
const checkBoxInput = $(".check-box")
checkBoxInput.addEventListener("click", ()=>{
    clickAddItem('Check Box')
    emptyQuestion.classList.add('hiden')
    
})
//CLICK CHECK BOX INPUT
const radioGroup = $(".radio-group")
radioGroup.addEventListener("click", ()=>{
    clickAddItem('Radio group')
    emptyQuestion.classList.add('hiden')
    
})

//CLICK DROP GROUP INPUT
const dropGroup = $(".drop-group")
dropGroup.addEventListener("click", ()=>{
    clickAddItem('Drop Group')
    emptyQuestion.classList.add('hiden')
})

function render() {
//--------------RENDER SUREVEY--------------
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
                ${arrayQuestion.name}<i class="fa-solid fa-angle-down"></i>
            </div>
            <div class="impact-question-now">
                <div class="impact"><i class="fa-solid fa-clone"></i>Duplicate</div>
                <div class="impact"><i class="fa-solid fa-toggle-off"></i>Required</div>
                <div class="impact"><i class="fa-solid fa-trash-can"></i>Delete</div>
            </div>
        </div>
    </form>`;
    //--------------RENDER QUESTION CONTINUE--------------
    const addQuestionContinue = $(".add-question-continue")
    
    addQuestionContinue.addEventListener("click", ()=>{
        clickAddItem('Single Input')
    })
    
    let question = '';
    for (let i = 0; i < arrayQuestion.length; i++) {
        if(arrayQuestion[i].name === 'Single Input'){
            question = question + `
            <form class="form-input single-input ">
                <div class="header-question">
                    <div class="number-question">${i+1}.</div>
                    <input  class="title-input" placeholder="question" type="text" name="" value="">
                </div>
                <div class="input-disable"></div>
                <div class="impact-question">
                    <div class="impact-question-form impact">
                    ${arrayQuestion[i].name}<i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="impact-question-now">
                        <div class="impact"><i class="fa-solid fa-clone"></i>Duplicate</div>
                        <div class="impact"><i class="fa-solid fa-toggle-off"></i>Required</div>
                        <div class="impact"><i class="fa-solid fa-trash-can"></i>Delete</div>
                    </div>
                </div>
            </form>`
        } if(arrayQuestion[i].name === 'Check Box') {
            question = question + `
            <form class="check-box form-input ">
                <div class="header-question">
                    <div class="number-question">${i+1}.</div>
                    <input  class="title-input" placeholder="question" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-plus icon-plus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="Select All" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-plus icon-plus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 1" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 2" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="none" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-plus icon-plus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="Other (describe)" type="text" name="" value="">
                </div>
                <div class="impact-question">
                    <div class="impact-question-form impact">
                    ${arrayQuestion[i].name}<i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="impact-question-now">
                        <div class="impact"><i class="fa-solid fa-clone"></i>Duplicate</div>
                        <div class="impact"><i class="fa-solid fa-toggle-off"></i>Required</div>
                        <div class="impact"><i class="fa-solid fa-trash-can"></i>Delete</div>
                    </div>
                </div>
            </form>`
        } if (arrayQuestion[i].name === 'Radio group') {
            question = question + `
            <form class="radio-group form-input ">
                <div class="header-question">
                    <div class="number-question">${i+1}.</div>
                    <input  class="title-input" placeholder="question" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 1" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 2" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 3" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-plus icon-plus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="none" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-plus icon-plus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="Other (describe)" type="text" name="" value="">
                </div>
                <div class="impact-question">
                    <div class="impact-question-form impact">
                    ${arrayQuestion[i].name}<i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="impact-question-now">
                        <div class="impact"><i class="fa-solid fa-clone"></i>Duplicate</div>
                        <div class="impact"><i class="fa-solid fa-toggle-off"></i>Required</div>
                        <div class="impact"><i class="fa-solid fa-trash-can"></i>Delete</div>
                    </div>
                </div>
            </form>`
        }if (arrayQuestion[i].name === 'Drop Group') {
            question = question + `
            <form class="drop-group form-input ">
                <div class="header-question">
                    <div class="number-question">${i+1}.</div>
                    <input  class="title-input" placeholder="question" type="text" name="" value="">
                </div>

                <div class="input-disable">
                    <div>Chosse...</div>
                    <i class="fa-solid fa-angle-down"></i>
                </div>

                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 1" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 2" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-minus icon-minus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="question 3" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-plus icon-plus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="none" type="text" name="" value="">
                </div>
                <div class="question-option-check box">
                    <i class="fa-solid fa-circle-plus icon-plus"></i>
                    <div class="input-disable box"></div>
                    <input  class="title-input" placeholder="Other (describe)" type="text" name="" value="">
                </div>
                <div class="impact-question">
                    <div class="impact-question-form impact">
                    ${arrayQuestion[i].name}<i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="impact-question-now">
                        <div class="impact"><i class="fa-solid fa-clone"></i>Duplicate</div>
                        <div class="impact"><i class="fa-solid fa-toggle-off"></i>Required</div>
                        <div class="impact"><i class="fa-solid fa-trash-can"></i>Delete</div>
                    </div>
                </div>
            </form>`
        }
    }
    allFormInput.innerHTML = question;
    console.log(arrayQuestion)
      
   // ---------------CLICK ERASER  ----------------
   const surveyTitle = $('.survey-title');
   const allPages = $('.all-pages');
   
   btnEraser.addEventListener("click", ()=>{
   
       emptyQuestion.classList.remove('hiden')
       surveyTitle.remove()
       allPages.remove()
       addQuestionContinue.remove()
   
       arrayQuestion.length = 0
   })
}
