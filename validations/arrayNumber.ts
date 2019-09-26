import { isNumber } from "util";

export  const isAllNumber = (data: any) =>  {
    let error = false;
    data.forEach( (element: any) => {
        if(!isNumber(element)){
            error = true;
        }
    });

    return error;
}
