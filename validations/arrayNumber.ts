import { isNumber } from "util";

const isAllNumber = (data) =>  {
    let isAllNumber = true;
    if(typeof data.forEach === 'function') {
        data.forEach( (element) => {
            if(!isNumber(element)){
                isAllNumber = false;
            }
    
        });    
    }else{
        isAllNumber = false;
    }
    
    return isAllNumber;
}

export  default isAllNumber;