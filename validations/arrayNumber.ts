import { isNumber } from "util";

export  const isAllNumber = (data) =>  {
    let error = false;
    if(typeof data.forEach === 'function') {
        data.forEach( (element) => {
            if(!isNumber(element)){
                error = true;
            }
    
        });    
    }else{
        error = true;
    }
    
    return error;
}
