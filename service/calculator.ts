const sum = (data: any) => {
    let result = 0;
    data.forEach( (element: any, x: any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result += element;
        }
        
    });
    return result;
}

const subtraction = (data: any) => {
    let result = 0;
    data.forEach( (element: any, x: any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result -= element;
        }
        
    });
    return result;
}

const multiplication = (data: any) => {
    let result = 0;
    data.forEach( (element: any,  x: any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result *= element;
        }
        
    });
    return result;
}

const division = (data: any) => {
    let result = 0;
    data.forEach( (element: any, x:any) => {
        if(x == 0)
        {
            result = element;
        }else{
            result /= element;
        }
    });
    return result;
}

export {sum, subtraction, multiplication , division};