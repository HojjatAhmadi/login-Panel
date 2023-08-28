const LeftSide = document.querySelectorAll('.leftside');
LeftSide[0].style.display='flex'
let LeftSideArray = [];

for(var i = 0 ; i < LeftSide.length ; i ++){
    LeftSideArray[i] = LeftSide[i]
}

function MovePage(pageid){
    const page = document.querySelector('#' + pageid);
    HideAnotherPage(page);
    page.style.display = 'flex';
}

function HideAnotherPage(page){
    for(let i = 0; i < LeftSide.length; i++) {
        if(LeftSide[i].style.display == 'flex'){
            if(LeftSide[i].id != page.id) {
                LeftSide[i].style.display = 'none';
            }
        }
    }
}

const LoginButton = document.querySelector('#login-account')
const CreatAccountButton = document.querySelector('#creat-account')
const BackLogin = document.querySelectorAll('#back-login-account')
const BackCreateAcc = document.querySelectorAll('#back-creat-account')
const Forgetbutton = document.querySelector('#forget-pass')

LoginButton.addEventListener('click', () => {
    MovePage('login-user');
})

CreatAccountButton.addEventListener('click' , () => {
    MovePage('creataccount-user')
})

BackCreateAcc.forEach(element => {
    element.addEventListener('click' , () => {
        MovePage('creataccount-user')
    })
})


BackLogin .forEach(element => {
    element.addEventListener('click' , () => {
        MovePage('login-user');
    })
})

Forgetbutton.addEventListener('click' , () => {
    MovePage('forgetpass-user')
})

MovePage('verifynumber-user')

// code use side

const CodeInput  = document.querySelectorAll('.code')


for (let i = 0; i < CodeInput.length; i++) {
    CodeInput[i].addEventListener('input' , (e) => {
        var pluslen = i+1 ; 
        var min = i-1 ; 

        if (CodeInput[i].value.length == 4){
            if (e.inputType == 'insertText'){
                if (pluslen < CodeInput.length){
                    CodeInput[pluslen].focus();
                }
            }
            else{
                if (min >= 0){
                    CodeInput[min].focus();
                }
            }
        }
        else if (CodeInput[i].value.length == 0){
            if (min >= 0){
                CodeInput[min].focus();
            }
        }
    }, CodeInput)
}