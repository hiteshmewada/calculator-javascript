let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button text is ',buttonText);
        if(buttonText=='X')
        {
            buttonText='*';
            screenValue += buttonText;
            screen.Value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.Value = screenValue;
        }
        else if(buttonText == '='){
            screen.Value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.Value = screenValue;
        }

    })
}