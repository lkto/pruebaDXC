const suma = (data: any) => {
    let result = 0;
    data.forEach( (element: any, x: any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result = result + element;
        }
        
    });
    return result;
}

const resta = (data: any) => {
    let result = 0;
    data.forEach( (element: any, x: any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result = result - element;
        }
        
    });
    return result;
}

const multiplicaison = (data: any) => {
    let result = 0;
    data.forEach( (element: any,  x: any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result = result * element;
        }
        
    });
    return result;
}

const divicion = (data: any) => {
    let result = 0;
    data.forEach( (element: any, x:any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result = result / element;
        }
    });
    return result;
}

export {suma, resta, multiplicaison , divicion};