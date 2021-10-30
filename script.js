
let sum = '0';
let il = true;

const TextCalc = document.getElementById('textCalc');



function Click(i){
    if(i == '='){
        sum = eval(sum);
        
        
        
    }

    if(i == 'clear'){
        sum = 0;
        il = true;
    }
    else{
        if(i != '='){
            if(il & i !='/' & i!='+' & i!='*' & i!='%' & i!='^'){
                sum = i;
                il = false;
            }
            else if (i != 'clear'){
                sum += i;
                    
               
            }
        }
        
    }
        
    TextCalc.innerHTML = sum;
}