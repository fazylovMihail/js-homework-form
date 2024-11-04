let startBtn = document.querySelector('.start-btn');
let formName = document.querySelector('.form-name');
let finishText = document.querySelector('.finish-text');
let inputName = document.querySelector('.input-name')

function StartManager(){
    formName.style.display = 'flex';
    finishText.style.display = 'none';
    startBtn.style.display = 'none';
}
function FinishManager(e){
    e.preventDefault();

    let namePerson = inputName.value

    if(!namePerson) return;

    formName.style.display = 'none';
    finishText.style.display = 'block';
    startBtn.style.display = 'none';
    finishText.innerHTML = 'Привет, ' + namePerson + '!';
}

formName.addEventListener('submit',FinishManager)