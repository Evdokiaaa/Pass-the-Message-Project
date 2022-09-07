const sumbit = document.getElementById('sumbit')
const clear = document.getElementById('clear')
const messageInput = document.getElementById('message-input');
const messageOutPut = document.getElementById('message-output');

sumbit.addEventListener('click',() =>{
    let text = messageInput.value
    messageOutPut.innerHTML=text;
    messageInput.value = " ";


});

function owo(){
    let text = messageInput.value
    messageOutPut.innerHTML=text;
    messageInput.value = " ";

}

messageInput.addEventListener('keydown',(e)=>{
    if (e.key=='Enter'){
        owo();
    }


});

clear.addEventListener('click',()=>{
    messageInput.value = '';
    messageOutPut.innerHTML = '';
})






