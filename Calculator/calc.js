


let btns = document.querySelectorAll('button');
let input = document.querySelector('input');

let str='';
for(let btn of btns){
    btn.addEventListener('click', function(){
    

        let btnText = btn.innerText;

        if(btnText === 'C'){
            str='';
            input.value='';
        }
        else if(btnText === '='){
            try{
                input.value=eval(str);
            }
            catch{
                input.value='';
            }
        }
        else{
            str+=btnText;
            input.value=str;
        }
    })
}