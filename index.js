    const backspaceBtn = document.getElementById('calc-backspace')
    const clearBtn = document.getElementById('calc-clear')
    const decimalBtn = document.getElementById('calc-decimal')

    let numBtn = document.getElementsByClassName('calc-num')
    let operatorBtn = document.getElementsByClassName('calc-operator')
    let displayValElement = document.getElementById('calc-display-val');

    let displayVal = '0';
    let peddingVal = ' ';
    let evalstringVal = [];

        let processNum = function(clickObj){
            let btnText = clickObj.target.innerText;
            if(displayVal === '0'){
                displayVal = '';
            }
            displayVal += btnText;
            displayValElement.innerText = displayVal;
    }
        let processOperator = function(clickObj){
            let operator = clickObj.target.innerText;
            switch(operator){
                
                case('÷'):
                peddingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;   
                evalstringVal.push(peddingVal);
                evalstringVal.push('/');
                break;
                
                case('×'):
                peddingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalstringVal.push(peddingVal);
                evalstringVal.push('*');
                break;
                
                case('-'):
                peddingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalstringVal.push(peddingVal);
                evalstringVal.push('-');
                break;
                
                case('+'):
                peddingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalstringVal.push(peddingVal);
                evalstringVal.push('+');
                break;
                
                case('='):
                evalstringVal.push(displayVal);
                let evallusion = eval(evalstringVal.join(''));
                displayVal=evallusion;
                displayValElement.innerText = displayVal;
                evalstringVal = [];
                break;
            default:
                break;
            }
    }
        for(let i = 0;i<numBtn.length;i++){
            numBtn[i].addEventListener('click',processNum,false);
    }
        for(let i = 0;i<operatorBtn.length;i++){
            operatorBtn[i].addEventListener('click',processOperator,false);
    }
        clearBtn.onclick = function(){
            evalstringVal = [];
            displayVal = '0';
            displayValElement.innerText = displayVal;
    }
        backspaceBtn.onclick = function(){
            let displayValLength = displayVal.length;
            displayVal = displayVal.slice(0,-1);
            if(displayValLength <= 1){
                displayVal = '0';
            }
            displayValElement.innerText = displayVal;
    }
        decimalBtn.onclick = function(){
            if(!displayVal.includes('.')){
                displayVal+='.'
            }
            displayValElement.innerText = displayVal;
    }